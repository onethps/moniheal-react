import {
  Box,
  Card,
  CardActionArea,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const useCardStyles = makeStyles(() =>
  createStyles({
    card: {
      position: "relative",
      maxWidth: "262px",
      width: "100%",
      border: "1px solid #d2e1f5",
      borderRadius: "30px",
      height: "100%",
      maxHeight: "300px",
    },
    cardArea: {
      padding: "20px",
    },
    moreButton: {
      position: "absolute",
      zIndex: "999",
      right: "10px",
      top: "10px",
      border: "1px solid #d2e1f5",
      borderRadius: "30px",
      width: "50px",
      height: "50px",
    },
    cardHeaderText: {
      fontWeight: 500,
      fontSize: 20, // Converted from "fontSize: 20px"
      lineHeight: 1, // Converted from "lineHeight: 100%"
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    cardHeaderDescText: {
      fontWeight: 500,
      fontSize: 14, // Converted from "fontSize: 14px"
      lineHeight: 1, // Converted from "lineHeight: 100%"
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
      marginTop: "6px",
    },
    cardMainText: {
      marginTop: "20px",
      fontWeight: 500,
      fontSize: 16, // Changed from "fontSize: 16px"
      lineHeight: 1.25, // Changed from "lineHeight: 125%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
    cardDescriptionText: {
      marginTop: "10px",
      fontWeight: 500,
      fontSize: 12, // Converted from "fontSize: 12px"
      lineHeight: 1.33, // Converted from "lineHeight: 133%"
      letterSpacing: "-0.03em",
      color: "#1e1e1e",
    },
    cardBottomButton: {
      borderRadius: 30, // Converted from "border-radius: 30px"
      width: 50, // Converted from "width: 50px"
      height: 40, // Converted from "height: 40px"
      background: "#f1f6fa",
    },
  })
);

interface ActiveCardProps {
  onClick?: () => void;
}

export default function ActiveCard(props: ActiveCardProps) {
  const { onClick, ...restProps } = props;
  const classes = useCardStyles();
  return (
    <Card elevation={0} className={classes.card} {...restProps}>
      <CardActionArea className={classes.cardArea} onClick={onClick}>
        {/* header card */}
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack>
            <Typography className={classes.cardHeaderText}>
              від ₴4800
            </Typography>
            <Typography className={classes.cardHeaderDescText}>60хв</Typography>
          </Stack>
          <IconButton
            onMouseDown={(event) => event.stopPropagation()}
            className={classes.moreButton}
          >
            <VertIcon />
          </IconButton>
        </Stack>
        {/* main content card */}
        <Typography className={classes.cardMainText}>
          Консультація психіатра для приватних компаній
        </Typography>
        <Typography className={classes.cardDescriptionText}>
          Необхідні роз’яснення надійдуть на Вашу електронну адресу після
          завершення онлайн-замовлення.
        </Typography>
        <Stack marginTop="62px" flexDirection="row" gap="4px">
          <IconButton
            className={classes.cardBottomButton}
            disableRipple
            disableTouchRipple
            disableFocusRipple
          >
            <CameraIcon />
          </IconButton>
          <IconButton
            className={classes.cardBottomButton}
            disableRipple
            disableTouchRipple
            disableFocusRipple
          >
            <PersonIcon />
          </IconButton>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

const PersonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="9.99996"
      cy="5.83333"
      r="3.33333"
      stroke="#173236"
      stroke-width="2"
    />
    <path
      d="M12.5 11.6667H7.50004C5.19886 11.6667 3.13762 13.7916 4.65211 15.5241C5.68203 16.7023 7.38522 17.5 10 17.5C12.6149 17.5 14.3181 16.7023 15.348 15.5241C16.8625 13.7916 14.8012 11.6667 12.5 11.6667Z"
      stroke="#173236"
      stroke-width="2"
    />
  </svg>
);

const CameraIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 6.66669C2.5 5.28598 3.61929 4.16669 5 4.16669H10.8333C12.214 4.16669 13.3333 5.28598 13.3333 6.66669V13.3334C13.3333 14.7141 12.214 15.8334 10.8333 15.8334H5C3.61929 15.8334 2.5 14.7141 2.5 13.3334V6.66669Z"
      stroke="#173236"
      stroke-width="2"
    />
    <path
      d="M16.1092 13.7483L13.6092 11.4983C13.4336 11.3403 13.3334 11.1151 13.3334 10.8789V9.12116C13.3334 8.88492 13.4336 8.65979 13.6092 8.50175L16.1092 6.25175C16.6455 5.76911 17.5 6.14969 17.5 6.87116V13.1289C17.5 13.8504 16.6455 14.2309 16.1092 13.7483Z"
      stroke="#173236"
      stroke-width="2"
      stroke-linejoin="round"
    />
  </svg>
);

const VertIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99992 16.6667C9.54159 16.6667 9.14922 16.5035 8.82284 16.1771C8.49645 15.8507 8.33325 15.4583 8.33325 15C8.33325 14.5417 8.49645 14.1493 8.82284 13.8229C9.14922 13.4965 9.54159 13.3333 9.99992 13.3333C10.4583 13.3333 10.8506 13.4965 11.177 13.8229C11.5034 14.1493 11.6666 14.5417 11.6666 15C11.6666 15.4583 11.5034 15.8507 11.177 16.1771C10.8506 16.5035 10.4583 16.6667 9.99992 16.6667ZM9.99992 11.6667C9.54159 11.6667 9.14922 11.5035 8.82284 11.1771C8.49645 10.8507 8.33325 10.4583 8.33325 10C8.33325 9.54168 8.49645 9.14932 8.82284 8.82293C9.14922 8.49654 9.54159 8.33334 9.99992 8.33334C10.4583 8.33334 10.8506 8.49654 11.177 8.82293C11.5034 9.14932 11.6666 9.54168 11.6666 10C11.6666 10.4583 11.5034 10.8507 11.177 11.1771C10.8506 11.5035 10.4583 11.6667 9.99992 11.6667ZM9.99992 6.66668C9.54159 6.66668 9.14922 6.50348 8.82284 6.17709C8.49645 5.8507 8.33325 5.45834 8.33325 5.00001C8.33325 4.54168 8.49645 4.14932 8.82284 3.82293C9.14922 3.49654 9.54159 3.33334 9.99992 3.33334C10.4583 3.33334 10.8506 3.49654 11.177 3.82293C11.5034 4.14932 11.6666 4.54168 11.6666 5.00001C11.6666 5.45834 11.5034 5.8507 11.177 6.17709C10.8506 6.50348 10.4583 6.66668 9.99992 6.66668Z"
      fill="#173236"
    />
  </svg>
);
