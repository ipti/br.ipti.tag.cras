import { Formik } from "formik";
import { MultiSelect } from "primereact/multiselect";
import { Toast } from "primereact/toast";
import React, { useContext } from "react";
import ButtonPrime from "../../../CrasUi/Button/ButtonPrime";
import CrasCheckbox from "../../../CrasUi/Checkbox";
import CrasDropdown from "../../../CrasUi/Dropdown";
import CrasInput from "../../../CrasUi/Input/Input";
import CrasInputArea from "../../../CrasUi/Input/inputArea";
import { Column, Container, Grid, Padding, Row } from "../../../CrasUi/styles/styles";
import { UserIdentifyContext } from "../../../context/FamilyRefered/FamilyRefered/context";
import { EditServiceContext } from "../../../context/Service/EditService/context";

const EditServicePage = () => {
    const { userIdentifyFamily } = useContext(UserIdentifyContext)


    const { initialValue, service, result, technician, handleCreateService, Schema, userIdentify, serviceOne, toast, handleAddFamilyService, handleRemoveFamilyService } = useContext(EditServiceContext)

    const FilterFamliysGroups = (props) => {
        const array = []
        props?.forEach(element => {
            array.push({ id: element?.family.id, name: element?.family?.user_identify?.name })
        });
        return array
    }


    const FilterFamliys = (props) => {
        const array = []
        props?.forEach(element => {
            array.push({ id: element?.id, name: element?.representative?.name })
        });
        return array
    }

    const HandleAddorRemoveFamily = (e, set, value) => {
        console.log(e)
        if (value.find(props => props.id === e.selectedOption.id)) {
            handleRemoveFamilyService({ familyId: e.selectedOption.id })
        } else {
            handleAddFamilyService({ familyId: e.selectedOption.id })
        }
        set("families", e.target.value)
    }
    return (
        <Container>
            <Column>
                <h1>
                    Editar Atendimentos
                </h1>
                <Padding padding="16px" />
                {serviceOne ? <Formik initialValues={!serviceOne?.group_attendance ? initialValue : { ...initialValue, families: FilterFamliysGroups(serviceOne?.group_attendance) }} onSubmit={handleCreateService} validationSchema={Schema}>
                    {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
                        return <form onSubmit={handleSubmit}>
                            <h3>Dados do atendimento</h3>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown name="task_fk" value={values.task_fk} onChange={handleChange} optionLabel={"name"} options={service} label="Serviço" />
                                    <Padding />
                                    {errors.task_fk && touched.task_fk ? (
                                        <div style={{ color: "red" }}>{errors.task_fk}<Padding /></div>
                                    ) : null}
                                </Column>
                                <Column>
                                    <CrasInput name="solicitation" value={values.solicitation} onChange={handleChange} label="Solicitação" />
                                    <Padding />
                                    {errors.solicitation && touched.solicitation ? (
                                        <div style={{ color: "red" }}>{errors.solicitation}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasInput name="providence" value={values.providence} onChange={handleChange} label="Providências" />
                                    <Padding />
                                    {errors.providence && touched.providence ? (
                                        <div style={{ color: "red" }}>{errors.providence}<Padding /></div>
                                    ) : null}

                                </Column>
                                <Column>
                                    <CrasDropdown name="result" value={values.result} optionLabel={"name"} options={result} onChange={handleChange} label="Resultado" />
                                    <Padding />
                                    {errors.result && touched.result ? (
                                        <div style={{ color: "red" }}>{errors.result}<Padding /></div>
                                    ) : null}
                                </Column>
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <CrasCheckbox checked={serviceOne?.group_attendance !== undefined} value={serviceOne?.group_attendance} label={"Atendimento em grupos"} />
                            </Grid>
                            <Grid checkMockup={[{}, {}]}>
                                <Column>
                                    <CrasDropdown optionLabel={"name"} name="technician_fk" onChange={handleChange} value={values.technician_fk} options={technician} label="Técnico Responsável" />
                                    <Padding />
                                    {errors.technician_fk && touched.technician_fk ? (
                                        <div style={{ color: "red" }}>{errors.technician_fk}<Padding /></div>
                                    ) : null}
                                </Column>
                                {!serviceOne?.group_attendance ? <Column><CrasDropdown onChange={handleChange} filter value={values.user_identify_fk} name={"user_identify_fk"} optionLabel={"name"} options={userIdentify} label="Usuário ou Membro Familiar" />
                                    <Padding />
                                    {errors.user_identify_fk && touched.user_identify_fk ? (
                                        <div style={{ color: "red" }}>{errors.user_identify_fk}<Padding /></div>
                                    ) : null}
                                </Column> : <Column>
                                    <label htmlFor="username" style={{ marginBottom: "8px", marginLeft: "4px" }}>Selecione as familias</label>
                                    <MultiSelect style={{ height: "37px" }} placeholder="Selecione as familias" name="families" value={values.families} onChange={(e) => HandleAddorRemoveFamily(e, setFieldValue, values.families)} options={FilterFamliys(userIdentifyFamily)} optionLabel="name"
                                        filter maxSelectedLabels={3} />
                                    <Padding />
                                    {errors.family && touched.family ? (
                                        <div style={{ color: "red" }}>{errors.family}<Padding /></div>
                                    ) : null}
                                </Column>}
                            </Grid>
                            <Grid checkMockup={[{}]}>
                                <CrasInputArea name={"description"} label={"Descrição"} onChange={handleChange} value={values.description} />
                            </Grid>
                            <Padding />
                            {errors.description && touched.description ? (
                                <div style={{ color: "red" }}>{errors.description}<Padding /></div>
                            ) : null}
                            <Padding padding="16px" />
                            <Row id="end">
                                <ButtonPrime type="submit" label="Salvar" />
                            </Row>
                        </form>
                    }}
                </Formik> : null}
            </Column>
            <Padding padding="16px" />
            <Toast ref={toast} />

        </Container>
    )
}

export default EditServicePage;