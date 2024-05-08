import { styled } from "@mui/material/styles";
import MuiInputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import MuiFormGroup from "@mui/material/FormGroup";
import { useField } from "formik";

const BootstrapInput = styled(InputBase)<{ isNotEmptyValue: boolean }>(
  ({ theme, isNotEmptyValue }) => ({
    "& .MuiInputBase-input": {
      padding: "16px 15px",
      borderRadius: "10px",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: !isNotEmptyValue ? "#90A4BE" : "#000",
      minHeight: "inherit",
      border: "1px solid #ced4da",
    },
  })
);

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1,
  letterSpacing: "-0.03em",

  color: "#000",
  marginBottom: 10,
}));

const FormGroup = styled(MuiFormGroup)<{ fullWidth: boolean | undefined }>(
  ({ fullWidth, theme }) => ({
    width: fullWidth ? "100%" : "inherit",
  })
);

interface FormSelectProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  placeholder: string;
  fullWidth?: boolean;
}

export default function FormSelect(props: FormSelectProps) {
  const { name, label, placeholder, fullWidth, options, ...restProps } = props;

  const [field, meta, helpers] = useField(name);

  return (
    <FormGroup fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        error={meta.touched && Boolean(meta.error)}
        displayEmpty
        renderValue={(value: string): React.ReactNode => {
          const index = options.findIndex((o) => o.value === value);
          return (value !== "" ? options[index].label : placeholder) as string;
        }}
        input={<BootstrapInput isNotEmptyValue={Boolean(field.value)} />}
        {...field}
        {...restProps}
      >
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormGroup>
  );
}
