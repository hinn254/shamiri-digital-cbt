import React from "react";
import Typography from "@material-ui/core/Typography";
import "./GrowthPartOne.css";

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
          Now, you will learn about the <b> ABCD technique </b>, which promotes
          flexible thinking.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          {" "}
          <b>A: Activating Event</b>
        </p>
        <p>
          The first step of the ABCD technique involves{" "}
          <strong>identifying the objective facts and events</strong> about a
          situation.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          {" "}
          <b>B: Beliefs</b>
        </p>
        <p>
          The second step involves{" "}
          <strong> identifying the thoughts and beliefs </strong>that are going
          through our heads, such as judgments, predictions, reactions, and
          explanations. For example, we might notice judgments, predictions,
          reactions, and explanations. They can happen automatically and be hard
          to notice, but these thoughts still affect us.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          {" "}
          <b>C: Challenge</b>
        </p>
        <p>
          The third step involves{" "}
          <strong> challenging our initial beliefs </strong> and thinking about
          alternative explanations.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          {" "}
          <b>D: Debrief</b>
        </p>
        <p>
          The fourth step involves <strong> reflecting </strong> on how the new
          explanations affect our <strong> mood and feelings. </strong>
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
