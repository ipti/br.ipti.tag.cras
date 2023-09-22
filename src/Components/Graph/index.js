import { Chart } from "primereact/chart";
import React from "react";
import { Column, Row } from "../../CrasUi/styles/styles";
const Grafico = ({
  chartData,
  chartOptions,
  type,
  title,
  width,
  className,
}) => {
  return (
    <Column
      style={{
        padding: "16px",
        minWidth: "40%",
        width: width ? width : "100%",
      }}
    >
      <Row id="center">
        <h1 style={{ fontSize: "13px" }}>{title}</h1>
      </Row>
      <Chart
        style={{ padding: "16px" }}
        type={type}
        width={width}
        data={chartData}
        options={chartOptions}
        className={className}
      />
    </Column>
  );
};

export default Grafico;
