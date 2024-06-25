import { Stack, StackProps, SxProps, Typography } from "@mui/material";
import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

interface RequestLabelProps {
  color: string;
  status: string;
  containerStyles: SxProps;
}

export default function RequestLabel(props: RequestLabelProps) {
  const { color, status, ...containerStyles } = props;
  const classes = useStyles();
  return (
    <Stack
      sx={{ backgroundColor: color, ...containerStyles }}
      className={classes.container}
    >
      <Typography className={classes.text}>{status}</Typography>
    </Stack>
  );
}

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "9px 10px",
      borderRadius: "20px",
    },
    text: {
      color: "black",
      fontFamily: "GraphikLCG",
      fontSize: 12,
      fontWeight: "500",
      lineHeight: 1,
      letterSpacing: "-0.03em",
    },
  })
);
