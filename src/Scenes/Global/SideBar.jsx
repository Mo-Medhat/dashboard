import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import user from "../../assets/user.png"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import MenuItemsLink from './MenuItemsLink';



function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
        <Box sx={{
        "& .sidebar-inner": {background: `${colors.primary[400]} !important`},
        "& .lkTtqM:hover": {backgroundColor: "transparent !important", color: "#868dfb !important"},
        "& .cxRqFw": {padding: "5px 35px 5px 20px !important", backgroundColor: "transparent", color: "#868dfb !important"},
        "& .cxRqFw:hover": {color: "#6870fa !important"},
        "& .menu-item:active": {color: "#6870fa !important"},
        "& .bOQEtf, .djZVNf": {border: "0 !important"},
        "& .djZVNf, .bOQEtf": {height: "100% !important"},
      }} >
      <Sidebar collapsed={isCollapsed} >
          <Menu iconShape="square">
            {/* Logo AND Menu Icon */}
            <MenuItem 
            onClick={()=> setIsCollapsed(!isCollapsed)}
            icon={isCollapsed? <MenuOutlinedIcon/> : undefined}
            style={{margin: "10px 0 20px 0", color: colors.grey[100]}}
            >
              {!isCollapsed && (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>ADMINIS</Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                </>
              )}
            </MenuItem>

            
            {/* User */}
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center">
                  <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{cursor: "pointer", borderRadius: "50%"}}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Mohamed</Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>VP Fancy Admin</Typography>
                </Box>
              </Box>
            )}


              {/* Menu Items */}
            <Box paddingLeft={isCollapsed? undefined: "10%"}>
              <MenuItemsLink
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px"}}
              >
                Data
              </Typography>
              <MenuItemsLink
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px"}}
              >
                Pages
              </Typography>
              <MenuItemsLink 
                title="Person Form"
                to="/person"
                icon={<PersonOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="FAQ"
                to="/faq"
                icon={<HelpOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px"}}
              >
                Charts
              </Typography>
              <MenuItemsLink 
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
              <MenuItemsLink 
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon/>}
                selected= {selected}
                setSelected= {setSelected}
              />
            </Box>

            
          </Menu>
      </Sidebar>
        </Box>
    </>
  );
}

export default SideBar;
