import React from "react";
import Uploaded from "../../components/Uploaded";
import { Button, message } from "antd";
import "./style.css";

const index = (props) => {
  const next = () => {
    props.nextStep();
    message.success("Uploaded to db");
  };
  return (
    <div className="upload-container">
      <Uploaded />
      <Button className="db-btn" type="primary" onClick={next}>
        Add to MongoDB Database
      </Button>
    </div>
  );
};

export default index;
