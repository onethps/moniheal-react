import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useStyles } from "./PatientCardStyles";
import { PersonIcon } from "../icons/PersonIcon";
import { DotsIcon } from "../icons/DotsIcon";
import { LabelItem } from "./LabelItem/LabelItem";
import PatientMoreInfoItem from "./PatientMoreInfoItem/PatientMoreInfoItem";

const labels = [
  {
    name: "Активний",
    value: "active",
    color: "#f6f7fa",
  },
  {
    name: "Верифіковано",
    value: "verified",
    color: "#d8f9dc",
  },
];

export default function PatientCard() {
  const classes = useStyles();
  return (
    <Stack className={classes.container}>
      <Stack className={classes.headerContainer}>
        <Stack className={classes.labelContainer}>
          {labels.map((label) => (
            <LabelItem text={label.name} color={label.color} />
          ))}
        </Stack>
        <IconButton className={classes.iconButton}>
          <DotsIcon />
        </IconButton>
      </Stack>
      <Stack className={classes.infoContainer}>
        <Typography className={classes.infoHeaderText}>
          Семко Виталий Николаевич
        </Typography>
        <Stack className={classes.infoDescriptionWrapper}>
          <Typography className={classes.infoSmallText} textAlign="center">
            22.02.1978, 42р., Чоловіча
          </Typography>
          <Typography className={classes.infoMediumText} textAlign="center">
            м. Луцьк, вул. Ентузіастів 4
          </Typography>
        </Stack>
      </Stack>
      <Stack className={classes.patientDetailsContainer}>
        <Stack className={classes.patientDetailsHeader}>
          <Box className={classes.iconPatient}>
            <PersonIcon />
          </Box>
          <Stack className={classes.patientDetailsHeaderText}>
            <Typography className={classes.infoSmallText}>Лікар</Typography>
            <Typography className={classes.infoMediumText}>
              Бойко Олександр Володимирович
            </Typography>
          </Stack>
        </Stack>
        <Stack className={classes.patientDetailsMainContainer}>
          <PatientMoreInfoItem
            label="ІД"
            text="c5ccc11c-c7f3-4794-a1e3-44b0324dabf7"
          />
          <Stack className={classes.patientDetailsMainBottomContainer}>
            <Stack className={classes.declarationBottomItem}>
              <Typography className={classes.declarationBottomItemLabel}>
                Номер декларації
              </Typography>
              <Typography className={classes.declarationBottomItemText}>
                0001-7ТР3-М000
              </Typography>
            </Stack>
            <Stack className={classes.declarationBottomItem}>
              <Typography className={classes.declarationBottomItemLabel}>
                Дата подання
              </Typography>
              <Typography className={classes.declarationBottomItemText}>
                06.10.2021
              </Typography>
            </Stack>
            <Stack className={classes.declarationBottomItem}>
              <Typography className={classes.declarationBottomItemLabel}>
                Оновлення
              </Typography>
              <Typography className={classes.declarationBottomItemText}>
                06.10.2021
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Button className={classes.buttonSubmit} variant="contained">
          Записати до лікаря
        </Button>
      </Stack>
    </Stack>
  );
}
