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
import { Formik, FormikProps, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import { FmTextField } from "../../../MyFamily/components/FmTextField/FmTextField";
import { useStyles } from "./styles";
import ExpandIcon from "../../../ClinicEhealth/assets/icons/ExpandIcon";
import FormSelect from "../../../ClinicEhealth/components/FormSelect/FormSelect";
import AddIcon from "../../assets/icons/AddIcon";

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

export const initialValues = {
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
  specilization: "",
};

interface RegisterDoctorModalProps {
  isVisible: boolean;
  onCloseModalHandler: () => void;
}

export function RegisterDoctorModal(props: RegisterDoctorModalProps) {
  const { isVisible, onCloseModalHandler } = props;
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      open={isVisible}
      maxWidth="dialogXmd"
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
      <DialogTitle id="alert-dialog-title">Реєстрація лікаря</DialogTitle>
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
              <Stack flexDirection="column" gap="15px" alignItems="flex-start">
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
                <Stack flexDirection="row" gap="21px" alignItems="stretch">
                  <Box display="flex" flexDirection="column" gap={1} flex="1">
                    <InputLabel>{t("birthday.date")}</InputLabel>
                    <DatePicker
                      sx={{ "& .MuiInputBase-input": { height: "100px" } }}
                      className={classes.dateBirthPicker}
                      onChange={props.handleChange}
                    />
                  </Box>
                  <FormControl className={classes.formControlWrapper}>
                    <FormLabel id="controlled-radio-buttons-group">
                      {t("register.gender")}
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="controlled-radio-buttons-group"
                      name="sex"
                      value={props.values.sex}
                      onChange={props.handleChange}
                      className={classes.radioGroup}
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
                </Stack>
                <Stack gap={1} width="100%">
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

                <FormSelect
                  fullWidth
                  label="Спеціалізація"
                  name="specilization"
                  placeholder="Оберіть спеціалізацію лікаря"
                  options={[
                    {
                      value: "1",
                      label: "1",
                    },
                  ]}
                />

                <FmTextField
                  fullWidth
                  name="document"
                  placeholder={"Паспорт або ID Паспорт"}
                  label={"Документ, що підтверджує особу"}
                  endIcon={<AddIcon />}
                />
                <FmTextField
                  fullWidth
                  name="diplom"
                  placeholder={"Паспорт або ID Паспорт"}
                  label={"Диплом спеціаліста"}
                  endIcon={<AddIcon />}
                />
                <FmTextField
                  fullWidth
                  name="certificate"
                  placeholder={"Додати сертифікат"}
                  label={"Сертифікат спеціаліста"}
                  endIcon={<AddIcon />}
                />
              </Stack>

              <Stack marginTop="40px">
                <Button fullWidth color="success" variant="contained">
                  Зареєструвати лікаря
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
