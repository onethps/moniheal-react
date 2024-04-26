import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useState } from "react";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    buttonMore: {
      marginLeft: 28,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.5,
      letterSpacing: "-0.03em",
      color: "#2bbb97",
      padding: 0,
    },
  })
);

export function FmCheckBox() {
  const classes = useStyles();

  const [showMore, setShowMore] = useState(false);

  const onShowMoreClick = () => {
    setShowMore(true);
  };

  return (
    <Stack flexDirection="column" alignItems="flex-start">
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={
          <Stack>
            <Typography
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: showMore ? null : 3,
              }}
              className={classes.root}
            >
              Відповідно до Закону України "Про захист персональних даних" з
              метою ведення реєстрів електронної системи охорони здоров'я та
              забезпечення її функціонування у дослідній експлуатації надаю
              згоду оператору та адмініст
            </Typography>
          </Stack>
        }
      />
      {!showMore && (
        <Button onClick={onShowMoreClick} className={classes.buttonMore}>
          Більше...
        </Button>
      )}
    </Stack>
  );
}
