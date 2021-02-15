import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Survey from "./Survey";
// import SignIn from "./admin/SignIn";
// import SignUp from "./admin/SignUp";
// import Admin from "./admin/Admin";
// import Error from "./Error";
// import { AuthProvider } from "./context/AuthContext";
// import PrivateRoute from "./admin/PrivateRoute";
// import ForgotPassword from "./admin/ForgotPassword";
// Theme - dark theme
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// switch
import Brightness7Icon from "@material-ui/icons/Brightness7";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness3Icon from "@material-ui/icons/Brightness3";
//colors
import { blue } from "@material-ui/core/colors";

import Paper from "@material-ui/core/Paper";
//
import "./App.css";
// import Header from "./Header";

// TODO: CSV DOWNLOAD, TIME CHECKING, SESSIONSTORAGE, LOCALSESSION, ERROR - WHEN FORM SUBMISSION N0T SUCCESSFUL,HANDLE HOW TO VALUES IN RADIO BUTTONS OR INPUTS

const App = () => {
  // =---------------------=
  const [theme, setTheme] = useState(true);
  const [headerTheme, setHeaderTheme] = useState(true);

  // resetingSteps
  const [fontValue, setFontValue] = useState(16);

  const light = {
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blue[500],
      },
    },

    typography: {
      fontSize: fontValue,
      // fontSize: 16,

      fontFamily: '"Open Sans", sans-serif;',
    },
  };

  const dark = {
    palette: {
      type: "dark",
      primary: {
        // Purple and green play nicely together.
        main: blue[500],
      },
    },
    typography: {
      fontSize: fontValue,
      fontFamily: '"Open Sans", sans-serif;',
    },
  };

  // ----------------------- header theme
  const headerlight = {
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blue[500],
      },
    },

    typography: {
      fontSize: fontValue,
      // fontSize: 16,

      fontFamily: '"Open Sans", sans-serif;',
    },
  };

  const headerdark = {
    palette: {
      type: "dark",
      primary: {
        // Purple and green play nicely together.
        main: blue[500],
      },
    },
    typography: {
      fontSize: fontValue,
      fontFamily: '"Open Sans", sans-serif;',
    },
  };
  const icon = !headerTheme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);
  const appliedHeaderTheme = createMuiTheme(
    headerTheme ? headerlight : headerdark
  );

  // ---------------------------------------------------------------------------

  const addIt = (fontValue) => {
    let newFont = fontValue;
    if (newFont >= 26) {
      return;
    }
    setFontValue((newFont += 0.5));
  };
  const reduceIt = (fontValue) => {
    let newFont = fontValue;
    if (newFont <= 12) {
      return;
    }
    setFontValue((newFont -= 0.5));
  };

  const setAllTheme = () => {
    setHeaderTheme(!headerTheme);
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <Paper>
        <div className="App">
          {/* <Header
            reset={() => window.location.reload(false)}
            addFontSize={() => addIt(fontValue)}
            reduceFontSize={() => reduceIt(fontValue)}
            icon={icon}
            userTheme={() => setAllTheme()}
            mainTheme={appliedHeaderTheme}
          /> */}
        </div>
        {/* <AuthProvider> */}
        <Router>
          <Switch>
            <Route path="/" component={Survey} exact />

            {/* <PrivateRoute path="/admin" component={Admin} /> */}
            {/* <Route path="/signup" component={SignUp} /> */}
            {/* <Route path="/signin" component={SignIn} /> */}
            {/* <Route path="/forgot-password" component={ForgotPassword} /> */}

            <Route component={Error} />
          </Switch>
        </Router>
        {/* </AuthProvider> */}
      </Paper>
    </ThemeProvider>
  );
};

export default App;
