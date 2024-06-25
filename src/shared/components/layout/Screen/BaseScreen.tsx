import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
} from "@mui/material";
import { FC, PropsWithChildren, useState } from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    to: "/services",
    name: "Services",
  },
  {
    to: "/ehealth",
    name: "ehealth",
  },
  {
    to: "/reviews",
    name: "Reviews",
  },
  {
    to: "/eheath",
    name: "Ehealth",
    nestedMenu: [
      {
        to: "/ehealth/patients",
        name: "Patients",
      },
    ],
  },
];

export const BaseScreen: FC<PropsWithChildren<{ a?: boolean }>> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <RootContainer>
      <ContentContainer>
        <ContentWrapper>
          <Sidebar>
            <Stack>
              {routes.map((r) => {
                if (r.nestedMenu) {
                  return (
                    <>
                      <ListItem button onClick={() => setOpen((prev) => !prev)}>
                        <ListItemText primary={r.name} />
                        {/* {open ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
                      </ListItem>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {r.nestedMenu.map((r) => (
                            <NavLink
                              to={r.to}
                              className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                              }
                            >
                              {r.name}
                            </NavLink>
                          ))}
                        </List>
                      </Collapse>
                    </>
                  );
                }

                return (
                  <NavLink
                    to={r.to}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {r.name}
                  </NavLink>
                );
              })}
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
