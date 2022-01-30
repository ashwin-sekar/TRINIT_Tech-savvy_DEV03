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
            x: PlotJson.t,
            y: PlotJson.V,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'pink'},
          }
        ]}
        layout={ {width: 330, height: 240, xaxis: { title:{text:'Power'}},yaxis: { title:{text:'Voltage'}},title: 'Power vs Voltage plot'} }
      />
  </div>
  );
};

export default HistogramPlot;
