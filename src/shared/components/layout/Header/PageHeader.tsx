import { makeStyles, createStyles } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

export const useCardStyles = makeStyles(() =>
  createStyles({
    text: {
      color: "rgb(0, 0, 0)",
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "30px",
      letterSpacing: "-3%",
      textAlign: "left",
    },
  })
);

export const PageHeader = (props) => {
  const { title, toolbar } = props;

  const classes = useCardStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "42px",
      }}
    >
      <Typography className={classes.text}>{title}</Typography>
      {toolbar}
    </Box>
  );
};
