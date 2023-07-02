import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const monthAmountArray = props.datapoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...monthAmountArray);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            label={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};

export default Chart;