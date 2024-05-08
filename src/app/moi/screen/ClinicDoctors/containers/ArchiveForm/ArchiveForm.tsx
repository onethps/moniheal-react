import { Stack } from "@mui/material";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";

export function ArchiveForm() {
  return (
    <Stack gap="20px">
      <Stack gap="16px" flexDirection="row">
        <FmTextField
          label="Дата внесення"
          name="surname"
          placeholder="ДД.ММ.РРРР"
          fullWidth
        />
        <FmTextField
          label="Місце в архіві"
          name="place"
          placeholder="Місце в архіві"
          fullWidth
        />
      </Stack>
    </Stack>
  );
}
