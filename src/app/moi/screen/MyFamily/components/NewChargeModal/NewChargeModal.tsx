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
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FmTextField } from "../FmTextField/FmTextField";
import { Formik, FormikProps, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

Yup.addMethod(Yup.object, "dayjs", function method(message) {
  return this.test("dayjs", message, function validate(value) {
    if (!value) {
      return true;
    }
    return dayjs.isDayjs(value);
  });
});

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

export function NewChargeModal(props: NewChargeModalProps) {
  const { isVisible, onCloseModalHandler } = props;
  const { t } = useTranslation();

  return (
    <Dialog
      fullWidth
      open={isVisible}
      onClose={onCloseModalHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        backdropFilter: "blur(5px) sepia(5%)",
        "& .MuiDialog-paper": {
          borderRadius: "20px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        {t("messages.chargeRegister")}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onCloseModalHandler}
        sx={{
          position: "absolute",
          padding: "5px",
          border: "1px solid #1E1E1E",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
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
              <Box
                display="flex"
                flexDirection="column"
                gap="15px"
                alignItems="flex-start"
              >
                <Stack flexDirection="row" gap="20px" width="100%">
                  <FmTextField
                    name="lastname"
                    placeholder={t("lastName")}
                    label={t("lastName")}
                  />
                  <FmTextField
                    name="name"
                    label={t("name")}
                    placeholder={t("name")}
                  />
                </Stack>
                <FmTextField
                  fullWidth
                  name="name"
                  placeholder={t("eHealth.secondName")}
                  label={t("eHealth.secondName")}
                />
                <Box display="flex" flexDirection="column" gap={1}>
                  <InputLabel>{t("birthday.date")}</InputLabel>
                  <DatePicker
                    value={props.values.birth}
                    onChange={props.handleChange}
                  />
                </Box>
                <FormControl fullWidth>
                  <FormLabel id="controlled-radio-buttons-group">
                    {t("register.gender")}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="controlled-radio-buttons-group"
                    name="sex"
                    value={props.values.sex}
                    onChange={props.handleChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label={t("sex.male")}
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label={t("sex.female")}
                    />
                  </RadioGroup>
                </FormControl>
                <Stack gap={1} width="100%">
                  <Stack flexDirection="row" gap="20px" width="100%">
                    <FmTextField
                      name="email"
                      label={t("register.email")}
                      placeholder="younamemail@gmail.com"
                    />
                    <FmTextField
                      name="phoneNumber"
                      label={t("eHealth.MOBILE")}
                      placeholder="+38 (099) 9876 54 32"
                    />
                  </Stack>
                  <Typography fontSize="12px" color="secondary.dark">
                    {t("cabinet.charge.emailLabel")}
                  </Typography>
                </Stack>
                <Stack gap={1} width="100%">
                  <FmTextField
                    fullWidth
                    name="password"
                    label={t("cabinet.charge.createNewPassword")}
                    placeholder={t("cabinet.charge.createNewPassword")}
                  />
                  <Typography fontSize="12px" color="secondary.dark">
                    {t("placeholderNewPassword")}
                  </Typography>
                </Stack>
                <FmTextField
                  fullWidth
                  name="repeatPassword"
                  placeholder={t("cabinet.profile.repeatPassword")}
                  label={t("cabinet.profile.repeatPassword")}
                />

                <Stack flexDirection="row">
                  <Checkbox defaultChecked />

                  <Typography>
                    {t("cabinet.acceptPolicy")}{" "}
                    <Link
                      color="success.dark"
                      underline="none"
                      component="button"
                    >
                      {t("cabinet.privacyPolicy")}
                    </Link>{" "}
                    {t("cabinet.and")}
                    <Link
                      color="success.dark"
                      underline="none"
                      component="button"
                    >
                      {t("cabinet.serviceRules")}
                    </Link>
                  </Typography>
                </Stack>

                <Stack
                  width="100%"
                  flexDirection="row"
                  gap={2}
                  justifyContent="flex-end"
                >
                  <Button onClick={onCloseModalHandler} size="large">
                    {t("cabinet.charge.cancel")}
                  </Button>
                  <Button size="large" variant="contained" type="submit">
                    {t("registerSomething")}
                  </Button>
                </Stack>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
