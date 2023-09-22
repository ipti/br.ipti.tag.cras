import { useEffect, useState } from "react";
import { ChartsController } from "../../sdk/Chart/controller";

export const ChartsState = () => {

    const { chartsfetch } = ChartsController();
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        if(chartsfetch){
            setCharts(chartsfetch.data.data)
        }
    }, [chartsfetch])
    
    return{
        charts
    }
}