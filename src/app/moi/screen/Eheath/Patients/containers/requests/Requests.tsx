import React from "react";
import { CustomCard } from "../../../../../components/layout/Card/Card";
import { Stack } from "@mui/material";
import { useStyles } from "./RequestsStyles";
import RequestItem from "../../components/RequestItem/RequestItem";

export default function Requests() {
  const classes = useStyles();
  return (
    <CustomCard title={"Requests"} actions={null}>
      <Stack className={classes.container}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RequestItem key={index} />
        ))}
      </Stack>
    </CustomCard>
  );
}
