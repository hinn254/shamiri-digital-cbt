import React from "react";
import Typography from "@material-ui/core/Typography";
import brain from "../images/brain.jpg";
// import brainGrow from "../images/brain-grow.png";
import "./Growth.css";

function Growth({
  changeStep = (f) => f,
  // changeBack = (f) => f,
  growthScore,
  setGrowthScore = (f) => f,
}) {
  const handleChangeForward = () => {
    let newscore = growthScore;
    if (newscore >= 1) {
      changeStep();
    } else {
      setGrowthScore((newscore += 1));
      changeStep();
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  scrollTop();

  return (
    <div className="growth">
      <Typography component={"div"}>
        <h2 className="growth__header">
          <b>Flexible Thinking</b>
        </h2>
      </Typography>

      <div className="images">
        <img src={brain} alt="brain" />
      </div>
      <Typography component={"div"}>
        <p>
          Flexible thinking involves examining our beliefs from different
          perspectives. It can be helpful when:
        </p>
        <p>
          &#9; We have an unrealistic concern (by helping us challenge the
          concern).
        </p>
        <p>
          &#9; We have a realistic concern (by helping us gain insight about the
          concern and come up with ways we can handle it).
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>Flexible thinking can be especially helpful during the pandemic.</p>
      </Typography>
      <Typography component={"div"}>
        <p>
          When dealing with stressful situations, you might catch yourself
          jumping to conclusions, overgeneralizing, or engaging in other
          “thinking traps.”
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          Fortunately, researchers have developed the ABCD technique, which can
          help you practice flexible thinking.
        </p>
      </Typography>
      <div className="btn growth__intro">
        <div className="arrow-button">
          <button
            onClick={() => handleChangeForward()}
            className="arrow-right"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Growth;
