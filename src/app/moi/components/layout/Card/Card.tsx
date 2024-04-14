import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardContent, CardActions, styled, Typography } from "@mui/material";
import { CardProps } from "./prop.types";
import { createStyles, makeStyles } from "@mui/styles";

export const useCardStyles = makeStyles(() =>
  createStyles({
    text: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "-3%",
      textAlign: "left",
    },
  })
);

export const CustomCard = (props: CardProps) => {
  const { children, title, actions } = props;

  const classes = useCardStyles();

  return (
    <CardWrapper>
      <HeaderWrapper>
        <Typography className={classes.text}>{title}</Typography>
        <CardActions sx={{ padding: 0 }}>{actions}</CardActions>
      </HeaderWrapper>
      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)(() => ({
  borderRadius: "20px",
}));

const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
