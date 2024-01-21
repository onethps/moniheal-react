import { Box, styled } from "@mui/material";

export const BaseScreen = ({ children }) => {
  return (
    <RootContainer>
      <ContentContainer>
        <ContentWrapper>
          <Sidebar />
          <Main>{children}</Main>
        </ContentWrapper>
      </ContentContainer>
    </RootContainer>
  );
};

const RootContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100vw",
  minHeight: "100vw",
  height: "100%",
  backgroundColor: "#E9EEEA",
}));
const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1440,
  margin: "0 auto",
  padding: "0 15px",
  width: "100%",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "330px 3fr",
  gap: "30px",
  marginTop: 50,
  flexDirection: "row",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 1050,
  width: "100%",
}));

const Sidebar = styled(Box)(({ theme }) => ({
  backgroundColor: "red",
  width: 330,
  flexShrink: 0,
  height: "532px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
