import React, { useState } from "react";
import "./style.css";
import Plot from "react-plotly.js";
import { Radio, Space } from "antd";
import PlotJson from "../../scripts/plot.json";
import { columnKeytoCoulmn } from "../../constants/constants";
const HistogramPlot = () => {
  const [xValue, setxValue] = useState("o");
  const onChange = (e) => {
    setxValue(e.target.value);
  };
  return (
    <div className="plots-container">
      <Plot
        data={[
          {
            x: PlotJson[xValue],
            type: "histogram",
            histnorm: "probability",
            marker: {
              color: "rgb(255,255,100)",
            },
          },
        ]}
        layout={{
          width: 330,
          height: 240,
          xaxis: { title: { text: columnKeytoCoulmn[xValue] } },
          title: "Histogram plot",
        }}
      />
      <Radio.Group onChange={onChange} value={xValue}>
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

export default HistogramPlot;
