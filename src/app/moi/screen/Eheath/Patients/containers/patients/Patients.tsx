import React from "react";
import { CustomCard } from "../../../../../components/layout/Card/Card";
import { Stack } from "@mui/material";
import PatientCard from "../../components/PatientsCard/PatientCard";
import { useStyles } from "./PatientsStyles";

export default function Patients() {
  const classes = useStyles();
  return (
    <CustomCard title={"Patients"} actions={null}>
      <Stack className={classes.container}>
        {Array.from({ length: 5 }).map((_, index) => (
          <PatientCard key={index} />
        ))}
      </Stack>
    </CustomCard>
  );
}
