import React from "react";
import "./style.css";
import Plot from "react-plotly.js";
import PlotJson from "../../scripts/plot.json";

const StndDeviation = () => {
  function deviation(arr) {
    let mean =
      arr.reduce((acc, curr) => {
        return parseFloat(acc) + parseFloat(curr);
      }, 0) / arr.length;
    arr = arr.map((k) => {
      return (k - mean) ** 2;
    });
    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    return Math.sqrt(sum / arr.length);
  }

  console.log(deviation(PlotJson.o));

  return (
    <div className="avg-container">
      {
        <Plot
          data={[
            {
              x: ["Voltage", "Current", "Power factor", "Power", "Energy"],
              y: [
                deviation(PlotJson.V),
                deviation(PlotJson.o),
                deviation(PlotJson.l),
                deviation(PlotJson.t),
                deviation(PlotJson.a),
              ],
              type: "bar",
            },
          ]}
          layout={{
            width: 700,
            height: 600,
            title: "Standard Deviation plot",
          }}
        />
      }
    </div>
  );
};

export default StndDeviation;
