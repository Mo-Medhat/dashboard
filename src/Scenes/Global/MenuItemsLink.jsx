import React from "react";
import { useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function MenuItemsLink({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Link to={to}>
        <MenuItem
          active={selected === title}
          style={{ color: colors.grey[100] }}
          onClick={() => setSelected(title)}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </Link>
    </>
  );
}

export default MenuItemsLink;
