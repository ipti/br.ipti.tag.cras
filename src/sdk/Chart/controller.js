import { useFetchAllCharts } from "./index";
import { useNavigate } from "react-router-dom";

export const ChartsController = () => {
  const history = useNavigate();

  const { data: chartsfetch } = useFetchAllCharts()

  return {
    chartsfetch
  }
}