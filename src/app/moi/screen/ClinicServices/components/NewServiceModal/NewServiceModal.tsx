import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Select,
  OutlinedInput,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { Form } from "formik";
import { useTranslation } from "react-i18next";
import { useStyles } from "./NewServiceModalStyles";
import TextArea from "../TextArea/TextArea";
import TextInput from "../TextInput/TextInput";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { createStyles, makeStyles } from "@mui/styles";
import MuiSelect from "../Select/Select";
import InputToggle from "../InputToggle/InputToggle";

interface NewChargeModalProps {
  isVisible: boolean;
  onCloseModalHandler: () => void;
}

export function NewServiceModal(props: NewChargeModalProps) {
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
            maxWidth: "452px", // Set your width here
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

      <DialogContent
        sx={{
          padding: "50px 20px",
        }}
      >
        <Typography className={classes.modalTitle}>Створити послугу</Typography>

        <form>
          <Box marginTop="20px">
            <TextInput
              label="Назва послуги"
              labelValue="0 \ 90"
              placeholder="Придумайте назву"
            />
            <TextArea />

            <Stack marginTop="20px">
              <MuiSelect />
            </Stack>
            <Stack marginTop="20px" gap="10px">
              <InputToggle label="Онлайн консультація" />
              <InputToggle label="Особистий прийом" />
            </Stack>

            <Stack marginTop="20px">
              <TextInput
                label="Додати лікаря"
                placeholder="Прикрепіть лікаря до послуги"
              />
            </Stack>
            <Stack marginTop="20px" flexDirection="row" gap="20px">
              <TextInput label="Ціна" placeholder="₴00.00" />
              <TextInput label="Тривалість" placeholder="00хв" />
            </Stack>
            <Stack marginTop="20px" className={classes.descriptionWrapper}>
              <Typography className={classes.descText}>
                При створенні та редагуванні послуги вона автоматично буде
                відправлена на модерацію. Після підтвердження послуги
                адміністратором вона стане активною і буде доступною для
                замовлення клієнтам на вашій сторінці
              </Typography>
            </Stack>
            <Stack
              marginTop="30px"
              justifyContent="center"
              flexDirection="row"
              gap="20px"
            >
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                className={classes.button}
              >
                Скасувати
              </Button>
              <Button variant="contained" fullWidth color="success">
                Створити
              </Button>
            </Stack>
          </Box>
        </form>
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
