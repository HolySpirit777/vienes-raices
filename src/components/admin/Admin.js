import React from "react";
import TopBar from "../menu/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LandscapeIcon from "@mui/icons-material/Landscape";

import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import Create from "./create/Create";
import Edit from "./editar/Edit";
import Stats from "./estadisticas/Stats";
import Properties from "../Properties/Properties";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 240;

function Admin(props) {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Panel
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />

          <List>
            <Link to="/create">
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Crear" />
              </ListItem>
            </Link>

            <Link to="/edit">
              <ListItem button>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Editar" />
              </ListItem>
            </Link>

            <Link to="/properties">
              <ListItem button>
                <ListItemIcon>
                  <LandscapeIcon />
                </ListItemIcon>
                <ListItemText primary="Properties" />
              </ListItem>
            </Link>

            <Link to="/stats">
              <ListItem button>
                <ListItemIcon>
                  <QueryStatsIcon />
                </ListItemIcon>
                <ListItemText primary="Estadistica" />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/edit">
              <Edit />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/properties">
              <Properties />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default Admin;
