import React from "react";
import { useStyles } from "./styles";
import { MenuItem, OutlinedInput, Select } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export default function FmPageSizeSelect() {
  const classes = useStyles();

  return (
    <Select
      IconComponent={ExpandMoreRoundedIcon}
      SelectDisplayProps={{
        style: {
          paddingTop: 13,
          paddingBottom: 10,
          alignItems: "center",
        },
      }}
      value={12}
      input={<OutlinedInput margin="dense" className={classes.input} />}
    >
      <MenuItem value={12}>по 12</MenuItem>
      <MenuItem value={20}>по 20</MenuItem>
      <MenuItem value={60}>по 60</MenuItem>
    </Select>
  );
}
