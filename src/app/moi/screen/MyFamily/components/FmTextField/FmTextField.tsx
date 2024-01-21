import {
  Box,
  InputLabel,
  StandardTextFieldProps,
  TextField,
  styled,
} from "@mui/material";
import { useField } from "formik";
import { forwardRef } from "react";

type FmTextFieldProps = {
  name: string;
  fullWidth?: boolean;
} & StandardTextFieldProps;

export const FmTextField = forwardRef<HTMLInputElement, FmTextFieldProps>(
  (props, ref) => {
    const { name, fullWidth, label, ...restProps } = props;

    const [field, meta, helpers] = useField(name);

    return (
      <InputWrapper
        sx={{
          width: fullWidth ? "100%" : "inherit",
        }}
      >
        {label && <InputLabel>{label}</InputLabel>}
        <TextField
          ref={ref}
          variant="outlined"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          {...field}
          {...restProps}
        />
      </InputWrapper>
    );
  }
);

const InputWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 5,
}));
