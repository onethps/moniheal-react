import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./TextAreaStyles";

export default function TextArea() {
  const classes = useStyles();
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        marginTop="20px"
        marginBottom="10px"
      >
        <Typography className={classes.inputLabel}>Короткий опис</Typography>
        <Typography className={classes.inputLabelStat}>0 \ 300</Typography>
      </Stack>

      <TextField
        //   variant="outlined"
        id="outlined-multiline-static"
        //   label="Multiline"
        multiline
        placeholder="Напишіть короткий опис"
        fullWidth
        inputProps={{
          style: {
            height: "100px",
          },
        }}
        sx={{
          textArea: classes.textArea,
        }}
      />
    </>
  );
}
