import React from "react";
import UploadFile from "../../components/UploadFile";
import "./style.css";

const index = (props) => {
  return (
    <div className="upload-container">
      <UploadFile nextStep={props.nextStep} />
    </div>
  );
};

export default index;
