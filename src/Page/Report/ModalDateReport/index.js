import { Formik } from "formik";
import { Dialog } from "primereact/dialog";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../CrasUi/Dropdown";
import { Column, Padding, Row } from "../../../CrasUi/styles/styles";
import { useNavigate } from "react-router-dom";

const ModalDateReport = ({ visible, setVisible }) => {

    const year = [2020, 2021, 2022, 2023, 2024, 2025]
    const month = [
        { name: 'Janeiro', id: 1 },
        { name: 'Fevereiro', id: 2 },
        { name: 'Março', id: 3 },
        { name: 'Abril', id: 4 },
        { name: 'Maio', id: 5 },
        { name: 'Junho', id: 6 },
        { name: 'Julho', id: 7 },
        { name: 'Agosto', id: 8 },
        { name: 'Setembro', id: 9 },
        { name: 'Outubro', id: 10 },
        { name: 'Novembro', id: 11 },
        { name: 'Dezembro', id: 12 }
    ];
        const history = useNavigate()


    return (

        <Dialog header="Escolher periodo" visible={visible} className="w-9 md:w-5" style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <Padding padding="8px" />
            <Formik initialValues={{ year: "", month: "" }} onSubmit={(values) => { history(`/rma-cras/${values.month.id}/${values.year}`); setVisible(false) }}>
                {({ values, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Padding padding="8px" />
                            <CrasDropdown label={"Mês"} name={"month"} optionLabel={"name"} value={values.month} options={month} onChange={handleChange} />
                            <Padding padding="8px" />
                            <CrasDropdown label={"Ano"} name={"year"} value={values.year} options={year} onChange={handleChange} />
                            <Padding padding="8px" />
                            <Column>
                                <Row id="center">
                                    <ButtonPrime type={"submit"} label={"Prosseguir"} />
                                </Row>
                            </Column>
                        </form>
                    )
                }}
            </Formik>

            <Padding padding="8px" />

        </Dialog >
    )
}

export default ModalDateReport