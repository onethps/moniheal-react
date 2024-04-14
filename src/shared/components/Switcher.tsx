import { MenuItem, Select } from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { OutlinedInput, createStyles, makeStyles } from "@material-ui/core";

const useStyless = makeStyles(() => {
  return createStyles({
    input: {
      minWidth: "90px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "GraphikLCG",
    },
  });
});

export default function SortSwitcher() {
  const { input } = useStyless();
  return (
    <Select
      IconComponent={ExpandMoreRoundedIcon}
      SelectDisplayProps={{
        style: {
          paddingTop: 13,
          paddingLeft: 11,
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
  );
}
