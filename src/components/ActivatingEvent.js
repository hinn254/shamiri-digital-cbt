import React from "react";
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
import "./ActivatingEvent.css";

// use existing repo
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
          <b>A: sadsdsa Event</b>
        </p>
      </Typography>

      <Typography component={"div"}>
        <p>
          The first step of the <b> ABCD technique </b> involves identifying the
          objective facts and events about a situation.
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          Which of the following would Simran list as an objective fact (not her
          feelings) about her current situation?
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          Which of the following would Simran list as an objective fact (not her
          feelings) about her current situation?
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          Which of the following would Simran list as an objective fact (not her
          feelings) about her current situation?
        </p>
      </Typography>
      <form
      //    onSubmit={handleSubmit}
      >
        <FormControl
          component="fieldset"
          //   error={error}
          //   className={classes.formControl}
        >
          <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            //  value={value}
            //  onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              //   control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              //    control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>Shamiri</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            // className={classes.button}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>

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
