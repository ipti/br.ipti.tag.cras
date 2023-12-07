import { Formik } from "formik";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasInput from "../../../CrasUi/Input/Input";
import { Column, Container, Padding, Row } from "../../../CrasUi/styles/styles";
import { EditTypeServiceContext } from "../../../context/TypeService/EditTypeService/contex";
import { Toast } from "primereact/toast";

const EditTypeServiceScreen = () => {

    const { CreateSchema, handleEditTypeService, initialValue, typeService, toast } = useContext(EditTypeServiceContext);

    return (
        <Container>
            <Column>
                <h1>
                    Editar Serviço
                </h1>
                <Padding padding="16px" />
                {typeService ? <Formik initialValues={initialValue} onSubmit={(values) => {handleEditTypeService(values)}} validationSchema={CreateSchema}>
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
                                <ButtonPrime type="submit" label="Salvar" />
                            </Row>
                        </form>
                    }
                </Formik> : null}
                <Toast ref={toast} />
            </Column>
        </Container>
    )
}

export default EditTypeServiceScreen;