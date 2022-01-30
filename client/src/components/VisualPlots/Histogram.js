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
            x: PlotJson.l,
            type: 'histogram',
	        histnorm: 'probability',
	        marker: {
            color: 'rgb(255,255,100)',
          }
        }
        ]}
        layout={ {width: 330, height: 240, title: 'Histogram plot'} }
      />
  </div>
  );
};

export default HistogramPlot;
