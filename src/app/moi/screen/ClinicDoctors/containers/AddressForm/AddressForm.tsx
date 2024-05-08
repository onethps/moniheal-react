import { Stack } from "@mui/material";
import React from "react";
import FormSelect from "../../components/FormSelect/FormSelect";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";

const optr = [
  {
    value: "Oblast1",
    label: "Oblast 1",
  },
  {
    value: "Oblast2",
    label: "Oblast 2",
  },
  {
    value: "Oblast3",
    label: "Oblast 3",
  },
];

export function AddressForm() {
  return (
    <Stack gap="20px">
      <FormSelect
        placeholder="Оберіть область"
        label="Область"
        name="oblast"
        options={optr}
      />
      <FormSelect
        placeholder="Оберіть район"
        label="Район"
        name="region"
        options={optr}
      />
      <FormSelect
        placeholder="Оберіть місто"
        label="Населений пункт"
        name="city"
        options={optr}
      />
      <FormSelect
        label="Вулиця"
        placeholder="Оберіть вулицю"
        name="street"
        options={optr}
      />
      <Stack flexDirection="row" gap="12px">
        <FmTextField
          label="Будинок"
          name="house"
          placeholder="№"
          containerStyles={{
            maxWidth: 106,
          }}
        />
        <FmTextField
          label="Приміщення"
          name="house"
          placeholder="№"
          containerStyles={{
            maxWidth: 106,
          }}
        />
        <FmTextField
          label="Поштовий індекс"
          name="house"
          placeholder="вулиця"
          fullWidth
        />
      </Stack>
    </Stack>
  );
}
