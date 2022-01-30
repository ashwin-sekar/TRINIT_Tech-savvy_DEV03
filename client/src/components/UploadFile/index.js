import React from "react";
import { message, Button } from "antd";
import "./style.css";

const UploadFile = (props) => {
  const next = () => {
    props.nextStep();
    message.success("file uploaded successfully.");
  };
  return (
    <div className="upload-card">
      <div className="heading">
        <h1>Upload CSV files here</h1>
      </div>
      <div className="heading">
        <input className="upload" type="file"></input>
      </div>
      <div className="upload-btn">
        <Button type="primary" onClick={next}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default UploadFile;
