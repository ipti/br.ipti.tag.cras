import { Formik } from "formik";
import { Toast } from "primereact/toast";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { EditTechnicianContext } from "../../../context/Technician/EditTechnician/context";
import CrasDropdown from "../../../CrasUi/Dropdown";


const EditTechnicianScreen = () => {

    const { CreateSchema, initialValue, technician, handleEditTechnician, toast, user, functions } = useContext(EditTechnicianContext);
    return (
        <Container>
            <Column>
                <h1>
                    Editar Tecnico
                </h1>.
                <Padding padding="16px" />
                {technician ?
                    <Formik initialValues={initialValue}
                    onSubmit={(values) => { handleEditTechnician({ ...values, type: values.type.id }); }}
                    validationSchema={CreateSchema}>
                        {({ values, handleChange, errors, touched, handleSubmit }) => {
                            return <form onSubmit={handleSubmit}>
                                <Grid checkMockup={[{}, {}]}>
                                    <Column>
                                        <CrasInput
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            label="Nome *" />
                                        <Padding />
                                        {errors.name && touched.name ? (
                                            <div style={{ color: "red" }}>{errors.name}</div>
                                        ) : null}
                                    </Column>
                                    <Column>
                                        <CrasDropdown
                                            name="user"
                                            value={values.user}
                                            onChange={handleChange}
                                            options={user}
                                            optionLabel={"name"}
                                            label="Usuário *" />
                                        <Padding />
                                        {errors.user && touched.user ? (
                                            <div style={{ color: "red" }}>{errors.user}<Padding /></div>
                                        ) : null}
                                    </Column>
                                </Grid>
                                <Grid checkMockup={[{}, {}]}>
                                    <Column>
                                        <CrasInput
                                            name="professional_register"
                                            value={values.professional_register}
                                            onChange={handleChange}
                                            label="Registro Profissional" />
                                        <Padding />
                                        {errors.professional_register && touched.professional_register ? (
                                            <div style={{ color: "red" }}>{errors.professional_register}</div>
                                        ) : null}
                                    </Column>
                                    <Column>
                                        <CrasDropdown
                                            name="type"
                                            value={values.type}
                                            onChange={handleChange}
                                            options={functions}
                                            optionLabel={"name"}
                                            label="Função *" />
                                        <Padding />
                                        {errors.type && touched.type ? (
                                            <div style={{ color: "red" }}>{errors.type}<Padding /></div>
                                        ) : null}
                                    </Column>
                                </Grid>
                                <Padding padding="16px" />
                                <Row id="end">
                                    <ButtonPrime type="submit" label="Salvar" />
                                </Row>
                            </form>;
                        }
                        }
                    </Formik> : null}
                <Toast ref={toast} />
            </Column>
        </Container>
    )
}

export default EditTechnicianScreen;