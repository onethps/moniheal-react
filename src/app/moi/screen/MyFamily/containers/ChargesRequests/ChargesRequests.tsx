import {
  Box,
  Button,
  CardActions,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { CustomCard } from "../../../../components/layout/Card/Card";
import { useTranslation } from "react-i18next";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { ChargeCard } from "../../components/ChargeCard/ChargeCard";
import { MyFamilyApi } from "../../Api/MyFamilyApi";

export const ChargesRequests = () => {
  const { t } = useTranslation();

  const [charges, setCharges] = useState([]);
  console.log(charges);
  useEffect(() => {
    const fetchWardsRequests = async () => {
      const { data } = await MyFamilyApi.getRequests({ offset: 1, limit: 10 });
      console.log({ data });
      setCharges(data);
    };
    fetchWardsRequests();
  }, []);

  return (
    <CustomCard
      title={t("charges.myChargesRequest")}
      actions={
        <Stack flexDirection="row" gap="10px" alignItems="center">
          <FabButton>
            <SearchIcon htmlColor="#173236" fontSize="small" />
          </FabButton>
          <FilterButton>
            <FilterAltOutlinedIcon htmlColor="#173236" />
            <Typography color="#173236">Фільтр</Typography>
          </FilterButton>
        </Stack>
      }
    >
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={1}>
          {[...new Array(5).fill("123")].map((el) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ChargeCard>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      color: "#000000",
                    }}
                  >
                    Скасувати
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#173236",
                      color: "white",
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Прийняти
                  </Button>
                </CardActions>
              </ChargeCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </CustomCard>
  );
};

const FabButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  border: "1px solid #D2E1F5",
  borderRadius: "50px",
  minWidth: "40px",
}));

const FilterButton = styled(Button)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  border: "1px solid #D2E1F5",
}));
