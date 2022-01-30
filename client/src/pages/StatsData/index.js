import React, { useState } from "react";
import { Radio, Space } from "antd";
import AveragePlot from "../../components/Statistical/AveragePlot";
import StndDeviation from "../../components/Statistical/StndDeviation";
import VariancePlot from "../../components/Statistical/VariancePlot";
import "./style.css";

const StatData = () => {
  const [plot, setPlot] = useState(0);
  const onChange = (e) => {
    setPlot(e.target.value);
  };
  return (
    <div className="stat-cards">
      {plot === 0 && <AveragePlot />}
      {plot === 1 && <VariancePlot />}
      {plot === 2 && <StndDeviation />}
      <Radio.Group onChange={onChange} value={plot}>
        <Space direction="vertical">
          <Radio value={0}>Average</Radio>
          <Radio value={1}>Variance</Radio>
          <Radio value={2}>Standard Deviation</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default StatData;
