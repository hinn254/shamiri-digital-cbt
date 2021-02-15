import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./LessonPrompt.css";

function LessonPrompt({ changeStep = (f) => f }) {
  return (
    <div className="lesson__promt">
      <Typography component={"div"}>
        <p>
          Thank you for answering those questions. Now, we are going to show you
          a lesson that can help students like <br /> you. Today's lesson is
          about <b>three skills that can help you thrive in high school.</b>
        </p>
      </Typography>
      <Typography component={"div"}>
        <p>
          When you are ready, press <b>continue</b> to start lesson.
        </p>
      </Typography>

      <Button onClick={() => changeStep()} variant="contained" color="primary">
        Continue
      </Button>
    </div>
  );
}

export default LessonPrompt;
