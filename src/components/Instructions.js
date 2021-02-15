import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Instructions.css";

function Instructions({ changeStep = (f) => f, ideas }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  scrollTop();
  return (
    <div className="instructions">
      <Typography component={"div"}>
        <p>
          You are now <b>ready to begin</b> this program. The program is made up
          of three parts. Please read them carefully:
        </p>
      </Typography>

      <div className="image-container">
        <img src={ideas} alt="ideas" />
      </div>
      <Typography component={"div"}>
        <ol className="instructions__lists">
          <li>
            In part one, we will <strong>ask you questions.</strong> Your
            answers will <b>help us understand things</b> that students like you
            go through. Your answers are a <u>secret </u> . We will{" "}
            <u>not share </u>
            them with anyone including your teachers or the school
            administration.
          </li>
          <li>
            In part two, we will show you materials{" "}
            <b>that can help students </b> like you in Kenya. You will do some{" "}
            <u>short and fun activities</u> that will{" "}
            <strong>help you understand</strong> these materials.
          </li>
          <li>
            In part three, we will <b> ask for your advice and suggestions </b>
            so that we can be able to <u>improve this program </u> for other
            students in the future.
          </li>
        </ol>
      </Typography>

      <div className="button-container">
        <button className="previous" disabled>
          &#8592;PREVIOUS
        </button>
        <button onClick={() => changeStep()} className="next">
          NEXT &#8594;
        </button>
      </div>
    </div>
  );
}

export default Instructions;
