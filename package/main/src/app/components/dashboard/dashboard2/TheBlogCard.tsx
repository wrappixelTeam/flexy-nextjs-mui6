import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar
} from "@mui/material";

import DashboardCard from "../../shared/DashboardCard";
import { IconDots } from "@tabler/icons-react";

const options = ["Action", "Another Action", "Something else here"];

const BlogCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <DashboardCard
      title="Daily Activities"
      action={
        <Box>
          <Tooltip title="Action">
            <IconButton
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              size="small"
              aria-label="action"
            >
              <IconDots width={20} />
            </IconButton>
          </Tooltip>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      }
    >
      <>
        <Avatar
          src="/images/backgrounds/blog-bg-2x.jpg"
          sx={{ width: "100%", height: 165, borderRadius: 0 }}
        />
        <Typography variant="h4" mt={3}>React 18 coming soon!</Typography>
        <Typography color="textSecondary" variant="subtitle1">
          By Johnathan Doe
        </Typography>
        <Typography variant="body2" mt={2} mb={3}>
          This will be the small description for the news you have.
          There could be some great info.
        </Typography>

        <Button variant="contained" color="primary">
          Read More
        </Button>
      </>
    </DashboardCard>
  );
};

export default BlogCard;
