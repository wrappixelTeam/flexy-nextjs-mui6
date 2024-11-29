import React from 'react';
import Link from 'next/link';

// mui imports
import { ListItemIcon, ListItemButton, List, styled, ListItemText, useTheme } from '@mui/material';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';


type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: NavGroup[];
  chip?: string;
  chipColor?: any;
  variant?: string | any;
  external?: boolean;
  level?: number;
};

interface ItemType {
  item: NavGroup;
  onClick: React.MouseEventHandler<HTMLElement>;
  hideMenu: any;
  level?: number | any;
  pathDirect: string;
}

const NavItem = ({ item, level, pathDirect, onClick }: ItemType) => {
  const customizer = useSelector((state: AppState) => state.customizer);
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon =
    level > 1 ? <Icon stroke={1.5} size="1rem" /> : <Icon stroke={1.5} size="1.1rem" />;


  const ListItemStyled2 = styled(ListItemButton)(() => ({
    padding: "5px 10px",
    gap: "10px",
    borderRadius: `${customizer.borderRadius}px`,
    marginBottom: level > 1 ? "3px" : "0px",
    color:
      level > 1 && pathDirect === item.href
        ? `${theme.palette.primary.main}!important`
        : theme.palette.text.secondary,

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&.Mui-selected": {
      color:
        level > 1
          ? `${theme.palette.text.secondary} !important`
          : `${item.bgcolor}` + ".main",
      "& .MuiTypography-root": {
        fontWeight: level > 1 ? "600 !important" : 400,
      },
      backgroundColor: level > 1 ? "transparent" : item.bgcolor + ".light",

      "&:hover": {
        backgroundColor: level > 1 ? "" : theme.palette.primary.main,
        color: "white",
      },
    },
  }));

  const listItemProps: {
    component: any;
    href?: string;
    target?: any;
    to?: any;
  } = {
    component: item?.external ? 'a' : Link,
    to: item?.href,
    href: item?.external ? item?.href : '',
    target: item?.external ? '_blank' : '',
  };

  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled2
        {...listItemProps}
        disabled={item.disabled}
        selected={pathDirect === item.href}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',
            p: '3px 0',
            color: 'inherit',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText>{item.title}</ListItemText>
      </ListItemStyled2>
    </List>
  );
};


export default NavItem;
