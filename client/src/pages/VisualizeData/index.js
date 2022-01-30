import React from "react";
import LinePlot from "../../components/VisualPlots/LinePlot";
import "./style.css";
import BoxPlot from "../../components/VisualPlots/BoxPlot";
import Line2Plot from "../../components/VisualPlots/Line2Plot";
import HistogramPlot from "../../components/VisualPlots/Histogram";
const index = () => {
  return (
    <div className="plot-cards">
      <LinePlot />
      <BoxPlot />
      <HistogramPlot />
      <Line2Plot />
    </div>
  );
};

export default index;
