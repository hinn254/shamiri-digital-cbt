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
        <p>Simran's Story</p>
      </Typography>
      [insert picture]
      <Typography component={"div"}>
        <p>Due to the pandemic, Simran’s life has changed:</p>
        <p>
          She is disappointed with herself for being less productive with her
          coursework. She’s finding it hard to motivate herself without
          face-to-face interactions while working at home.
        </p>
        <p>
          She is finding it overwhelming to study while also assisting her
          parents with household chores.
        </p>
        <p>
          She feels guilty for not finding enough time to reach out to family
          and friends.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          She worries that she will feel stuck like this until the crisis is
          over, which could take a long time.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>Here’s how Simran rated how she was feeling:</p>
      </Typography>
      Picture
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
