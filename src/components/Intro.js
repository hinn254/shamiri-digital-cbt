import React from "react";
import "./Intro.css";
import Button from "@material-ui/core/Button";

function Intro({ changeStep = (f) => f, logo }) {
  // const handleTimeChange = () => {
  //   console.log(`Executed handle time`);
  //   let timeValue = 0;
  //   setInterval((timeValue) => {
  //     console.log("Time taken");
  //     timeValue++;
  //   }, 1000);
  //   console.log(`The time value is ${timeValue}`);
  // };
  // handleTimeChange();

  return (
    <div className="introduction">
      <div className="introduction__image">
        <img src={logo} alt="shamiri logo" />
      </div>
      <div className="introduction__intro">
        <hr />

        <b> Welcome to Shamiri (Thrive!) Online.</b>
        <hr />
      </div>
      <div className="press">
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeStep()}
        >
          Press to start
        </Button>
        <hr />
      </div>
    </div>
  );
}

export default Intro;
