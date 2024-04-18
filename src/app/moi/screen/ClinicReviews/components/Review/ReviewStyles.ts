import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "20px",
      paddingRight: "10px",
      border: "1px solid #D2E1F5",
      borderRadius: "20px",
    },

    headerDate: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#a5bddb",
    },

    labelText: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    mainText: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    descText: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.29,
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    iconButton: {
      width: 40,
      height: 40,
      borderRadius: "30px",
      border: "1px solid #e5eeff",
    },
  })
);
