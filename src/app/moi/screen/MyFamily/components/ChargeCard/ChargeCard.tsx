import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItemButton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { FmToolTip } from "../FmToolTip/FmTooltip";

const imgLink =
  "https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg";

export function ChargeCard({ children }: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <CardWrapper>
      <CardContent
        sx={{
          position: "relative",
          marginBottom: "20px",
        }}
      >
        {/* header buttons */}
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <LabelWrapper>
            <Typography
              fontSize="16px"
              fontWeight="normal"
              lineHeight="16px"
              color="#173236"
            >
              52p.
            </Typography>
          </LabelWrapper>
          <FmToolTip
            content={
              <List disablePadding>
                <CustomListItem>Поділитися</CustomListItem>
                <CustomListItem>Перейменувати</CustomListItem>
                <CustomListItem
                  sx={{
                    color: theme.palette.secondary.main,
                  }}
                >
                  Видалити
                </CustomListItem>
              </List>
            }
            open={open}
            placement="bottom"
            onClose={() => setOpen(false)}
          >
            <FabButton onClick={() => setOpen(true)}>
              <MoreVertIcon fontSize="small" htmlColor="#173236" />
            </FabButton>
          </FmToolTip>
        </Stack>

        <Avatar src={imgLink} />

        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="70px"
        >
          <Typography fontWeight="500" fontSize="18px">
            Тепла Олена Николайвна
          </Typography>
          <Typography fontSize="14px" fontWeight="500" color="#16395B">
            Жін., 22.02.1978
          </Typography>
          <Typography fontSize="14px">м. Луцьк, вул.Ентузіастів 4</Typography>
        </Stack>
      </CardContent>
      {children}
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)(() => ({
  border: "solid 1px",
  borderColor: fade("#D2E3F8", 0.5),
  flexGrow: 1,
}));

const CustomListItem = styled(ListItemButton)(() => ({
  fontSize: 12,
  fontWeight: "700",
}));

const Avatar = styled("img")(() => ({
  position: "absolute",
  top: "20",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
}));

const LabelWrapper = styled(Box)(() => ({
  display: "flex",
  backgroundColor: "#E5EEFF",
  borderRadius: "50%",
  padding: "18px 8px",
  width: "50px",
  height: "50px",
  justifyContent: "center",
  alignItems: "center",
}));

const FabButton = styled(Button)(() => ({
  width: "50px",
  height: "50px",
  border: "1px solid #D2E1F5",
  borderRadius: "50px",
  minWidth: "40px",
}));
