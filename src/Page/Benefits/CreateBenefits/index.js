import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateBenefitsContext } from "../../../context/Benefits/CreateBenefits/context";

const CreateBenefitsScreen = () => {

    const { handleCreateBenefits, CreateSchema, initialValue, types } = useContext(CreateBenefitsContext);

    return (
        <Container>
            <Column>
                <h1>
                    Criar Beneficio
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={(values) => handleCreateBenefits(values)} validationSchema={CreateSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Grid checkMockup={[{}, {}]}>
                                    <Column>
                                        <CrasInput
                                            name="description"
                                            value={values.description}
                                            onChange={handleChange}
                                            label="Nome" />
                                        <Padding />
                                        {errors.description && touched.description ? (
                                            <div style={{ color: "red" }}>{errors.description}</div>
                                        ) : null}
                                    </Column>
                                    <Column>
                                        <CrasDropdown name="type" value={values.type} options={types} onChange={handleChange} optionLabel={"name"} label="Tipo" />
                                        <Padding />
                                        {errors.type && touched.type ? (
                                            <div style={{ color: "red" }}>{errors.type}<Padding /></div>
                                        ) : null}
                                    </Column>
                                </Grid>
                                <Padding padding="16px" />
                                <Row id="end">
                                    <ButtonPrime type="submit" label="Cadastrar" />
                                </Row>
                            </form>
                        )
                    }
                    }
                </Formik>

            </Column>
        </Container>
    )
}


export default CreateBenefitsScreen;