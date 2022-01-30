import React from "react";
import "./style.css";
import Plot from "react-plotly.js";
import PlotJson from "../../scripts/plot.json";

const VariancePlot = () => {
  const calculateVariance = (arr) => {
    if (!arr.length) {
      return 0;
    }
    const sum = arr.reduce((acc, val) => parseFloat(acc) + parseFloat(val));
    const { length: num } = arr;
    const median = sum / num;
    let variance = 0;
    arr.forEach((num) => {
      variance += (num - median) * (num - median);
    });
    variance /= num;
    return variance;
  };

  console.log(calculateVariance(PlotJson.o));

  return (
    <div className="avg-container">
      {
        <Plot
          data={[
            {
              x: ["Voltage", "Current", "Power factor", "Power", "Energy"],
              y: [
                calculateVariance(PlotJson.V),
                calculateVariance(PlotJson.o),
                calculateVariance(PlotJson.l),
                calculateVariance(PlotJson.t),
                calculateVariance(PlotJson.a),
              ],
              type: "bar",
            },
          ]}
          layout={{
            width: 700,
            height: 600,
            title: "Variance plot",
          }}
        />
      }
    </div>
  );
};

export default VariancePlot;
