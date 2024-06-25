import React, { FC } from "react";
import { useStyles } from "./LabelItemStyles";
import { Stack, Typography } from "@mui/material";

interface LabelItemProps {
  text: string;
  color: string;
}

export const LabelItem: FC<LabelItemProps> = ({ text, color }) => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.labelItem}
      sx={{
        backgroundColor: color,
      }}
    >
      <Typography className={classes.labelText}>{text}</Typography>
    </Stack>
  );
};
