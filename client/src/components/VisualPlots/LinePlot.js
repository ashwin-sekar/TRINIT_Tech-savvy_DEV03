import React, { useState } from "react";
import "./style.css";
import Plot from "react-plotly.js";
import { Radio, Space } from "antd";
import PlotJson from "../../scripts/plot.json";
import { columnKeytoCoulmn } from "../../constants/constants";
const LinePlot = () => {
  const [xValue, setxValue] = useState("o");
  const [yValue, setyValue] = useState("o");
  const onChangeXValue = (e) => {
    setxValue(e.target.value);
  };
  const onChangeYValue = (e) => {
    setyValue(e.target.value);
  };
  return (
    <div className="plots-container">
      <Plot
        data={[
          {
            x: PlotJson[xValue],
            y: PlotJson[yValue],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{
          width: 330,
          height: 240,
          xaxis: { title: { text: columnKeytoCoulmn[xValue] } },
          yaxis: { title: { text: columnKeytoCoulmn[yValue] } },
          title: `${columnKeytoCoulmn[xValue]} vs ${columnKeytoCoulmn[yValue]}`,
        }}
      />
      <Radio.Group onChange={onChangeXValue} value={xValue}>
        X Value
        <Space direction="vertical">
          <Radio value={"o"}>Current</Radio>
          <Radio value={"a"}>Energy</Radio>
          <Radio value={"V"}>Voltage</Radio>
          <Radio value={"t"}>Power</Radio>
          <Radio calue={"l"}>Power Factor</Radio>
        </Space>
      </Radio.Group>
      <Radio.Group onChange={onChangeYValue} value={yValue}>
        Y Value
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

export default LinePlot;
