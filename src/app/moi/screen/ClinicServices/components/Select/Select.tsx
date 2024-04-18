import {
  Select,
  OutlinedInput,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    input: {
      minWidth: "90px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "GraphikLCG",
    },
    inputLabel: {
      fontWeight: 500,
      fontSize: 14, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
  })
);

export default function MuiSelect() {
  const { input, inputLabel } = useStyles();
  return (
    <Stack gap="10px">
      <Typography className={inputLabel}>Категорія</Typography>
      <Select
        fullWidth
        placeholder="Оберіть категорію"
        IconComponent={ExpandMoreRoundedIcon}
        SelectDisplayProps={{
          style: {
            paddingTop: 13,
            paddingBottom: 10,
            alignItems: "center",
          },
        }}
        value={12}
        input={<OutlinedInput margin="dense" className={input} />}
      >
        <MenuItem value={12}>по 12</MenuItem>
        <MenuItem value={20}>по 20</MenuItem>
        <MenuItem value={60}>по 60</MenuItem>
      </Select>
    </Stack>
  );
}
