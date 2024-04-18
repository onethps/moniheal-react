import { useState } from "react";
import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";

import { useTranslation } from "react-i18next";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Button, styled } from "@mui/material";
import { FormTabs } from "./components/FormTabs/FormTabs";
import { NewServiceModal } from "./components/NewServiceModal/NewServiceModal";
import { ActiveServiceModal } from "./components/ActiveServiceModal/ActiveServiceModal";

export default function Page() {
  const { t } = useTranslation();

  const [activeModal, setActiveModal] = useState(false);

  const onCloseModalHandler = () => setActiveModal(false);

  return (
    <BaseScreen>
      <PageHeader
        title={"Наші послуги"}
        toolbar={
          <PageActionButton
            onClick={() => setActiveModal(true)}
            variant="contained"
            color="success"
            startIcon={<ControlPointOutlinedIcon />}
          >
            Нова послуга
          </PageActionButton>
        }
      />
      <FormTabs />
      <NewServiceModal
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
