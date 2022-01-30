import React from "react";
import LinePlot from "../../components/VisualPlots/LinePlot";
import "./style.css";
import BoxPlot from "../../components/VisualPlots/BoxPlot";
import Line2Plot from "../../components/VisualPlots/Line2Plot";
import HistogramPlot from "../../components/VisualPlots/Histogram";
import { Button } from "antd";
const index = (props) => {
  const next = () => {
    props.nextStep();
  };
  return (
    <div className="plot-cards">
      <LinePlot />
      <BoxPlot />
      <HistogramPlot />
      {/* <Line2Plot /> */}
      <Button type="primary" onClick={next}>
        Statistical Analysis
      </Button>
    </div>
  );
};

export default index;
