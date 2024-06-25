import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    patientDetailsItemWrapper: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #d2e1f5",
      padding: "12px 15px",
      gap: "4px",
      borderRadius: 40,
    },
    patientDetailsItemLabel: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03px",
      fontSize: 10,
      color: "#90a4be",
      fontWeight: 500,
      lineHeight: "10px",
    },
    patientDetailsItemText: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.36px",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "12px",
    },
  })
);
