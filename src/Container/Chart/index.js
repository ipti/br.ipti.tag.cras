import React from "react";
import ChartPage from "../../Page/Chart/index";
import ChartsProvider from "../../context/Chart/context";

const Chart = () => {
    return (
        <ChartsProvider>
            <ChartPage />
        </ChartsProvider>
    )
}

export default Chart;