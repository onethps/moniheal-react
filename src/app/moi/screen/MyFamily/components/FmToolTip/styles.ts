import { Theme, } from "@mui/material";
import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme:Theme) => {
    const color = theme.palette.background.paper;
    return {
      popoverRoot: {
        backgroundColor: color,
        boxShadow: " 0px 10px 40px 0px rgba(23, 50, 54, 0.15)",
        borderRadius: 20,
        maxWidth: 1000,
        marginTop: 10,
      },
      content: {
        padding: theme.spacing(2),
      },
      popper: {
        zIndex: 2000,
        '&[x-placement*="bottom"] $arrow': {
          top: 10,
          left: 0,
          marginTop: "-0.71em",
          marginLeft: 4,
          marginRight: 4,
          "&::before": {
            transformOrigin: "0 100%",
          },
        },
        '&[x-placement*="top"] $arrow': {
          bottom: 0,
          left: 0,
          marginBottom: "-0.71em",
          marginLeft: 4,
          marginRight: 4,
          "&::before": {
            transformOrigin: "100% 0",
          },
        },
        '&[x-placement*="right"] $arrow': {
          left: 0,
          marginLeft: "-0.71em",
          height: "1em",
          width: "0.71em",
          marginTop: 4,
          marginBottom: 4,
          "&::before": {
            transformOrigin: "100% 100%",
          },
        },
        '&[x-placement*="left"] $arrow': {
          right: 0,
          marginRight: "-0.71em",
          height: "1em",
          width: "0.71em",
          marginTop: 4,
          marginBottom: 4,
          "&::before": {
            transformOrigin: "0 0",
          },
        },
      },
      // Stolen from https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Tooltip/Tooltip.js
      arrow: {
        overflow: "hidden",
        position: "absolute",
        width: "1em",
        height: "0.71em" /* = width / sqrt(2) = (length of the hypotenuse) */,
        boxSizing: "border-box",
        color,
        "&::before": {
          content: '""',
          margin: "auto",
          display: "block",
          width: "100%",
          height: "100%",
          boxShadow: theme.shadows[1],
          backgroundColor: "currentColor",
          transform: "rotate(45deg)",
        },
      },
    };
  });