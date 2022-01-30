import React from "react";
import "./style.css";
import Plot from "react-plotly.js";
import PlotJson from "../../scripts/plot.json";

const AveragePlot = () => {
  const calculateAverage = (array) => {
    var total = 0;
    var count = 0;

    array.forEach(function (item, index) {
      total += parseFloat(item);
      count++;
    });

    return total / count;
  };

  console.log(calculateAverage(PlotJson.o));

  return (
    <div className="avg-container">
      <Plot
        data={[
          {
            x: ["Voltage", "Current", "Power factor", "Power", "Energy"],
            y: [
              calculateAverage(PlotJson.V),
              calculateAverage(PlotJson.o),
              calculateAverage(PlotJson.l),
              calculateAverage(PlotJson.t),
              calculateAverage(PlotJson.a),
            ],
            type: "bar",
          },
        ]}
        layout={{
          width: 330,
          height: 240,
          title: "Avg value plot",
        }}
      />
    </div>
  );
};

export default AveragePlot;
