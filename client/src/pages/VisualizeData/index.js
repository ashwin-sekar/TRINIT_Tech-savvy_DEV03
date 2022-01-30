import React from "react";
import LinePlot from "../../components/VisualPlots/LinePlot";
import "./style.css";

const index = () => {
  return (
    <div className="plot-cards">
      <LinePlot />
      <LinePlot />
      <LinePlot />
      <LinePlot />
    </div>
  );
};

export default index;
