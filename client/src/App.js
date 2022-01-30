import React, { useState } from "react";
import UploadCSV from "./pages/UploadCSV";
import UploadToDatabase from "./pages/FileUpload";
import StepBar from "./components/StepBar";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Upload csv file",
      content: <UploadCSV nextStep={next} />,
    },
    {
      title: "Upload to Database",
      content: <UploadToDatabase nextStep={next} />,
    },
    {
      title: "Visualize Data",
      content: "<VisualizeData />",
    },
    {
      title: "Statistical/Analytical Methods",
      content: "<StatisticalAnalyticalMethods />",
    },
  ];

  return (
    <div className="">
      <StepBar steps={steps} current={current} />
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
}

export default App;
