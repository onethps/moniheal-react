import { Box, Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const BaseScreen = ({ children }) => {
  return (
    <RootContainer>
      <ContentContainer>
        <ContentWrapper>
          <Sidebar>
            <Stack>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Reviews
              </NavLink>
            </Stack>
          </Sidebar>
          <Main>{children}</Main>
        </ContentWrapper>
      </ContentContainer>
    </RootContainer>
  );
};

const RootContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100vw",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "#E9EEEA",
}));
const ContentContainer = styled(Box)(({ theme }) => ({
  margin: "0 auto",
  paddingRight: "32px",
  width: "100%",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "240px 3fr",
  gap: "32px",
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
  width: "100%",
}));

const Sidebar = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  flexShrink: 0,
  height: "532px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
