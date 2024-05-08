import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardTitle: {
      fontWeight: 500,
      fontSize: 20, // Converted from "font-size: 12px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      textAlign: "right", // Converted from "text-align: right"
      color: "#000",
    },
    list: {
      marginTop: "25px",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "14px",
    },
    headerIconFilterWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      border: "1px solid #D2E1F5",
      borderRadius: "50%",
    },
    avatar: {
      borderRadius: "50%",
      width: "40px",
      height: "40px",
    },
  })
);
