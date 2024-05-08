import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@material-ui/core";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { FC, PropsWithChildren, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";

import CalendarIcon from "./icons/CalendarIcon";
import InfoIcon from "./icons/InfoIcon";
import MarkerIcon from "./icons/Marker";
import PencilIcon from "./icons/PencilIcon";

const imgLink =
  "https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg";

interface DoctorCardProps {}

export const DoctorCard: FC<PropsWithChildren<DoctorCardProps>> = (props) => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardWrapper}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Box className={classes.badgeContainer}>
            <Stack flexDirection="row" alignItems="flex-start">
              <Typography className={classes.badgeMainText}>4.5</Typography>
              <StarBorderIcon className={classes.badgeStarIcon} />
            </Stack>
            <Box className={classes.badgeLabelWrapper}>
              <Typography className={classes.badgeLabelText}>99+</Typography>
            </Box>
          </Box>
          <Avatar className={classes.avatar} src={imgLink} />
          <Button className={classes.circleButtonWrapper}>
            <PencilIcon />
          </Button>
        </Stack>

        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="70px"
        >
          <Typography className={classes.largeText}>
            Семко Виталий Николаевич
          </Typography>
          <Typography className={classes.smallText} color="#90A4BE">
            Педіатр, 12р. досвіду
          </Typography>
          <Typography
            className={classes.smallText}
            minHeight="50px"
            textAlign="center"
          >
            Обласна лікарня, каб. №567
          </Typography>
        </Stack>

        {/* bottom section */}
        <Box className={classes.bottomCardSection}>
          <Box paddingLeft="10px" paddingRight="5px" marginBottom="30px">
            {/* price  calendar info*/}
            <Stack
              marginBottom="20px"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography className={classes.mediumText} fontWeight={700}>
                  ₴0 - ₴1500
                </Typography>
                <Typography className={classes.smallText}>За сеанс</Typography>
              </Box>
              <Stack gap="4px" flexDirection="row">
                <Button className={classes.circleButtonWrapper}>
                  <CalendarIcon />
                </Button>
                <Button className={classes.circleButtonWrapper}>
                  <InfoIcon />
                </Button>
              </Stack>
            </Stack>
            {/* address */}
            <Stack flexDirection="row" alignItems="center" gap="10px">
              <Button className={classes.circleFillButtonWrapper}>
                <MarkerIcon />
              </Button>
              <Box>
                <Typography className={classes.smallBoldText}>
                  пр. Відродження 13, м. Луцьк
                </Typography>
                <Typography className={classes.smallText}>
                  2 місця прийому
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Button fullWidth variant="contained" color="primary">
            <Typography className={classes.buttonText}>Написати</Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const Avatar = styled("img")(() => ({
  position: "absolute",
  top: "20",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  width: "100px",
  height: "100px",
}));
