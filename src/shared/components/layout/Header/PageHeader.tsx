import React from "react";
import classNames from "classnames";
import { BaseHeaderProps } from "./type/props";
import { useStyles } from "./PageHeader.jss";
import { Box, Typography } from "@mui/material";

export const PageHeader = (props: BaseHeaderProps) => {
  const { title, toolbar } = props;
  const styles = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography>{title}</Typography>
      {toolbar}
    </Box>
  );
};
