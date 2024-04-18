import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./TextInputStyles";

interface TextInputProps {
  label: string;
  labelValue?: string;
  placeholder: string;
}

export default function TextInput(props: TextInputProps) {
  const classes = useStyles();
  return (
    <Box>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="10px"
      >
        <Typography className={classes.inputLabel}>{props.label}</Typography>
        {props.labelValue && (
          <Typography className={classes.inputLabelStat}>
            {props.labelValue}
          </Typography>
        )}
      </Stack>
      <TextField
        size="small"
        fullWidth
        placeholder={props.placeholder}
        style={{
          height: "50px",
        }}
        sx={{
          input: classes.input,
        }}
      />
    </Box>
  );
}
