import { Stack } from "@mui/material";
import React from "react";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";

export function AcredetationForm() {
  return (
    <Stack gap="20px">
      <Stack flexDirection="row" gap="16px">
        <FmTextField
          label="Номер наказу МОЗ"
          name="edrpou"
          placeholder="№0000000"
        />
        <FmTextField
          label="Дата наказу"
          name="edrpou"
          placeholder="ДД.ММ.РРРР"
        />
      </Stack>
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
    </Stack>
  );
}
