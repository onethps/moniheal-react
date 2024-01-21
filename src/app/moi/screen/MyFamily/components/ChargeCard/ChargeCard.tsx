import {
  Box,
  Button,
  Card,
  CardContent,
  Popper,
  Stack,
  Theme,
  Typography,
  createStyles,
  styled,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fade } from "@material-ui/core/styles/colorManipulator";

const imgLink =
  "https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg";

export function ChargeCard({ children }: PropsWithChildren<{}>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const [arrowRef, setArrowRef] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
          <FabButton aria-describedby={id} onClick={handleClick}>
            <MoreVertIcon fontSize="small" htmlColor="#173236" />
          </FabButton>
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
      <Popper
        sx={{
          paper: {
            overflowX: "unset",
            overflowY: "unset",
            "&::before": {
              content: '""',
              position: "absolute",
              marginRight: "-0.71em",
              bottom: 0,
              right: 0,
              width: 10,
              height: 10,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              transform: "translate(-50%, 50%) rotate(135deg)",
              clipPath:
                "polygon(-5px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + 5px))",
            },
          },
        }}
        open={open}
        placement="bottom"
        disablePortal={false}
        modifiers={[
          {
            name: "flip",
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
          {
            name: "arrow",
            enabled: true,
            options: {
              element: arrowRef,
            },
          },
        ]}
      >
        {" "}
      </Popper>
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)(() => ({
  border: "solid 1px",
  borderColor: fade("#D2E3F8", 0.5),
  flexGrow: 1,
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

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      overflowX: "unset",
      overflowY: "unset",
      "&::before": {
        content: '""',
        position: "absolute",
        marginRight: "-0.71em",
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        transform: "translate(-50%, 50%) rotate(135deg)",
        clipPath:
          "polygon(-5px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + 5px))",
      },
    },
  });
