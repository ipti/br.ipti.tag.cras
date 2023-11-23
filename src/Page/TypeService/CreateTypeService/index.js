import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { CreateTypeServiceContext } from "../../../context/TypeService/CreateTypeService/context";

const CreateTypeServiceScreen = () => {

    const { CreateSchema, handleCreateTypeService, initialValue } = useContext(CreateTypeServiceContext);

    return (
        <Container>
            <Column>
                <h1>
                    Novo Serviço
                </h1>
                <Padding padding="16px" />
                <Formik initialValues={initialValue} onSubmit={(values) => handleCreateTypeService(values)} validationSchema={CreateSchema}>
                    {({ values, handleChange, errors, touched, handleSubmit }) =>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <div className="col">
                                    <CrasInput
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        label="Nome *" />
                                    {errors.name && touched.name ? (
                                        <div style={{ color: "red" }}>{errors.name}</div>
                                    ) : null}
                                </div>
                            </Row>
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Cadastrar" />
                            </Row>
                        </form>
                    }
                </Formik>
            </Column>
        </Container>
    )
}

export default CreateTypeServiceScreen;