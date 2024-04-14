import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Stack,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Checkbox,
  Link,
  InputLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Formik, FormikProps, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { FmTextField } from "../../MyFamily/components/FmTextField/FmTextField";
import { createStyles, makeStyles } from "@mui/styles";

Yup.addMethod(Yup.object, "dayjs", function method(message) {
  return this.test("dayjs", message, function validate(value) {
    if (!value) {
      return true;
    }
    return dayjs.isDayjs(value);
  });
});

export const useCardStyles = makeStyles(() =>
  createStyles({
    modalTitle: {
      fontWeight: 600, // Converted from "font-weight: 600"
      fontSize: 20, // Converted from "font-size: 20px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
    inputLabel: {
      fontWeight: 500,
      fontSize: 14, // Converted from "font-size: 14px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      color: "#000",
    },
    inputLabelStat: {
      fontWeight: 500,
      fontSize: 12, // Converted from "font-size: 12px"
      lineHeight: 1, // Converted from "line-height: 100%"
      letterSpacing: "-0.03em",
      textAlign: "right", // Converted from "text-align: right"
      color: "#777e90",
    },
  })
);

const FormSchema = Yup.object().shape({
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  surname: Yup.string().required("Required"),
  birth: Yup.object().nullable().dayjs("Date of birth is invalid"),
  sex: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  password: Yup.string().min(5),
  repeatPassword: Yup.string().min(5),
  privacyPolicy: Yup.boolean(),
});

export type ChargeFormType = Yup.InferType<typeof FormSchema>;

export const initialValues: ChargeFormType = {
  lastname: "",
  name: "",
  surname: "",
  birth: dayjs(),
  sex: "",
  email: "",
  phoneNumber: "",
  password: "",
  repeatPassword: "",
  privacyPolicy: false,
};

interface NewChargeModalProps {
  isVisible: boolean;
  onCloseModalHandler: () => void;
}

export function NewServiceModal(props: NewChargeModalProps) {
  const { isVisible, onCloseModalHandler } = props;
  const { t } = useTranslation();

  const classes = useCardStyles();

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
          border: "1px solid #1e1e1e", // Converted from "border: 1px solid #1e1e1e"
          borderRadius: 25, // Converted from "border-radius: 25px"
          width: 40, // Converted from "width: 40px"
          height: 40, // Converted from "height: 40px"

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
        <Formik
          initialValues={initialValues}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props: FormikProps<typeof initialValues>) => (
            <Form>
              <Box marginTop="20px">
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  marginBottom="10px"
                >
                  <Typography className={classes.inputLabel}>
                    Назва послуги
                  </Typography>
                  <Typography className={classes.inputLabelStat}>
                    0 \ 90
                  </Typography>
                </Stack>
                <TextField
                  size="small"
                  fullWidth
                  placeholder="Придумайте назву"
                  style={{
                    height: "50px",
                  }}
                  sx={{
                    input: {
                      fontWeight: 500,
                      fontFamily: "GraphikLCG",
                      fontSize: 14, // Converted from "font-size: 14px"
                      lineHeight: 1, // Converted from "line-height: 100%"
                      letterSpacing: "-0.03em",
                      color: "#90a4be",
                      "&::placeholder": {
                        opacity: 1,
                      },
                    },
                  }}
                />
                {/* second */}
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  marginTop="20px"
                  marginBottom="10px"
                >
                  <Typography className={classes.inputLabel}>
                    Короткий опис
                  </Typography>
                  <Typography className={classes.inputLabelStat}>
                    0 \ 300
                  </Typography>
                </Stack>
                <TextField
                  //   variant="outlined"
                  id="outlined-multiline-static"
                  //   label="Multiline"
                  multiline
                  placeholder="Напишіть короткий опис"
                  fullWidth
                  inputProps={{
                    style: {
                      height: "100px",
                    },
                  }}
                  sx={{
                    textArea: {
                      paddingTop: "10px",
                      fontWeight: 500,
                      fontFamily: "GraphikLCG",
                      fontSize: 14, // Converted from "font-size: 14px"
                      lineHeight: 1, // Converted from "line-height: 100%"
                      letterSpacing: "-0.03em",
                      color: "#90a4be",
                      "&::placeholder": {
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>
            </Form>
          )}
        </Formik>
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
