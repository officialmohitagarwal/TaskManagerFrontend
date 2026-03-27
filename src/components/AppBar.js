import { AppBar, Toolbar, Typography } from "@mui/material";

const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;