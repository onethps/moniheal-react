import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { createStyles, makeStyles } from "@mui/styles";
import CameraIcon from "./CameraIcon";
import { AntSwitchGreen } from "../../../../../../shared/components/AntSwitchGreen";

export const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 500, // Converted from "font-weight: 600"
      fontSize: 14, // Converted from "font-size: 20px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
    iconWrapper: {
      width: "50px",
      height: "40px",
      backgroundColor: "#f1f6fa",
      borderRadius: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

interface InputToggleProps {
  label: string;
}

export default function InputToggle(props: InputToggleProps) {
  const { label } = props;
  const classes = useStyles();
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flexDirection="row" alignItems="center" gap="20px">
        <Box className={classes.iconWrapper}>
          <CameraIcon />
        </Box>
        <Typography className={classes.title}>{label}</Typography>
      </Stack>
      <AntSwitchGreen />
    </Stack>
  );
}
