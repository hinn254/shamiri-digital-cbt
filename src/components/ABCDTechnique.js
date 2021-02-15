import React from "react";
import Typography from "@material-ui/core/Typography";
import "./ABCD.css";

function GrowthPartOne({
  changeStep = (f) => f,
  changeBack = (f) => f,
  growthScore,
  setGrowthScore = (f) => f,
}) {
  const handleChangeForward = () => {
    let newscore = growthScore;
    if (newscore >= 2) {
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
    <div className="growthpartone">
      <Typography component={"div"}>
        <p>
          Now, you will see an example of how the ABCD technique can be applied.
          You will read about how Simran (name changed for confidentiality) used
          the technique to help her practice flexible thinking during the
          pandemic.
        </p>
      </Typography>

      <Typography component={"div"}>
        <p>
          Afterward, you will apply the ABCD technique to a situation in your
          own life.
        </p>
      </Typography>

      <div className="btn">
        <div className="arrow-button">
          <button onClick={() => changeBack()} className="arrow-left"></button>
        </div>
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

export default GrowthPartOne;
