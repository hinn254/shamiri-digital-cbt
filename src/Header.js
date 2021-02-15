import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// added
import Switch from "@material-ui/core/Switch";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Reset button
//
import Button from "@material-ui/core/Button";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// ---------------------------------------

const Header = ({
  mainTheme,
  userTheme,
  icon,
  reset = (f) => f,
  addFontSize = (f) => f,
  reduceFontSize = (f) => f,
}) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Paper>
        <ElevationScroll>
          <AppBar color="inherit">
            <Toolbar>
              <div className="header-wrap">
                <div className="restart">
                  <Button
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={() => reset()}
                  >
                    Restart Survey
                  </Button>
                </div>

                <div className="main_header">
                  <Typography align="left" variant="body1">
                    Change Font Size
                  </Typography>
                  <div className="btn-plus">
                    <Button
                      color="default"
                      variant="contained"
                      onClick={() => addFontSize()}
                      size="small"
                    >
                      +
                    </Button>
                  </div>

                  <div className="btn-minus">
                    <Button
                      color="default"
                      size="small"
                      variant="contained"
                      onClick={() => reduceFontSize()}
                    >
                      -
                    </Button>
                  </div>

                  <Typography align="right" variant="body1">
                    Change Theme
                  </Typography>
                  <div className="switch">
                    <Switch onChange={userTheme} />
                    {icon}
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
