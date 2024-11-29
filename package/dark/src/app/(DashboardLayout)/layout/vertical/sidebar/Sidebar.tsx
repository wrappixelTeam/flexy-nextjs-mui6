import { useMediaQuery, Box, Drawer, useTheme } from "@mui/material";
import SidebarItems from "./SidebarItems";
import Logo from "../../shared/logo/Logo";
import { useSelector, useDispatch } from "@/store/hooks";
import {
  hoverSidebar,
  toggleMobileSidebar,
} from "@/store/customizer/CustomizerSlice";
import Scrollbar from "@/app/components/custom-scroll/Scrollbar";

import { AppState } from "@/store/store";

const Sidebar = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const toggleWidth =
    customizer.isCollapse && !customizer.isSidebarHover
      ? customizer.MiniSidebarWidth
      : customizer.SidebarWidth;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
  };

  return (
    <>
      {!lgUp ? (
      <Box
      sx={{
        zIndex: 100,
        width: toggleWidth,
        flexShrink: 0,
        ...(customizer.isCollapse && {
          position: "absolute",
        }),
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar for desktop */}
      {/* ------------------------------------------- */}
      <Drawer
        anchor="left"
        open
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        variant="permanent"
        PaperProps={{
          sx: {
            transition: theme.transitions.create("width", {
              duration: theme.transitions.duration.shortest,
            }),
            width: toggleWidth,
            boxSizing: "border-box",
            border: "0",
            boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
            
          },
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar Box */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            height: "100%",
          }}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box
            px={2}
            sx={{
              ...(customizer.isCollapse && {
                [theme.breakpoints.up("lg")]: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
              }),
              ...(customizer!.isSidebarHover && {
                [theme.breakpoints.up("lg")]: {
                  justifyContent: "start",
                },
              }),
            }}
          >
            <Logo />
          </Box>
          <Scrollbar sx={{ height: "calc(100% - 90px)" }}>
            {/* ------------------------------------------- */}
            {/* Sidebar Items */}
            {/* ------------------------------------------- */}
            <SidebarItems />
          </Scrollbar>
          
        </Box>
      </Drawer>
    </Box>
      ) : (
        <Drawer
        anchor="left"
        open={customizer.isMobileSidebar}
        onClose={() => dispatch(toggleMobileSidebar())}
        variant="temporary"
        PaperProps={{
          sx: {
            width: customizer.SidebarWidth,
            border: "0 !important",
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        {/* ------------------------------------------- */}
        {/* Logo */}
        {/* ------------------------------------------- */}
        <Box px={2}>
          <Logo />
        </Box>
        {/* ------------------------------------------- */}
        {/* Sidebar For Mobile */}
        {/* ------------------------------------------- */}
        <SidebarItems />
      </Drawer>
      )}
    </>
  );
};

export default Sidebar;
