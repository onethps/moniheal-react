import { CustomCard } from "../../../components/layout/Card/Card";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { FmSearchInput } from "../../../../../shared/components/FmSearchInput";
import SortSwitcher from "../../../../../shared/components/Switcher";
import ActiveCard from "../components/ActiveCard";
export const useCardStyles = makeStyles(() =>
  createStyles({
    mainWrapper: {
      padding: "14px 20px",
    },
    headerWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerCardText: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "-0.03em",
      margin: 0,
      color: "#000",
    },
    fab: {
      width: "40px",
      height: "40px",
      boxSizing: "border-box",
      border: "1px solid rgb(210, 225, 245)",
      borderRadius: "30px",
      background: "rgb(255, 255, 255)",
    },
  })
);

export default function Moderated() {
  const classes = useCardStyles();
  return (
    <CustomCard>
      <Stack className={classes.mainWrapper}>
        {/* header */}
        <Box className={classes.headerWrapper}>
          <Typography className={classes.headerCardText}>
            Модеруються послуги
          </Typography>
          <Stack flexDirection="row" gap="6px">
            <Stack flexDirection="row" alignItems="center" gap="10px">
              <FmSearchInput
                placeholder="Знайти ппослугу"
                inputStyles={{ width: "242px" }}
              />
              <IconButton className={classes.fab}>
                <Svg2 />
              </IconButton>
            </Stack>
            <SortSwitcher />
          </Stack>
        </Box>
        {/* main content */}
        <Stack flexDirection="row" flexWrap="wrap" gap="16px" mt="16px">
          {[...new Array(5).fill("123")].map((e) => (
            <ActiveCard />
          ))}
        </Stack>
      </Stack>
    </CustomCard>
  );
}

const Svg2 = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66658 10.8333V4.85416L4.52075 6.99999L3.33325 5.83332L7.49992 1.66666L11.6666 5.83332L10.4791 6.99999L8.33325 4.85416V10.8333H6.66658ZM12.4999 18.3333L8.33325 14.1667L9.52075 13L11.6666 15.1458V9.16666H13.3333V15.1458L15.4791 13L16.6666 14.1667L12.4999 18.3333Z"
        fill="#173236"
      />
    </svg>
  );
};
