import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    inputLabel: {
      fontWeight: 500,
      fontSize: 14, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
    inputLabelStat: {
      fontWeight: 500,
      fontSize: 12, // Converted from "font-size: 12px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      textAlign: "right", // Converted from "text-align: right"
      color: "#777e90",
    },
    input: {
      fontWeight: 500,
      fontFamily: "GraphikLCG",
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#90a4be",
      "&::placeholder": {
        opacity: 1,
      },
    },
  })
);
