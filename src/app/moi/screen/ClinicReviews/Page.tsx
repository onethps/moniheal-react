import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";

import { useTranslation } from "react-i18next";
import {
  Button,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  Stack,
  Typography,
} from "@mui/material";
import { CustomCard } from "../../components/layout/Card/Card";
import Review from "./components/Review/Review";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const CustomPaginationItem = (pageParams: PaginationRenderItemParams) => {
  const { page, ...otherProps } = pageParams;
  // Add leading zero for pages 1-9
  const formattedPage = page && page < 10 ? `0${page}` : page;
  const classes = useStyles();

  return (
    <PaginationItem
      classes={{
        root: classes.paginationItemRoot,
        previousNext: classes.paginationItemPreviousNext,
        page: classes.paginationItemPage,
        selected: classes.paginationItemSelected,
      }}
      {...otherProps}
      page={formattedPage}
    >
      {formattedPage}
    </PaginationItem>
  );
};

export default function Page() {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1); // Initial page

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

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
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            marginTop="30px"
          >
            <Stack flexDirection="row" alignItems="center" gap="20px">
              <Button variant="outlined" className={classes.showMoreButton}>
                Показати ще
              </Button>
              <Typography className={classes.smallText}>
                Ще 178 консультацій
              </Typography>
            </Stack>
            <Pagination
              size="large"
              count={100}
              siblingCount={2}
              page={page}
              onChange={handleChange}
              renderItem={CustomPaginationItem}
            />
          </Stack>
        </Stack>
      </CustomCard>
    </BaseScreen>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    paginationItemRoot: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.17,
      letterSpacing: "-0.03em",
      color: "#d2e3f8",
    },
    paginationItemPreviousNext: {
      border: "1px solid #d2e3f8",
      color: "#000",
    },
    paginationItemPage: {
      border: "1px solid #d2e3f8",
    },
    paginationItemSelected: {
      border: "1px solid #173236",
      backgroundColor: "transparent!important",
      color: "#000",
    },
    headerTitle: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: "#000",
    },
    showMoreButton: {
      height: "40px",
      border: "1px solid #173236",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.17,
      letterSpacing: "-0.03em",
      color: "#173236",
    },
    smallText: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1.17,
      letterSpacing: "-0.03em",
      color: "#a5bddb",
    },
  })
);
