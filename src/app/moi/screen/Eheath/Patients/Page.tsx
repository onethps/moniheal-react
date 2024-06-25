import { useState } from "react";

import { useTranslation } from "react-i18next";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Button, styled } from "@mui/material";

import { PageHeader } from "../../../../../shared/components/layout/Header/PageHeader";
import { BaseScreen } from "../../../../../shared/components/layout/Screen/BaseScreen";
import { FormTabs } from "./components/FormTabs/FormTabs";

export default function Page() {
  const { t } = useTranslation();

  const [activeModal, setActiveModal] = useState(false);
  const onCloseModalHandler = () => setActiveModal(false);

  return (
    <BaseScreen>
      <PageHeader
        title={"Пацієнти"}
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
    </BaseScreen>
  );
}

const PageActionButton = styled(Button)(() => ({
  fontWeight: "700",
  textTransform: "capitalize",
}));
