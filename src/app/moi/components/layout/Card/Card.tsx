import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardHeader, CardContent, CardActions, styled } from "@mui/material";
import { CardProps } from "./prop.types";

export const CustomCard = (props: CardProps) => {
  const { children, title, actions } = props;

  return (
    <CardWrapper>
      <HeaderWrapper>
        <CardHeader title={title} sx={{ padding: 0 }} />
        <CardActions sx={{ padding: 0 }}>{actions}</CardActions>
      </HeaderWrapper>
      <CardContent sx={{ padding: 0 }}>{children}</CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled(Card)(() => ({
  padding: "30px 20px",
  borderRadius: "20px",
}));

const HeaderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
