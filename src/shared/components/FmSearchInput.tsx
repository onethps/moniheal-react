import {
  FormControl,
  InputAdornment,
  StandardTextFieldProps,
  TextField,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React, { FC } from "react";
import SearchIcon from "@material-ui/icons/Search";

export const Svg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="#173236"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5001 17.5L14.1667 14.1667"
        stroke="#173236"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
    input: {
      "&:focus": {
        borderWidth: 0,
      },
      "&:active": {
        borderWidth: 0,
      },
      "&::placeholder": {
        opacity: 1,
      },
    },
  });
});

interface FmSearchInputProps extends StandardTextFieldProps {
  fullWidth?: boolean;
  inputStyles?: React.CSSProperties;
}

export const FmSearchInput: FC<FmSearchInputProps> = (props) => {
  const { fullWidth = false, inputStyles, ...restProps } = props;
  const { search, input } = useStyles();

  return (
    <FormControl className={search} fullWidth={fullWidth}>
      <TextField
        size="small"
        variant="outlined"
        InputProps={{
          classes: {
            input: input,
          },
          style: {
            borderRadius: "30px",
            color: "#173236",
            fontSize: "12px",
            fontFamily: "GraphikLCG",
            fontWeight: 500,
            letterSpacing: " -0.03em",
            height: "40px",
            ...inputStyles,
          },
          startAdornment: (
            <InputAdornment position="start">
              <Svg />
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    </FormControl>
  );
};
