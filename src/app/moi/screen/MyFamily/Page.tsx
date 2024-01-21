import  { useState } from "react";
import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";
import { FormTabs } from "./components/FormTabs/FormTabs";
import { NewChargeModal } from "./components/NewChargeModal/NewChargeModal";
import { useTranslation } from "react-i18next";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Button, styled } from "@mui/material";

export function Page() {
  const { t } = useTranslation();

  const [activeModal, setActiveModal] = useState(false);
  const onCloseModalHandler = () => setActiveModal(false);

  return (
    <BaseScreen>
      <PageHeader
        title={t("menu.profile.myFamily")}
        toolbar={
          <PageActionButton
            onClick={() => setActiveModal(true)}
            variant="contained"
            color="success"
            startIcon={<ControlPointOutlinedIcon />}
          >
            {t("charges.charge")}
          </PageActionButton>
        }
      />
      <FormTabs />
      <NewChargeModal
        isVisible={activeModal}
        onCloseModalHandler={onCloseModalHandler}
      />
    </BaseScreen>
  );
}

const PageActionButton = styled(Button)(() => ({
  fontWeight: "700",
  textTransform: "capitalize",
}));
