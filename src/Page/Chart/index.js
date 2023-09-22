import React, { useContext, useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Container, Grid } from "../../CrasUi/styles/styles";
import { ChartsContext } from "../../context/Chart/context";
import Grafico from "../../Components/Graph";

const ChartPage = () => {
  const { charts } = useContext(ChartsContext);

  const randomColors = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  };

  return (
    <Container>
      <Grid checkMockup={[{}, {}, {}]}>
        {charts.map((chart) => {
          const data = {
            labels: chart.data.map((chartMaped) => chartMaped.name),
            datasets: [
              {
                label: chart.title,
                data: chart.data.map((chartMaped) => chartMaped.value),
                backgroundColor: chart.data.map((chartMaped) => randomColors()),
                hoverBackgroundColor: chart.data.map((chartMaped) =>
                  randomColors()
                ),
              },
            ],
          };
          const options = {
            plugins: {
              legend: {
                labels: {
                  usePointStyle: true,
                },
              },
            },
          };
          return (
            <Grafico
              key={chart.id}
              type="bar"
              chartData={data}
              chartOptions={options}
              title={chart.title}
              className="w-full md:w-25rem"
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default ChartPage;
