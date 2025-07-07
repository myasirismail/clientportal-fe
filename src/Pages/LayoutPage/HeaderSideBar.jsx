import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Avatar,
  Typography,
  Popover,
  Divider,
  SvgIcon
} from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//src
import { setUserProfile } from "../../store/reducers/user";
import arrow from "../../assets/arrow.png";
import Logo from "../../assets/full_logo_white.svg";
import { pinnedWorkSpace, Sidebar } from "./sidebar";
import theme from "./theme";
import "./layout.scss";
import { RedirectToSSO } from "../../utils";
import CustomBackDrop from "../../components/CustomBackDrop";
import dashboard from "../../assets/sidebar/dashboard.svg";
import dashboardSelected from "../../assets/sidebar/dashboard_white.svg";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PushPinIcon from '@mui/icons-material/PushPin';

export default function ResponsiveDrawer({ window, children }) {
  const [drawerWidth, setdrawerWidth] = useState(96);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(useSelector((state) => state.user));
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      let userData = JSON.parse(localStorage.getItem("userInfo") || "{}");
      dispatch(setUserProfile({ payload: userData }));
      setUser(userData);
    }
  }, [user]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [loader, setLoader] = useState(false);
  const divRef = useRef();
  function handleClick() {
    setAnchorEl(divRef.current);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { pathname } = useLocation();

  const path = pathname.split("/")[1];

  const drawer = (
    <div style={{ overflowX: "hidden" }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "start", height: "20px" , mb:"0px", mt:"15px"}}
      >
        <img src={Logo} width={drawerWidth > 100 ? 130 : 55} style={{ transition: "width 0.6s ease-in-out" }} />

      </Toolbar>
      <List
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: drawerWidth > 100 ? "20px" : "20px",
        }}
      >
        {Sidebar.map((item) => (
          <ListItem
            key={item?.name}
            disablePadding
            onClick={() => navigate(item?.path)}
          >
            <ListItemButton sx={{ maxHeight: "31px" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Tooltip title={item?.name} placement="right">
                  <img
                    src={
                      pathname.includes(item?.base)
                        ? item.selectedIcon
                        : item.icon
                    }
                    width={20}
                  />
                </Tooltip>
              </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: `${drawerWidth > 96 ? 1 : 0}`,
                    transition: 'opacity  0.6s ease-in-out'     
                  }}
                  disableTypography
                  primary={
                    <Typography
                      variant="drawerItems"
                      fontSize="13px"
                      color={
                        pathname.includes(item?.base) ? "white" : "#ffffffad"
                      }
                      fontWeight={pathname.includes(item?.base) ? 700 : 500}
                    >
                      {item?.name}
                    </Typography>
                  }
                />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {drawerWidth > 96 && <Divider color="#ac7adb" orientation="horizontal" flexItem />} 
      <List  sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: drawerWidth > 100 ? "20px" : "20px",
        }}>
      <ListItem
            disablePadding
            onClick={() => navigate("/create-workspace")}
          >
            <ListItemButton sx={{ maxHeight: "31px" }}>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Tooltip title={"Create Workspace"} placement="right">
                  <img
                    src={
                      pathname.includes("create-workspace")
                        ? dashboardSelected
                        : dashboard
                    }
                    width={20}
                  />
                </Tooltip>
              </ListItemIcon>
                <ListItemText
                  sx={{
                    opacity: `${drawerWidth > 96 ? 1 : 0}`,
                    transition: 'opacity  0.6s ease-in-out'     
                  }}
                  disableTypography
                  primary={
                    <Typography
                      variant="drawerItems"
                      fontSize="13px"
                      color={
                      "white"
                      }
                      fontWeight={5}
                    >
                      Create Workspace
                    </Typography>
                  }
                />
                {drawerWidth > 96 && <Typography variant="drawerItems" fontSize="20px" color={"white"} padding={"0px 10px"}>+</Typography>}
                  {drawerWidth > 96 && <SvgIcon component={FilterAltIcon} />}
            </ListItemButton>
          </ListItem>
      </List>
      {drawerWidth > 96 && <List className="custom-scrollbar"  sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: drawerWidth > 100 ? "8px" : "20px",
          maxHeight: "300px",
          overflowY: "auto",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }

        }}>
     {drawerWidth > 96&& pinnedWorkSpace.map((item) => (
      <ListItem
            disablePadding
            onClick={() => navigate("/create-workspace")}
          >
            <ListItemButton sx={{ maxHeight: "31px" }}>
                <ListItemText
                  sx={{
                    opacity: `${drawerWidth > 96 ? 1 : 0}`,
                    transition: 'opacity  0.6s ease-in-out'     
                  }}
                  disableTypography
                  primary={
                    <Typography
                      variant="drawerItems"
                      fontSize="13px"
                      color={
                      "white"
                      }
                      fontWeight={5}
                    >
                      {item?.name}
                    </Typography>
                  }
                />
                  {drawerWidth > 96 && item?.isPin && <SvgIcon component={PushPinIcon} fontSize="small"/>}
            </ListItemButton>
          </ListItem>
      ))}
      </List>
}

    </div>
  );

  const ProfileDiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  });

  const ProfileContainerDiv = styled("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "12px",
    cursor: "pointer",
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const width =
    pathname !== "/termandconditions"
     "100%";
  const profileImage = useSelector((state) => state.user.profileImagePath);
  return (
    <Box sx={{ display: "flex" }} className="layout-main">
      <CssBaseline />
      <CustomBackDrop open={loader} />
      <AppBar
        position="fixed"
        sx={{
          width:{  md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          background: "white",
          boxShadow: 0.5,
          transition: "0.6s ease-in-out"
        }}
        color={"default"}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Typography
              variant="dashboardItem"
              noWrap
              component="div"
              color={"black"}
              pl={2}
              sx={{ flexGrow: 1 }}
              textTransform={"capitalize"}
            >
              {path.replaceAll("-", " ")}
            </Typography>
          </Box>

          <ProfileContainerDiv ref={divRef} onClick={handleClick}>
            {profileImage ? (
              <div className="uploaded-image-topBar">
                <img
                  src={`https://devapi-sso.lyca.sa/wwwroot${profileImage}`}
                  width={"80px"}
                  alt={"uploaded-img"}
                />
              </div>
            ) : (
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}></Avatar>
            )}

            {/* navigate("/profile") */}
            <ProfileDiv>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                fontSize={"14px"}
                color={"#11142D"}
              >
                {user.fullName}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                fontSize={"13px"}
                color={"#808191"}
              >
                {user.role}
              </Typography>
            </ProfileDiv>

            <ProfileDiv>
              <img src={arrow} alt="arrow" />
            </ProfileDiv>
          </ProfileContainerDiv>
          <Popover
            id={id}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            sx={{
              width: "16%",
              left: "unset",
              top: "47px",
            }}
          >
            <ListItem
              onClick={() => {
                setAnchorEl(null);
                navigate("/profile");
              }}
            >
              <ListItemButton sx={{ display: "flex", gap: "10px", px: 0 }}>
                <AccountCircleIcon color="action" />
                <ListItemText
                  primary={
                    <Typography variant="drawerItems" color={"black"}>
                      Profile
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              onClick={() => {
                setAnchorEl(null);
                setLoader(true);
                setTimeout(() => {
                  RedirectToSSO();
                }, 1000);
              }}
            >
              <ListItemButton sx={{ display: "flex", gap: "10px", px: 0 }}>
                <LogoutIcon color="action" />
                <ListItemText
                  primary={
                    <Typography variant="drawerItems" color={"black"}>
                      Logout
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Popover>
        </Toolbar>
      </AppBar>

      {pathname !== "/termandconditions" && (
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }, transition: "0.6s ease-in-out"}}
          aria-label="mailbox folders"
          onMouseEnter={() => setdrawerWidth(250)} onMouseLeave={() => setdrawerWidth(96)}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                transition: "0.6s ease-in-out",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px"
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      )}

      <Box
        component="main"
        sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar variant="dense" />
        {children}
      </Box>
    </Box>
  );
}
