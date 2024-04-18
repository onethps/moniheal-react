import { useState } from "react";
import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";

import { useTranslation } from "react-i18next";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import { Button, Stack, Typography, styled } from "@mui/material";
import { CustomCard } from "../../components/layout/Card/Card";
import Review from "./components/Review/Review";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    headerTitle: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
  })
);

export default function Page() {
  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <BaseScreen>
      <PageHeader title={"Відгуки"} />
      <CustomCard>
        <Stack padding="20px">
          <Typography className={classes.headerTitle}>
            Відгуки медзакладу
          </Typography>
          <Stack marginTop="15px" gap="10px">
            <Review />
            <Review />
          </Stack>
        </Stack>
      </CustomCard>
    </BaseScreen>
  );
}

const PageActionButton = styled(Button)(() => ({
  fontWeight: "700",
  textTransform: "capitalize",
}));
