import { Box, Typography } from "@mui/material";

export const PageHeader = (props) => {
  const { title, toolbar } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Typography variant="h6" fontWeight="600">
        {title}
      </Typography>
      {toolbar}
    </Box>
  );
};
