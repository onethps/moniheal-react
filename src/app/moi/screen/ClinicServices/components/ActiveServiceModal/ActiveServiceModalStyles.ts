import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "9px 10px",
      backgroundColor: "#b3f0f9",
      borderRadius: "20px",
      width: 68,
    },
    labelText: {
      fontWeight: 500,
      fontSize: 12, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%" (Consider adjusting)
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    serviceIconContainer: {
      backgroundColor: "#f1f6fa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      width: "50px",
      height: "40px",
    },
    costIconContainer: {
      display: "flex",
      backgroundColor: "#f1f6fa",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      borderRadius: "20px",
    },
    costPriceText: {
      fontWeight: 500,
      fontSize: 24, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%" (Consider adjusting)
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    costPriceTime: {
      fontWeight: 500,
      fontSize: 16, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%" (Consider adjusting)
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    mainIconContainer: {
      display: "flex",
      borderRadius: "30px",
      width: "50px",
      height: "50px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5eeff",
    },
    mainText: {
      fontWeight: 500,
      fontSize: 20,
      width: 352,
      lineHeight: 1.2,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    tempTextTitle: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    tempText: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.33,
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
      height: 212,
    },
    avatar: {
      width: "40px",
      height: "40px",
    },
    doctorName: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    doctorDesc: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#173236",
    },
    bottomContainer: {
      flexDirection: "row",
      marginTop: "30px",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      gap: "10px",
    },
    iconButton: {
      width: 50,
      height: 50,
      borderRadius: "30px",
      border: "1px solid #d2e1f5",
    },
  })
);
