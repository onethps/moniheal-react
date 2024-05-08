import { Stack } from "@mui/material";
import React from "react";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";
import FormSelect from "../../components/FormSelect/FormSelect";

const docOptions = [
  {
    value: "passport1",
    label: "Паспорт",
  },
  {
    value: "id",
    label: "ИД",
  },
];

export function AboutOwnerForm() {
  return (
    <Stack gap="20px">
      <Stack gap="16px" flexDirection="row">
        <FmTextField
          label="Прізвище"
          name="name"
          placeholder="Введіть прізвище"
        />
        <FmTextField label="Ім’я" name="surname" placeholder="Введіть ім’я" />
      </Stack>
      <FmTextField
        label="По-батькові"
        name="surname"
        placeholder="Введіть по-батькові"
      />
      <FmTextField
        label="Дата народження"
        name="birthday"
        placeholder="ДД.ММ.РРРР"
      />
      <FmTextField
        label="Мобільний телефон"
        name="mobile"
        placeholder="+38 (099) 9876 54 32"
      />
      <FmTextField
        label="Електронна пошта"
        name="email"
        placeholder="younamemail@gmail.com"
      />
      <FmTextField
        label="РНОКПП керівника НМП"
        name="rnokpp"
        placeholder="1234567890"
      />
      <FormSelect
        options={docOptions}
        placeholder="Виберіть документ"
        label="Документи що підтверджують особу"
        name="documentType"
      />
      <Stack flexDirection="row" gap="12px">
        <FmTextField
          label="Серія"
          name="ser"
          placeholder="AA"
          containerStyles={{
            maxWidth: 106,
          }}
        />
        <FmTextField
          label="Номер"
          name="number"
          placeholder="000000"
          containerStyles={{
            maxWidth: 106,
          }}
        />
        <FmTextField
          label="Коли виданий"
          name="release"
          placeholder="ДД.ММ.РРРР"
          fullWidth
        />
      </Stack>
      <FmTextField
        label="Ким виданий"
        name="whom"
        placeholder="Введіть ким виданий"
      />
    </Stack>
  );
}
