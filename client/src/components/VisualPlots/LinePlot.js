import React from "react";
import "./style.css";
import Plot from "react-plotly.js";
import PlotJson from "../../scripts/plot.json";
const LinePlot = () => {
  return (
    <div className="plots-container">
      <Plot
        data={[
          {
            x: PlotJson.V,
            y: PlotJson.o,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          width: 330,
          height: 240,
          xaxis: { title: { text: "Voltage" } },
          yaxis: { title: { text: "Current" } },
          title: "Line plot",
        }}
      />
    </div>
  );
};

export default LinePlot;
