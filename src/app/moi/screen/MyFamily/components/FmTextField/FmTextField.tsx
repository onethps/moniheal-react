import {
  Box,
  IconButton,
  InputBase,
  InputBaseProps,
  InputLabel,
  SxProps,
  styled,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useField } from "formik";
import { forwardRef } from "react";
import { Theme } from "@material-ui/core";

type FmTextFieldProps = {
  name: string;
  fullWidth?: boolean;
  label?: string;
  containerStyles?: SxProps;
  endIcon?: React.ReactNode;
} & InputBaseProps;

export const FmTextField = forwardRef<HTMLInputElement, FmTextFieldProps>(
  (props, ref) => {
    const { name, fullWidth, containerStyles, endIcon, label, ...restProps } =
      props;

    const [field, meta, helpers] = useField(name);

    const classes = useStyles({ endIcon: Boolean(endIcon) });

    return (
      <InputControl
        sx={{
          width: fullWidth ? "100%" : "inherit",

          position: "relative",
          ...containerStyles,
        }}
      >
        {label && (
          <InputLabel
            classes={{
              root: classes.inputLabelRoot,
            }}
          >
            {label}
          </InputLabel>
        )}
        <InputBase
          ref={ref}
          classes={{
            root: classes.inputRoot,
            input: classes.inputText,
          }}
          error={meta.touched && Boolean(meta.error)}
          {...field}
          {...restProps}
        />
        {endIcon && (
          <IconButton
            sx={{
              position: "absolute",
              right: 15,
              top: 45,
              padding: 0,
            }}
          >
            {endIcon}
          </IconButton>
        )}
      </InputControl>
    );
  }
);

const InputControl = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
}));

export interface StyleProps {
  endIcon: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) =>
  createStyles({
    inputLabelRoot: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
      marginBottom: 10,
    },
    inputRoot: {
      height: 50,
      padding: "14px 15px",
      paddingRight: ({ endIcon }) => (endIcon ? 45 : "15px"),
      border: "1px solid #90a4be",
      borderRadius: "10px",
    },
    inputText: {
      height: "14px",
      fontFamily: "GraphikLCG",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
  })
);
