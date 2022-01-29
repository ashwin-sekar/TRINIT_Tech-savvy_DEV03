import React, { useState } from "react";
import UploadFile from "./components/UploadFile";
import UploadCSV from "./pages/UploadCSV";
import StepBar from "./components/StepBar";
import "./App.css";
import "antd/dist/antd.css";

const steps = [
  {
    title: "Upload csv file",
    content: <UploadCSV />,
  },
  {
    title: "Upload to Database",
    content: <UploadToDatabase />,
  },
  {
    title: "Visualize Data",
    content: <VisualizeData />,
  },
  {
    title: "Statistical/Analytical Methods",
    content: <StatisticalAnalyticalMethods />,
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="">
      <StepBar steps={steps} />
      <div className="steps-content">{steps[current].content}</div>
      {/* <UploadFile /> */}
    </div>
  );
}

export default App;
