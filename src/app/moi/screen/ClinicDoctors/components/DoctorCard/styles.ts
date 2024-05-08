import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      border: "solid 1px",
      width: "100%",
      maxWidth: "356px",
      height: "100%",
      borderColor: fade("#D2E3F8", 0.5),
      flexGrow: 1,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: "50px",
    },
    badgeContainer: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      backgroundColor: "#E5EEFF",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    cardWrapper: {
      position: "relative",
      padding: "20px 10px",
      minWidth: "100%",
    },

    badgeMainText: {
      fontSize: "16px",
      fontWeight: 600,
      userSelect: "none",
      lineHeight: 1,
    },
    badgeStarIcon: {
      width: 10,
      height: 10,
    },
    badgeLabelWrapper: {
      position: "absolute",
      bottom: -5,
      right: -5,
      width: 30,
      height: 22,
      borderRadius: "50%",
      backgroundColor: "#E5EEFF",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    badgeLabelText: {
      fontSize: 10,
      userSelect: "none",
    },
    circleButtonWrapper: {
      width: "50px",
      height: "50px",
      border: "1px solid #D2E1F5",
      borderRadius: "50px",
      minWidth: "40px",
    },
    circleFillButtonWrapper: {
      width: "50px",
      height: "50px",
      backgroundColor: "white",
      borderRadius: "50px",
      minWidth: "40px",
    },
    largeText: {
      fontSize: "18px",
      fontWeight: 600,
      userSelect: "none",
    },
    mediumText: {
      fontSize: "16px",
      fontWeight: 600,
      userSelect: "none",
      lineHeight: 1,
    },
    smallText: {
      fontSize: "12px",
      fontWeight: 500,
      userSelect: "none",
    },
    smallBoldText: {
      fontSize: 12,
      fontWeight: 600,
      userSelect: "none",
    },

    bottomCardSection: {
      backgroundColor: "#F1F6FA",
      padding: "10px",
      borderRadius: "25px",
    },
    buttonText: {
      fontSize: 16,
    },
  })
);
