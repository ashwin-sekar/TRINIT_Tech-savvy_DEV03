import React from "react";
import "./style.css";
import Plot from 'react-plotly.js';
import PlotJson from '../../scripts/plot.json';
const LinePlot = () => {
  return (
  <div className="plot-container">
    <Plot
        data={[
          {
            x: PlotJson.V,
            y: PlotJson.o,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 330, height: 240, title: 'Line plot'} }
      />
  </div>
  );
};

export default LinePlot;
