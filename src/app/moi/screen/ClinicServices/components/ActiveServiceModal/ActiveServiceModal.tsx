import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useTranslation } from "react-i18next";

import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import MuiSelect from "../Select/Select";
import InputToggle from "../InputToggle/InputToggle";
import { useStyles } from "./ActiveServiceModalStyles";
import CameraIcon from "../InputToggle/CameraIcon";
import CostIcon from "../../assets/icons/CostIcon";
import PillIcon from "../../../../assets/icons/PillIcon";
import ShareIcon from "../../../../assets/icons/ShareIcon";
import PencilIcon from "../../../../assets/icons/PencilIcon";
import TrashIcon from "../../../../assets/icons/TrashIcon";

interface NewChargeModalProps {
  isVisible: boolean;
  onCloseModalHandler: () => void;
}

export function ActiveServiceModal(props: NewChargeModalProps) {
  const { isVisible, onCloseModalHandler } = props;
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      open={isVisible}
      onClose={onCloseModalHandler}
      maxWidth={"md"}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            borderRadius: "30px",
            maxWidth: "452px",
          },
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onCloseModalHandler}
        sx={{
          position: "absolute",
          border: "1px solid #1e1e1e",
          width: 40,
          height: 40,
          right: 10,
          top: 10,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Box className={classes.labelWrapper}>
          <Typography className={classes.labelText}>Активна</Typography>
        </Box>
        <Stack marginTop="30px" flexDirection="row">
          <Stack flexDirection="row" gap="4px">
            <Box className={classes.serviceIconContainer}>
              <CameraIcon />
            </Box>
            <Box className={classes.serviceIconContainer}>
              <CameraIcon />
            </Box>
          </Stack>
          <Stack marginLeft="60px" flexDirection="row" gap="10px">
            <Box className={classes.costIconContainer}>
              <CostIcon />
            </Box>
            <Stack>
              <Typography className={classes.costPriceText}>₴1300</Typography>
              <Typography className={classes.costPriceTime}>45 хв</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          marginTop="40px"
          alignItems="center"
          flexDirection="row"
          gap="10px"
        >
          <Box className={classes.mainIconContainer}>
            <PillIcon />
          </Box>
          <Typography className={classes.mainText}>
            Консультація психіатра для приватних компаній
          </Typography>
        </Stack>
        <Stack marginTop="26px" gap="10px">
          <Typography className={classes.tempTextTitle}>
            Виконувані процедури
          </Typography>
          <Typography className={classes.tempText}>
            Конфлікти у сім'ї або у відносинах з сексуальним партнером.
          </Typography>
        </Stack>
        <Stack
          marginTop="20px"
          flexDirection="row"
          alignItems="center"
          gap="10px"
        >
          <Avatar className={classes.avatar} />
          <Stack gap="4px">
            <Typography className={classes.doctorName}>
              Косенко Руслан Володимирович
            </Typography>
            <Typography className={classes.doctorDesc}>
              Психіатр, Невролог, Психотерапевт
            </Typography>
          </Stack>
        </Stack>
        <Stack className={classes.bottomContainer}>
          <IconButton className={classes.iconButton}>
            <ShareIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <PencilIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <TrashIcon />
          </IconButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5L15 15"
      stroke="#1E1E1E"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M15 5L5 15"
      stroke="#1E1E1E"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);
