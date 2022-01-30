import React from "react";
import AveragePlot from "../../components/Statistical/AveragePlot";
import StndDeviation from "../../components/Statistical/StndDeviation";
import VariancePlot from "../../components/Statistical/VariancePlot";
import "./style.css";
const index = () => {
  return (
  <div className="statplot-cards">
    <AveragePlot />
    <VariancePlot />
    <StndDeviation />
  </div>
  );
};

export default index;
