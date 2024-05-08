import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      minWidth: "90px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "GraphikLCG",
    },
  })
);
