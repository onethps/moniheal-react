import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #d2e1f5",
      borderRadius: 30,
      maxWidth: 356,
      minHeight: 430,
      width: "100%",
      padding: "10px",
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    labelContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "4px",
    },
    labelItem: {
      borderRadius: "20px",
      padding: "9px 10px",
      minWidth: 100,
    },
    iconButton: {
      borderRadius: "30px",
      border: "1px solid #D2E1F5",
      width: "50px",
      height: "50px",
    },
    iconPatient: {
      width: "50px",
      height: "40px",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "40px",
    },
    labelText: {
      // letterSpacing: "-0.3em",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
    },
    infoContainer: {
      marginTop: "20px",
    },
    infoDescriptionWrapper: {
      marginTop: 10,
      gap: "8px",
    },
    infoHeaderText: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      lineHeight: 1,

      fontSize: 16,
      fontWeight: 500,

      textAlign: "center",
    },
    infoSmallText: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 12,
      color: "#90a4be",
      fontWeight: 500,
      lineHeight: 1,
    },
    infoMediumText: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
    },
    patientDetailsContainer: {
      marginTop: "30px",
      padding: "10px",
      backgroundColor: "#f6f7fa",
      borderRadius: 30,
      height: "100%",
    },
    patientDetailsMainContainer: {
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
      alignItems: "flex-start",
    },
    patientDetailsMainBottomContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: "10px",
    },
    patientDetailsHeader: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      alignItems: "center",
    },
    patientDetailsHeaderText: {
      gap: "4px",
      display: "flex",
      flexDirection: "column",
    },

    patientDetailsItemWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      border: "1px solid #d2e1f5",
      padding: "15px 10px",
      borderRadius: 40,
    },

    patientDetailsItemLabel: {
      fontSize: 10,
      color: "#90a4be",
      fontWeight: 500,
      lineHeight: 1,
    },
    declarationBottomItem: {
      minWidth: "80px",
      maxHeight: "50px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      border: "1px solid #d2e1f5",
      padding: "12px 10px",
      borderRadius: 40,
    },
    declarationBottomItemLabel: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",

      fontSize: 10,
      fontWeight: 500,
      lineHeight: "10px",
      color: "#90A4BE",
    },
    declarationBottomItemText: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "12px",
      color: "#000",
    },
    patientDetailsItemText: {
      fontSize: 12,
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontWeight: 500,
      lineHeight: 1,
    },
    buttonSubmit: {
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 16,
    },
  })
);
