import React from "react";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";
import { Stack } from "@mui/material";

export function LicenseForm() {
  return (
    <Stack gap="20px">
      <Stack flexDirection="row" gap="20px">
        <FmTextField label="Серія" name="edrpou" placeholder="АА" />
        <FmTextField label="Номер" name="edrpou" placeholder="0000000" />
      </Stack>
      <FmTextField
        label="Назва органу що видав"
        name="edrpou"
        placeholder="0000000"
      />
      <Stack flexDirection="row" gap="16px">
        <FmTextField
          label="Дата видачі"
          name="edrpou"
          placeholder="ДД.ММ.РРРР"
        />
        <FmTextField
          label="Дата завершення дії"
          name="edrpou"
          placeholder="ДД.ММ.РРРР"
        />
      </Stack>
      <Stack flexDirection="row" gap="16px">
        <FmTextField label="Діє з" name="edrpou" placeholder="ДД.ММ.РРРР" />
        <FmTextField
          label="Номер наказу"
          name="edrpou"
          placeholder="ДД.ММ.РРРР"
        />
      </Stack>
      <FmTextField
        label="Ліцензія видана на"
        name="edrpou"
        placeholder="0000000"
      />
    </Stack>
  );
}
