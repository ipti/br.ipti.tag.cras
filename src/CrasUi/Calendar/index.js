import React from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Column } from "../styles/styles";

const CrasCalendar = ({ date, setDate, label,...props }) => {

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
        dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
        today: 'Hoje',
        clear: 'Limpiar'
    });

    return (
        <Column>
            <label htmlFor="username">{label}</label>
            <Calendar value={date} style={{ width: "100%" }} onChange={(e) => setDate(e.value)} locale="es" {...props} />
        </Column>
    )
}

export default CrasCalendar;