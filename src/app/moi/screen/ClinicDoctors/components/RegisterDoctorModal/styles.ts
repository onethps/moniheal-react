import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    dateBirthPicker: {
      maxHeight: 50,
    },
    formControlWrapper: {
      minHeight: "100%",

      justifyContent: "space-between",
    },
    radioGroup: {
      // minHeight: "100%",
    },
  })
);
