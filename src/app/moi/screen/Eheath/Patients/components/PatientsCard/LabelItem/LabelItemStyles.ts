import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    labelContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "4px",
    },
    labelItem: {
      borderRadius: "20px",
      padding: "9px 10px",
    },
    labelText: {
      color: "black",
      fontFamily: "GraphikLCG",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: 1,
      letterSpacing: "-0.03em",
    },
  })
);
