import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Participating.css";

function Participating({ changeStep = (f) => f, cover }) {
  // useEffect(() => {
  //   window.addEventListener("keypress", () => changeStep());
  //   // cleanup
  //   return () => {
  //     window.removeEventListener("keypress", () => changeStep());
  //   };
  // }, [changeStep]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  scrollTop();
  return (
    <div className="participating">
      <div className="participating__intro">
        <Typography>
          Thank you for participating in this program! The goal of this program
          is to help students like you <b>achieve your goals</b>,{" "}
          <b> do better in school</b>, and
          <b> feel happier</b>. We hope these activities will help you learn to
          deal with challenges and improve your wellbeing.
        </Typography>
        <hr />
      </div>

      <div className="participating__image">
        <img src={cover} alt="Shamiri thrive" />
      </div>
      <div className="participating__outro">
        <hr />

        <Typography>
          This program was developed by a team of scientists from{" "}
          <b>
            the Shamiri Institute, Harvard University, and University of
            Pennsylvania.
          </b>{" "}
          This program uses ideas from schools like
          <b> Harvard University, Stanford University </b> and others that have
          been shown to be <b> helpful</b> for students in America and Europe.
          This is the second time that this program is being used in Kenya. Last
          year, Kenyan students told us that this program helped them{" "}
          <b>
            build better relationships, do better in school, feel happier, and
            handle challenges.{" "}
          </b>
          We hope you will find the program helpful too!
        </Typography>
      </div>

      <div className="press">
        <hr />
        <Button onClick={() => changeStep()} variant="outlined" color="primary">
          continue
        </Button>
        <hr />
      </div>
    </div>
  );
}

export default Participating;
