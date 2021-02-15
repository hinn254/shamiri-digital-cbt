import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import "./App.css";
import Intro from "./components/Intro";
import Participating from "./components/Participating";
import Instructions from "./components/Instructions";
import LessonPrompt from "./components/LessonPrompt";
import Growth from "./components/Growth";
import GrowthPartOne from "./components/GrowthPartOne";
import ABCDTechnique from "./components/ABCDTechnique";
import Simran from "./components/Simran";
import ActivatingEvent from "./components/ActivatingEvent";
// import GrowthStory from "./components/GrowthStory";
// import GrowthExercise from "./components/GrowthExercise";
// import GratitudeIntro from "./components/GratitudeIntro";
// import Gratitude from "./components/Gratitude";
// import ThreeGoodThings from "./components/ThreeGoodThings";
// import ThreeGoodThingsExercise from "./components/ThreeGoodThingsExercise";
// import VirtuesIntro from "./components/VirtuesIntro";
// import Virtues from "./components/Virtues";
// import VirtueExercise from "./components/VirtueExercise";
// import VirtueAffirm from "./components/VirtueAffirm";
// import Congrats from "./components/Congrats";
// import Feedback from "./components/Feedback";
// import FeedbackTwo from "./components/FeedbackTwo";
// import FeedbackThree from "./components/FeedbackThree";
// import Outro from "./components/Outro";
// import GrowthEmailOutro from "./components/GrowthEmailOutro";
// import GratitudeEmailOutro from "./components/GratitudeEmailOutro";
// import VirtueEmailOutro from "./components/VirtueEmailOutro";
// TODO: HANDLE IMAGES
// Images loading
import logo from "./images/shamiri-logo.png";
import cover from "./images/cover.png";
import ideas from "./images/ideas.jpeg";

function App() {
  const [steps, setSteps] = useState(0);
  const [challengeFaced, setChallengeFaced] = useState("");
  const [effortOvercome, setEffortOvercome] = useState("");
  const [improveFromChallenge, setImproveFromChallenge] = useState("");
  const [goodThingsOne, setGoodThingsOne] = useState("");
  const [goodThingsTwo, setGoodThingsTwo] = useState("");
  const [goodThingsThree, setGoodThingsThree] = useState("");
  const [myThoughtsOne, setMyThoughtsOne] = useState("");
  const [myThoughtsTwo, setMyThoughtsTwo] = useState("");
  const [myThoughtsThree, setMyThoughtsThree] = useState("");
  const [virtuesThatMatter, setVirtuesThatMatter] = useState([]);
  const [virtueChosen, setVirtueChosen] = useState("");
  const [whyVirtue, setWhyVirtue] = useState("");
  const [usedVirtue, setUsedVirtue] = useState("");
  const [feelUsingVirtue, setFeelUsingVirtue] = useState("");
  const [contUsingVirtue, setContUsingVirtue] = useState("");
  // state for checkboxes - trying to make it return a string with the values
  const [helpfulthingLearned, setHelpfulThingLearned] = useState([]);
  const [leastHelpfulthingLearned, setLeastHelpfulThingLearned] = useState([]);
  //  Email from different modules
  const [growthEmail, setGrowthEmail] = useState("");

  // feedback states
  const [lessonsFeedback, setLessonsFeedback] = useState("");
  const [growthLessonsFeedback, setGrowthLessonsFeedback] = useState("");
  const [gratitudeLessonsFeedback, setGratitudeLessonsFeedback] = useState("");
  const [virtuesLessonsFeedback, setVirtuesLessonsFeedback] = useState("");
  const [applyLessonsFeedback, setApplyLessonsFeedback] = useState("");
  const [opinionFeedback, setOpinionFeedback] = useState("");
  // feedbackthree
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  // ------------------------------------------------------------

  // SCORE TRACKING
  const [growthScore, setGrowthScore] = useState(0);
  const [gratitudeScore, setGratitudeScore] = useState(0);
  const [virtuesScore, setVirtuesScore] = useState(0);

  // -----------------------------------------------------------------------

  // TODO: ADD TIME CHECKING FUNCTIONALITY FOR INDIVIDUAL COMPONENTS
  // const [timeTaken, setTimeTaken] = useState(0);

  // handles movement to the next component.
  const handleChange = () => {
    let newStep = steps;
    setSteps((newStep += 1));
  };

  // handles random selection of whether growth/study section then update components effectively.
  // changed to only have growth,gratitude and virtues.
  const handleRandomSelection = () => {
    let randomSelector = [4];
    let selectedStudy =
      randomSelector[Math.floor(Math.random() * randomSelector.length)];
    setSteps(selectedStudy);
  };
  // handles movement to the previous component.
  const handleBackChange = () => {
    let newStep = steps;
    setSteps((newStep -= 1));
  };

  // GROWTH API -----------------------------------------------------------

  // handles growth - post call to api
  // TODO: ADDED EMAILS
  const handleGrowthApiCall = () => {
    const postGrowthData = async () => {
      try {
        const resp = await fetch("posts/", {
          method: "POST",
          // if the content type is application/json then u need to send a json object in the body
          body: JSON.stringify({
            challengeFaced,
            effortOvercome,
            improveFromChallenge,
            goodThingsOne,
            goodThingsTwo,
            goodThingsThree,
            myThoughtsOne,
            myThoughtsTwo,
            myThoughtsThree,
            virtuesThatMatter,
            virtueChosen,
            whyVirtue,
            usedVirtue,
            feelUsingVirtue,
            contUsingVirtue,
            helpfulthingLearned,
            leastHelpfulthingLearned,
            growthEmail,
            lessonsFeedback,
            growthLessonsFeedback,
            gratitudeLessonsFeedback,
            virtuesLessonsFeedback,
            applyLessonsFeedback,
            opinionFeedback,
            age,
            gender,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const data = await resp.json();
        if (data) {
          window.alert("Submitted successfully.");
        }
      } catch (error) {
        // TODO: TRY RECURSION
        console.log(error);
        window.alert(
          "Error submitting your responses. Please check your connection and Press OK for the browser to try again..."
        );
        handleGrowthApiCall();
      }

      //   localstorage
    };
    postGrowthData();
  };

  //---------------------------     END OF GROWTH API   --------------------------------

  if (steps === 0) {
    return (
      <div className="App">
        {/* intro component */}
        <Container maxWidth="lg">
          <Intro logo={logo} changeStep={handleChange} />
        </Container>
      </div>
    );
  } else if (steps === 1) {
    return (
      <div className="App">
        {/* Participation */}
        <Container maxWidth="lg">
          <Participating cover={cover} changeStep={handleChange} />
        </Container>
      </div>
    );
  } else if (steps === 2) {
    return (
      <div className="App">
        {/* Instructions component */}
        <Container maxWidth="lg">
          <Instructions ideas={ideas} changeStep={handleChange} />
        </Container>
      </div>
    );
  } else if (steps === 3) {
    return (
      <div className="App">
        {/* Lesson Prompt */}
        {/* USED TO PUT YOU IN STUDY SKILLS OR GROWTH */}
        {/* handleRandomSelection */}
        <Container maxWidth="lg">
          <LessonPrompt changeStep={handleRandomSelection} />
        </Container>
      </div>
    );
  } else if (steps === 4) {
    return (
      <div className="App">
        {/* Growth */}
        <Container maxWidth="lg">
          <Alert variant="filled" severity="success">
            Your Thrive! Points — {growthScore}
          </Alert>

          <Growth
            growthScore={growthScore}
            setGrowthScore={setGrowthScore}
            changeBack={handleBackChange}
            changeStep={handleChange}
          />
        </Container>
      </div>
    );
  } else if (steps === 5) {
    return (
      <div className="App">
        {/* Growth continuation part one */}
        <Container maxWidth="lg">
          <Alert variant="filled" severity="success">
            Your Thrive! Points — {growthScore}{" "}
          </Alert>
          <GrowthPartOne
            growthScore={growthScore}
            setGrowthScore={setGrowthScore}
            changeBack={handleBackChange}
            changeStep={handleChange}
          />
        </Container>
      </div>
    );
  } else if (steps === 6) {
    return (
      <div className="App">
        {/* Growth continuation part one */}
        <Container maxWidth="lg">
          <Alert variant="filled" severity="success">
            Your Thrive! Points — {growthScore}{" "}
          </Alert>
          <ABCDTechnique
            growthScore={growthScore}
            setGrowthScore={setGrowthScore}
            changeBack={handleBackChange}
            changeStep={handleChange}
          />
        </Container>
      </div>
    );
  } else if (steps === 7) {
    return (
      <div className="App">
        {/* Growth continuation part one */}
        <Container maxWidth="lg">
          <Alert variant="filled" severity="success">
            Your Thrive! Points — {growthScore}{" "}
          </Alert>
          <Simran
            growthScore={growthScore}
            setGrowthScore={setGrowthScore}
            challengeFaced={challengeFaced}
            effortOvercome={effortOvercome}
            improveFromChallenge={improveFromChallenge}
            setChallengeFaced={(value) => setChallengeFaced(value)}
            setImproveFromChallenge={(value) => setImproveFromChallenge(value)}
            setEffortOvercome={(value) => setEffortOvercome(value)}
            changeStep={handleChange}
          />
        </Container>
      </div>
    );
  } else if (steps === 8) {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <Alert variant="filled" severity="success">
            Your Thrive! Points — {growthScore}
          </Alert>
          {/* Growth continuation part one */}
          <ActivatingEvent
            growthEmail={growthEmail}
            setGrowthEmail={setGrowthEmail}
            changeStep={handleChange}
          />
        </Container>
      </div>
    );
  }
  // else if (steps === 9) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <GratitudeIntro changeStep={handleChange} />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 10) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {gratitudeScore}
  //           </Alert>
  //           <Gratitude
  //             gratitudeScore={gratitudeScore}
  //             setGratitudeScore={setGratitudeScore}
  //             changeBack={handleBackChange}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 11) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {gratitudeScore}
  //           </Alert>
  //           <ThreeGoodThings
  //             gratitudeScore={gratitudeScore}
  //             setGratitudeScore={setGratitudeScore}
  //             changeBack={handleBackChange}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 12) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {gratitudeScore}
  //           </Alert>
  //           <ThreeGoodThingsExercise
  //             gratitudeScore={gratitudeScore}
  //             setGratitudeScore={setGratitudeScore}
  //             goodThingsOne={goodThingsOne}
  //             goodThingsTwo={goodThingsTwo}
  //             goodThingsThree={goodThingsThree}
  //             myThoughtsOne={myThoughtsOne}
  //             myThoughtsTwo={myThoughtsTwo}
  //             myThoughtsThree={myThoughtsThree}
  //             setMyThoughtsOne={(val) => setMyThoughtsOne(val)}
  //             setMyThoughtsTwo={(val) => setMyThoughtsTwo(val)}
  //             setMyThoughtsThree={(val) => setMyThoughtsThree(val)}
  //             setGoodThingsOne={(value) => setGoodThingsOne(value)}
  //             setGoodThingsTwo={(val) => setGoodThingsTwo(val)}
  //             setGoodThingsThree={(val) => setGoodThingsThree(val)}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 13) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {gratitudeScore}
  //           </Alert>
  //           <GratitudeEmailOutro changeStep={handleChange} />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 14) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <VirtuesIntro changeStep={handleChange} />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 15) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {virtuesScore}
  //           </Alert>
  //           <Virtues
  //             virtuesScore={virtuesScore}
  //             setVirtuesScore={setVirtuesScore}
  //             changeBack={handleBackChange}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 16) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {virtuesScore}
  //           </Alert>
  //           <VirtueExercise
  //             virtuesScore={virtuesScore}
  //             setVirtuesScore={setVirtuesScore}
  //             virtuesThatMatter={virtuesThatMatter}
  //             setVirtuesThatMatter={setVirtuesThatMatter}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 17) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {virtuesScore}
  //           </Alert>
  //           <VirtueAffirm
  //             virtuesScore={virtuesScore}
  //             setVirtuesScore={setVirtuesScore}
  //             virtueChosen={virtueChosen}
  //             whyVirtue={whyVirtue}
  //             usedVirtue={usedVirtue}
  //             feelUsingVirtue={feelUsingVirtue}
  //             contUsingVirtue={contUsingVirtue}
  //             setVirtueChosen={setVirtueChosen}
  //             setWhyVirtue={setWhyVirtue}
  //             setUsedVirtue={setUsedVirtue}
  //             setFeelUsingVirtue={setFeelUsingVirtue}
  //             setContUsingVirtue={setContUsingVirtue}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 18) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Alert variant="filled" severity="success">
  //             Your Thrive! Points — {virtuesScore}
  //           </Alert>
  //           <VirtueEmailOutro changeStep={handleChange} />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 19) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Congrats changeBack={handleBackChange} changeStep={handleChange} />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 20) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <Feedback
  //             lessonsFeedback={lessonsFeedback}
  //             growthLessonsFeedback={growthLessonsFeedback}
  //             gratitudeLessonsFeedback={gratitudeLessonsFeedback}
  //             virtuesLessonsFeedback={virtuesLessonsFeedback}
  //             applyLessonsFeedback={applyLessonsFeedback}
  //             opinionFeedback={opinionFeedback}
  //             setLessonsFeedback={setLessonsFeedback}
  //             setGrowthLessonsFeedback={setGrowthLessonsFeedback}
  //             setGratitudeLessonsFeedback={setGratitudeLessonsFeedback}
  //             setVirtuesLessonsFeedback={setVirtuesLessonsFeedback}
  //             setApplyLessonsFeedback={setApplyLessonsFeedback}
  //             setOpinionFeedback={setOpinionFeedback}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 21) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <FeedbackTwo
  //             leastHelpfulthingLearned={leastHelpfulthingLearned}
  //             setLeastHelpfulThingLearned={setLeastHelpfulThingLearned}
  //             helpfulthingLearned={helpfulthingLearned}
  //             setHelpfulThingLearned={setHelpfulThingLearned}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 22) {
  //     return (
  //       <div className="App">
  //         {/* Growth continuation part one */}
  //         <Container maxWidth="lg">
  //           <FeedbackThree
  //             handleApiCall={handleGrowthApiCall}
  //             age={age}
  //             gender={gender}
  //             setAge={setAge}
  //             setGender={setGender}
  //             changeStep={handleChange}
  //           />
  //         </Container>
  //       </div>
  //     );
  //   } else if (steps === 23) {
  //     return (
  //       <div className="App">
  //         {/* Outro */}
  //         <Container maxWidth="lg">
  //           <Outro />
  //         </Container>
  //       </div>
  //     );
  //   }
}
export default App;
