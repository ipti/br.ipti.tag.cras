import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { UploadFileRequest } from '../../sdk/FileUpload/request';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FieldLabel = styled.label`
  font-size: 14px;
  color: #495057;
  font-weight: 500;
`;

const UploadBox = styled.div`
  border: 2px dashed ${({ $hasFile }) => ($hasFile ? '#1976d2' : '#ced4da')};
  border-radius: 6px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background: ${({ $hasFile }) => ($hasFile ? '#f0f7ff' : '#f8f9fa')};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: #1976d2;
    background: #f0f7ff;
  }
`;

const PreviewImage = styled.img`
  height: 60px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  background: #fff;
  flex-shrink: 0;
`;

const UploadTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const UploadHint = styled.span`
  font-size: 13px;
  color: #6c757d;
`;

const FileName = styled.span`
  font-size: 12px;
  color: #495057;
  word-break: break-all;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: #dc3545;
`;

const ChangeButton = styled.button`
  margin-top: 4px;
  font-size: 12px;
  padding: 2px 8px;
  border: 1px solid #6c757d;
  border-radius: 4px;
  background: transparent;
  color: #6c757d;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: #f8f9fa;
  }
`;

/**
 * Componente genérico de upload de arquivo.
 *
 * Props:
 *   value    — objeto file_upload do banco ({ id, blob_url, original_name, ... }) ou null
 *   onChange — callback chamado com o objeto file_upload retornado pela API
 *   accept   — tipos MIME aceitos (padrão: "image/png,image/jpeg,image/jpg")
 *   label    — rótulo exibido acima do campo
 *   folder   — subpasta no Azure Blob container (padrão: "logos")
 */
const FileUpload = ({
    value = null,
    onChange,
    accept = 'image/png,image/jpeg,image/jpg',
    label = 'Arquivo',
    folder = 'logos',
}) => {
    const inputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const handleBoxClick = () => {
        if (!uploading) inputRef.current?.click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError(null);
        setUploading(true);

        try {
            const record = await UploadFileRequest(file, folder);
            onChange?.(record);
        } catch (err) {
            const msg = err?.response?.data?.message ?? 'Erro ao enviar arquivo. Tente novamente.';
            setError(Array.isArray(msg) ? msg.join('; ') : msg);
        } finally {
            setUploading(false);
            e.target.value = '';
        }
    };

    const isImage =
        value?.mime_type?.startsWith('image/') ||
        /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(value?.blob_url ?? '');

    return (
        <Wrapper>
            {label && <FieldLabel>{label}</FieldLabel>}

            <UploadBox $hasFile={!!value?.blob_url} onClick={handleBoxClick}>
                {isImage && value?.blob_url ? (
                    <PreviewImage
                        src={value.blob_url}
                        alt={value.original_name ?? 'Preview'}
                        crossOrigin="anonymous"
                    />
                ) : null}

                <UploadTextArea>
                    {uploading ? (
                        <UploadHint>Enviando...</UploadHint>
                    ) : value?.blob_url ? (
                        <>
                            <FileName>{value.original_name}</FileName>
                            <UploadHint>Clique para substituir</UploadHint>
                        </>
                    ) : (
                        <UploadHint>Clique para selecionar uma imagem</UploadHint>
                    )}
                </UploadTextArea>
            </UploadBox>

            {error && <ErrorText>{error}</ErrorText>}

            {value?.blob_url && !uploading && (
                <ChangeButton type="button" onClick={handleBoxClick}>
                    Trocar imagem
                </ChangeButton>
            )}

            <input
                ref={inputRef}
                type="file"
                accept={accept}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </Wrapper>
    );
};

export default FileUpload;
