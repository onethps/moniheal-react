import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import RequestLabel from "../RequestLabel/RequestLabel";
import { createStyles, makeStyles } from "@mui/styles";
import PenIcon from "../icons/PenIcon";
import PrintIcon from "../icons/PrintIcon";

export default function RequestItem() {
  const classes = useStyles();
  return (
    <Stack className={classes.container}>
      <RequestLabel
        containerStyles={{
          flex: 0.2,
        }}
        color="#D8F9DC"
        status="Підписаний"
      />
      <Typography className={classes.name}>
        Кравець Світлана Сергіївна
      </Typography>
      <Typography classes={{ root: classes.identification }}>
        1a8cdb0a-dab7-4a96-b731-45cf5212bc50
      </Typography>
      <Stack className={classes.actionsContainer}>
        <IconButton className={classes.iconContainer}>
          <PenIcon />
        </IconButton>
        <IconButton className={classes.iconContainer}>
          <PrintIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderRadius: "20px",
      gap: "10px",
      border: "1px solid #D2E1F5",
      width: "100%",
    },

    name: {
      flex: 0.3,
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 14,
      color: "#000",
      fontWeight: 500,
      lineHeight: 1,
    },
    identification: {
      flex: 0.4,
      fontFamily: "GraphikLCG",
      letterSpacing: "-0.03em",
      fontSize: 14,
      color: "#90a4be",
      fontWeight: 500,
      lineHeight: 1,
    },
    actionsContainer: {
      flex: 0.1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6px",
    },
    iconContainer: {
      width: "50px",
      height: "50px",
      border: "1px solid #D2E1F5",
    },
  })
);
