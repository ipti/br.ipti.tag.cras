import { useEffect, useState } from "react";
import { BenefitsController } from "../../../sdk/Benefits/ListBenefits/controller";

export const ListBenefitsState = () => {

    const { benefitsfetch, isLoading, error, DeleteBenefitsRequestMutation } = BenefitsController();
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        if (benefitsfetch) {
            setBenefits(benefitsfetch)
        }
    }, [benefitsfetch])


    const deleteBenefits = (id) => {
        DeleteBenefitsRequestMutation.mutate(id)
    }

    return {
        benefits, isLoading, error, deleteBenefits
    }
}