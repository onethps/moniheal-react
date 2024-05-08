import React from "react";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";
import { Stack } from "@mui/material";

export function AboutCompanyForm() {
  return (
    <Stack gap="20px">
      <FmTextField
        label="ЕДРПОУ"
        name="edrpou"
        placeholder="ЕДРПОУ (У разі відсутності - РНОКПП)"
      />
      <FmTextField
        label="Код одержувача/розпорядника бюджетних коштів для Казначейства"
        name="code"
        placeholder="Введіть код"
      />
      <FmTextField
        label="Власник ЗОЗ"
        name="ZOZ"
        placeholder="Введіть ПІБ власника"
      />
      <FmTextField
        label="Електронна пошта"
        name="email"
        placeholder="younamemail@gmail.com"
      />
      <FmTextField
        label="Мобільний телефон"
        name="mobile"
        placeholder="+38 (099) 9876 54 32"
      />
      <FmTextField
        label="Веб-сторінка"
        name="web"
        placeholder="www.namesite.com.ua"
      />
    </Stack>
  );
}
