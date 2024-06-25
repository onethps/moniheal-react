import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "14px",
      padding: "10px",
    },
  })
);
