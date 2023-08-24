import { Formik } from "formik";
import { Toast } from "primereact/toast";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { EditTechnicianContext } from "../../../context/Technician/EditTechnician/context";

const EditTechnicianScreen = () => {

    const { CreateSchema, initialValue, technician, handleEditTechnician, toast } = useContext(EditTechnicianContext);

    return (
        <Container>
            <Column>
                <h1>
                    Editar Tecnico
                </h1>
                <Padding padding="16px" />
                {technician ? <Formik initialValues={initialValue}
                    onSubmit={(values) => {handleEditTechnician(values); }}
                    validationSchema={CreateSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) =>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput
                                        name="nome"
                                        value={values.nome}
                                        onChange={handleChange}
                                        label="Nome" />
                                    {errors.nome && touched.nome ? (
                                        <div style={{ color: "red" }}>{errors.nome}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Cadastrar" />
                            </Row>
                        </form>
                    }
                </Formik> : null}
                <Toast ref={toast} />
            </Column>
        </Container>
    )
}

export default EditTechnicianScreen;