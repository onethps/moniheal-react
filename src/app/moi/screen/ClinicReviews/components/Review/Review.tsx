import { IconButton, Stack, Typography } from "@mui/material";
import ShareOutsideIcon from "../../../../assets/icons/ShareOutsideIcon";
import { useStyles } from "./ReviewStyles";
import Star from "../../../../assets/icons/Star";

export default function Review() {
  const classes = useStyles();
  return (
    <Stack className={classes.root}>
      <Stack
        flexDirection="row"
        marginBottom="22px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack flexDirection="row" alignItems="center" gap="70px">
          <Stack flexDirection="row">
            {[...new Array(5).fill("123")].map((e) => (
              <Star />
            ))}
          </Stack>
          <Typography className={classes.headerDate}>20 сер 2023</Typography>
        </Stack>
        <IconButton className={classes.iconButton}>
          <ShareOutsideIcon />
        </IconButton>
      </Stack>
      <Stack gap="10px">
        <Typography className={classes.mainText}>Новікова В. В.</Typography>
        <Typography className={classes.descText}>
          Я дуже вдячна психологу Семко Виталий Николаевичу за його допомогу та
          підтримку. Він був дуже терплячим, уважним та розуміючим. З його
          допомогою я змогла розібратися у своїх проблемах та з...
        </Typography>
      </Stack>
    </Stack>
  );
}
