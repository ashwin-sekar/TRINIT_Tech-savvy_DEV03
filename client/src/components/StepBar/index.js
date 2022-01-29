import React, { useState } from "react";
import { Steps, Divider } from "antd";
import "./style.css";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const StepBar = (props) => {
  return (
    <div className="step-container">
      <Steps progressDot current={props.current}>
        {props.steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {/* <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </div>
  );
};

export default StepBar;
