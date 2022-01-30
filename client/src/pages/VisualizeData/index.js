import React from "react";
import LinePlot from "../../components/VisualPlots/LinePlot";
import "./style.css";
import BoxPlot from "../../components/VisualPlots/BoxPlot";
import HeatPlot from "../../components/VisualPlots/HeatPlot";
import HistogramPlot from "../../components/VisualPlots/Histogram";
const index = () => {
  return (
    <div className="plot-cards">
      <LinePlot />
      <BoxPlot />
      <HistogramPlot />
      <HeatPlot />
    </div>
  );
};

export default index;
