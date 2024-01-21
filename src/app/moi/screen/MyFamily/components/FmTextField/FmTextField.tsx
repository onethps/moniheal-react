import { StandardTextFieldProps, TextField, styled } from '@mui/material';
import React, { forwardRef } from 'react';

type FmTextFieldProps = {
  value: string;
  formik: any;
} & StandardTextFieldProps;

export const FmTextField = forwardRef((props: FmTextFieldProps, ref: any) => {
  const { value, formik, ...restProps } = props;

  return (
    <CustomTextField
      ref={ref}
      {...restProps}
      id={value}
      name={value}
      value={value}
      onChange={formik.handleChange}
      InputLabelProps={{ shrink: true }}
      onBlur={formik.handleBlur}
      error={formik.touched[value] && Boolean(formik.errors[value])}
      helperText={formik.touched[value] && formik.errors[value]}
    />
  );
});

const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputLabel-root': {
    // color: '#000',
  },
}));
