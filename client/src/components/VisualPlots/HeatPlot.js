import React from "react";
import "./style.css";
import Plot from 'react-plotly.js';
import PlotJson from '../../scripts/plot.json';
const HistogramPlot = () => {
  return (
  <div className="plot-container">
    <Plot
        data={[
          {
            z: [PlotJson.V, PlotJson.o, PlotJson.t],
            
            type: 'heatmap'
          }
        ]}
        layout={ {width: 330, height: 240, title: 'Heat plot'} }
      />
  </div>
  );
};

export default HistogramPlot;
