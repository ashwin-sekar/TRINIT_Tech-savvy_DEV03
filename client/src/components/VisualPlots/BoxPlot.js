import React, { useState } from "react";
import { Radio, Space } from "antd";
import "./style.css";
import Plot from "react-plotly.js";
import PlotJson from "../../scripts/plot.json";
import { columnKeytoCoulmn } from "../../constants/constants";
const BoxPlot = () => {
  const [yValue, setyValue] = useState("o");
  const onChange = (e) => {
    setyValue(e.target.value);
  };
  return (
    <div className="plots-container">
      <Plot
        data={[
          {
            y: PlotJson[yValue],
            type: "box",
            name: columnKeytoCoulmn[yValue],
          },
        ]}
        layout={{ width: 320, height: 240, title: "Box Plot" }}
      />
      <Radio.Group onChange={onChange} value={yValue}>
        <Space direction="vertical">
          <Radio value={"o"}>Current</Radio>
          <Radio value={"a"}>Energy</Radio>
          <Radio value={"V"}>Voltage</Radio>
          <Radio value={"t"}>Power</Radio>
          <Radio calue={"l"}>Power Factor</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default BoxPlot;
