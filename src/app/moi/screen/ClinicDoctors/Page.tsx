import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";
import { useTranslation } from "react-i18next";

import { Box, Button, Stack, Typography, styled } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { CustomCard } from "../../components/layout/Card/Card";
import useModalHandler from "./hooks/useModalHandler";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { RegisterDoctorModal } from "./components/RegisterDoctorModal/RegisterDoctorModal";
import { DoctorCard } from "./components/DoctorCard/DoctorCard";
import { FmSearchInput } from "../../../../shared/components/FmSearchInput";
import { useStyles } from "./styles";

export const initialValues = {
  edrpou: "",
  code: "",
  ZOZ: "",
  email: "",
  web: "",
  oblast: "",
  region: "",
  city: "",
  street: "",
  documentType: "passport1",
};

export default function Page() {
  const { t } = useTranslation();

  const [isVisibleNewDoctor, toggleVisibleNewDoctor] = useModalHandler(false);
  const classes = useStyles();

  return (
    <BaseScreen>
      <PageHeader
        title={"Працівники закладу"}
        toolbar={
          <PageActionButton
            onClick={toggleVisibleNewDoctor}
            variant="contained"
            color="success"
            startIcon={<ControlPointOutlinedIcon />}
          >
            Додати лікаря
          </PageActionButton>
        }
      />
      <CustomCard>
        <Stack paddingTop="15px" paddingLeft="20px" paddingRight="20px">
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="15px"
          >
            <Typography className={classes.cardTitle}>
              Лікарі медзакладу
            </Typography>
            <Stack flexDirection="row" gap="10px" alignItems="center">
              <FmSearchInput placeholder="Шукати направлення" />
              <Box className={classes.headerIconFilterWrapper}>
                <FilterAltOutlinedIcon />
              </Box>
            </Stack>
          </Stack>

          <Stack
            flexDirection="row"
            rowGap="14px"
            columnGap="10px"
            flexWrap="wrap"
          >
            {[...new Array(6).fill("123")].map((el) => (
              <DoctorCard />
            ))}
          </Stack>
        </Stack>
      </CustomCard>
      <RegisterDoctorModal
        isVisible={isVisibleNewDoctor}
        onCloseModalHandler={toggleVisibleNewDoctor}
      />
    </BaseScreen>
  );
}

const PageActionButton = styled(Button)(() => ({
  fontWeight: "700",
  textTransform: "capitalize",
}));
