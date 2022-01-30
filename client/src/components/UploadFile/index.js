import React from "react";
import { Upload, message, Button } from "antd";
import "./style.css";

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

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
    // <Dragger {...props}>
    //   <p className="ant-upload-drag-icon">
    //     <InboxOutlined />
    //   </p>
    //   <p className="ant-upload-text">
    //     Click or drag file to this area to upload
    //   </p>
    //   <p className="ant-upload-hint">
    //     Support for a single or bulk upload. Strictly prohibit from uploading
    //     company data or other band files
    //   </p>
    // </Dragger>
  );
};

export default UploadFile;
