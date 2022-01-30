import React from "react";
import "./style.css";
import Plot from 'react-plotly.js';
import PlotJson from '../../scripts/plot.json';
const BoxPlot = () => {
  return (
  <div className="plot-container">
    <Plot
        data={[
          {
            y: PlotJson.t,
            type: 'box',
          },
          {
            y: PlotJson.a,
            type: 'box',
          }
        ]}
        layout={ {width: 320, height: 240, title: 'Box Plot'} }
      />
  </div>
  );
};

export default BoxPlot;
