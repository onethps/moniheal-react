import { Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useStyles } from "./PatientMoreInfoItemStyles";

interface PatientMoreInfoItemProps {
  label: string;
  text: string;
}

const PatientMoreInfoItem: FC<PatientMoreInfoItemProps> = ({ label, text }) => {
  const classes = useStyles();
  return (
    <Stack className={classes.patientDetailsItemWrapper}>
      <Typography className={classes.patientDetailsItemLabel}>
        {label}
      </Typography>
      <Typography className={classes.patientDetailsItemText}>{text}</Typography>
    </Stack>
  );
};

export default PatientMoreInfoItem;
