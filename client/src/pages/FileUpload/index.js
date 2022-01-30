import React from "react";
import axios from "axios";
import Uploaded from "../../components/Uploaded";
import reqData from "../../scripts/plot.json";
import { Button, message } from "antd";
import "./style.css";

const index = (props) => {
  const next = async () => {
    let data = await axios.post("/mongodb", reqData).then((data) => data);
    if (data) {
      props.nextStep();
      message.success("Uploaded to db");
      return;
    }
    message.error("Failed to upload");
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
