import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    modalTitle: {
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    descriptionWrapper: {
      backgroundColor: "#f1f6fa",
      padding: "10px 14px",
      borderRadius: "10px",
    },
    descText: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.17,
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    button: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
  })
);
