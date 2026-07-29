import { jsPDF } from 'jspdf';
import { GetFileStreamRequest } from '../../../sdk/FileUpload/request';
import { GetIdAttendance } from '../../../services/localstorage';
import http from '../../../services/axios';
import { getToken } from '../../../services/localstorage';

const MARGIN = 15;
const PAGE_W = 210;
const PAGE_H = 297;
const CONTENT_W = PAGE_W - MARGIN * 2;

const COL_WIDTHS = [8, 22, 42, 46, 34, 28]; // N°, Data, Nome, Endereço, Técnico, Assinatura
const COL_HEADERS = ['N°', 'Data', 'Nome do Responsável', 'Endereço / Ref.', 'Técnico', 'Assinatura'];
const ROW_H = 11;
const HEADER_ROW_H = 7;

const blobToDataUrl = (blob) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });

const fetchUnity = async (id) => {
    const config = { headers: { Authorization: `Bearer ${getToken()}` } };
    const response = await http.get('/bff/attendance-unity', {
        ...config,
        params: { attendance_unity_fk: id },
    });
    return response.data;
};

const drawTableRow = (doc, y, cols, values, rowH, bold = false) => {
    let x = MARGIN;
    doc.setDrawColor(180);
    doc.setLineWidth(0.2);
    doc.rect(x, y, CONTENT_W, rowH);

    if (bold) doc.setFont('helvetica', 'bold');
    else doc.setFont('helvetica', 'normal');

    for (let i = 0; i < cols.length; i++) {
        if (i > 0) {
            doc.line(x, y, x, y + rowH);
        }
        const text = values[i] ?? '';
        doc.setFontSize(bold ? 7.5 : 7);
        doc.text(String(text), x + 1.5, y + rowH / 2 + (bold ? 1.2 : 1), { baseline: 'middle' });
        x += cols[i];
    }
};

export const generateSignatureSheet = async () => {
    const unityId = GetIdAttendance();
    if (!unityId) {
        alert('Selecione uma unidade antes de gerar a folha.');
        return;
    }

    let unity = null;
    try {
        unity = await fetchUnity(unityId);
    } catch {
        alert('Não foi possível carregar os dados da unidade.');
        return;
    }

    let logoDataUrl = null;
    if (unity?.logo_fk) {
        try {
            const blob = await GetFileStreamRequest(unity.logo_fk);
            logoDataUrl = await blobToDataUrl(blob);
        } catch {
            // continue without logo
        }
    }

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    let pageNum = 1;

    const drawHeader = () => {
        // ── Logo box ────────────────────────────────────────────────────────
        const logoSize = 28;
        const logoX = MARGIN;
        const logoY = MARGIN;

        if (logoDataUrl) {
            try {
                doc.addImage(logoDataUrl, logoX, logoY, logoSize, logoSize, undefined, 'FAST');
            } catch {
                doc.setDrawColor(200);
                doc.setFillColor(248, 248, 248);
                doc.rect(logoX, logoY, logoSize, logoSize, 'FD');
            }
        } else {
            doc.setDrawColor(200);
            doc.setFillColor(248, 248, 248);
            doc.rect(logoX, logoY, logoSize, logoSize, 'FD');
            doc.setFontSize(6);
            doc.setTextColor(180);
            doc.text('LOGO', logoX + logoSize / 2, logoY + logoSize / 2, { align: 'center', baseline: 'middle' });
            doc.setTextColor(0);
        }

        // ── Unit identity block ──────────────────────────────────────────────
        const city = unity?.address?.edcenso_city?.name ?? '';
        const uf = unity?.address?.edcenso_city?.edcenso_uf?.acronym ?? '';
        const unityType = unity?.type ?? '';
        const unityNumber = unity?.unity_number ? `Nº ${unity.unity_number}` : '';
        const unityName = unity?.name ?? 'Unidade de Assistência Social';
        const unityEmail = unity?.email ?? '';
        const addr = unity?.address?.address ?? '';
        const tel = unity?.address?.telephone ?? '';
        const reference = unity?.address?.reference ?? '';
        const conditions = unity?.address?.conditions ?? '';
        const cityState = [city, uf].filter(Boolean).join(' - ');

        const idX = MARGIN + logoSize + 6;
        const idW = CONTENT_W - logoSize - 6;

        // Type badge above the name
        if (unityType || unityNumber) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(7.5);
            doc.setTextColor(100, 120, 160);
            doc.text([unityType, unityNumber].filter(Boolean).join('  •  '), idX, MARGIN + 5);
        }

        // Main name
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(20, 45, 100);
        doc.text(unityName, idX, MARGIN + 13, { maxWidth: idW });

        // Thin separator
        doc.setDrawColor(190, 200, 220);
        doc.setLineWidth(0.25);
        doc.line(idX, MARGIN + 17, MARGIN + CONTENT_W, MARGIN + 17);

        // Detail rows — bold label + normal value, with explicit spacing
        doc.setFontSize(8);
        doc.setTextColor(50);

        let detailY = MARGIN + 23;
        const lineH = 5.5;

        const detailLine = (label, value) => {
            if (!value) return;
            doc.setFont('helvetica', 'bold');
            const labelText = `${label}: `;
            doc.text(labelText, idX, detailY);
            const labelW = doc.getTextWidth(labelText);
            doc.setFont('helvetica', 'normal');
            doc.text(value, idX + labelW, detailY, { maxWidth: idW - labelW });
            detailY += lineH;
        };

        detailLine('Endereço', addr);
        detailLine('Município', cityState);
        detailLine('Telefone', tel);
        detailLine('E-mail', unityEmail);

        doc.setTextColor(0);

        const headerBottom = Math.max(MARGIN + logoSize + 4, detailY + 4);

        // ── Title bar ────────────────────────────────────────────────────────
        doc.setFillColor(20, 45, 100);
        doc.rect(MARGIN, headerBottom, CONTENT_W, 9, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(255);
        doc.text('FOLHA DE REGISTRO DE VISITAS', PAGE_W / 2, headerBottom + 5, {
            align: 'center',
            baseline: 'middle',
        });
        doc.setTextColor(0);

        // ── Fill fields row ──────────────────────────────────────────────────
        const metaY = headerBottom + 14;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text('Mês/Ano: ____________________', MARGIN, metaY);
        doc.text('Técnico(a) Responsável: ________________________________', PAGE_W / 2, metaY, { align: 'center' });
        doc.text(`Pág. ${pageNum}`, PAGE_W - MARGIN, metaY, { align: 'right' });

        return metaY + 7;
    };

    const drawFooter = () => {
        const footerY = PAGE_H - MARGIN - 10;
        doc.setDrawColor(150);
        doc.setLineWidth(0.3);
        doc.line(MARGIN, footerY, MARGIN + 80, footerY);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.text('Coordenador(a) / Responsável pela Unidade', MARGIN, footerY + 4);
        doc.setFontSize(7);
        doc.setTextColor(150);
        doc.text('Documento gerado pelo sistema CRAS', PAGE_W - MARGIN, footerY + 4, { align: 'right' });
        doc.setTextColor(0);
    };

    const ROWS_PER_PAGE = 17;
    const TOTAL_ROWS = ROWS_PER_PAGE * 2; // 2 pages

    let startY = drawHeader();
    drawTableRow(doc, startY, COL_WIDTHS, COL_HEADERS, HEADER_ROW_H, true);
    startY += HEADER_ROW_H;

    for (let i = 0; i < TOTAL_ROWS; i++) {
        if (i > 0 && i % ROWS_PER_PAGE === 0) {
            drawFooter();
            doc.addPage();
            pageNum++;
            startY = drawHeader();
            drawTableRow(doc, startY, COL_WIDTHS, COL_HEADERS, HEADER_ROW_H, true);
            startY += HEADER_ROW_H;
        }
        drawTableRow(doc, startY, COL_WIDTHS, [i + 1, '', '', '', '', ''], ROW_H);
        startY += ROW_H;
    }

    drawFooter();
    doc.output('dataurlnewwindow');
};
