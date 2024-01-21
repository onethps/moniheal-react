import React from 'react';
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
  useTheme,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FmTextField } from '../FmTextField/FmTextField';
import { useFormik } from 'formik';

export const initialValues = {
  lastname: '',
  name: '',
  surname: '',
  birth: '',
  sex: '',
  email: '',
  phoneNumber: '',
  password: '',
  repeatPassword: '',
  privacyPolicy: false,
};

interface NewChargeModalProps {
  isVisible: boolean;
  onCloseModalHandler: () => void;
}

export function NewChargeModal(props: NewChargeModalProps) {
  const { isVisible, onCloseModalHandler } = props;

  const theme = useTheme();

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Dialog
      fullWidth
      open={isVisible}
      onClose={onCloseModalHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        backdropFilter: 'blur(5px) sepia(5%)',
        '& .MuiDialog-paper': {
          borderRadius: '20px',
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">Реєстрація підопічного</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onCloseModalHandler}
        sx={{
          position: 'absolute',
          padding: '5px',
          border: '1px solid #1E1E1E',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" gap="20px" alignItems="flex-start">
            <Stack flexDirection="row" gap="20px">
              <FmTextField formik={formik} value={formik.values.lastname} label="LastName" />
              <FmTextField formik={formik} value={formik.values.name} label="Name" />
            </Stack>
            <DatePicker label="Controlled picker" value={formik.values.birth} onChange={formik.handleChange} />
            <FormControl fullWidth>
              <FormLabel id="controlled-radio-buttons-group">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="controlled-radio-buttons-group"
                name="sex"
                value={formik.values.sex}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            <Stack flexDirection="row" gap="20px">
              <FmTextField formik={formik} value={formik.values.email} label="Email" />
              <FmTextField formik={formik} value={formik.values.email} label="Mobile Phone" />
            </Stack>
            <Typography>Будь ласка, вкажіть емейл та номер свого підопічного, а не свій власний</Typography>
            <FmTextField formik={formik} value={formik.values.password} label="Придумайте пароль" />
            <FmTextField formik={formik} value={formik.values.password} label="Повторіть пароль" />

            <Stack flexDirection="row">
              <Checkbox defaultChecked />
              <Typography>
                Ознайомився та приймаю <Link component="button">Політики конфіденційності</Link> та
                <Link component="button">Правила сервісу</Link>
              </Typography>
            </Stack>

            <Stack flexDirection="row">
              <Button>Скасувати</Button>
              <Button variant="contained" type="submit">
                Sumbit
              </Button>
            </Stack>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}
