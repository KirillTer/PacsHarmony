import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// import loginSubmit from '../../forms/submit/loginSubmit'
import Login from '../auth/Login'
import SingUp from '../auth/SingUp'

const drawerWidth = 240;

const menuAdmin = [
  {
    name: "Users",
    link: "/users"
  },
  {
    name: "Groups",
    link: "/game"
  },
  {
    name: "Worklists",
    link: "/auth/login"
  },
  {
    name: "Folders",
    link: "/results"
  },
  {
    name: "Launcher Filters",
    link: "/auth/login"
  },
  {
    name: "Integration Actions",
    link: "/"
  },
  {
    name: "Configuration settings",
    link: "/auth/login"
  },
  {
    name: "Audit",
    link: "/"
  },
  {
    name: "Export / Import tools",
    link: "/auth/login"
  }
];

const menuOptimizer = [
  {
    name: "Interpreting Physicians",
    link: "/"
  },
  {
    name: "Exams",
    link: "/auth/login"
  },
  {
    name: "Locations",
    link: "/"
  },
  {
    name: "Filters",
    link: "/auth/login"
  },
  {
    name: "Exam Codes",
    link: "/"
  },
  {
    name: "Subspecialties",
    link: "/auth/login"
  },
  {
    name: "Insurance Codes",
    link: "/"
  },
  {
    name: "Modalities",
    link: "/auth/login"
  },
  {
    name: "Physicians",
    link: "/"
  },
  {
    name: "Priorities",
    link: "/auth/login"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawer, setdDawer] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [singupDialog, setSingupDialog] = useState(false);

  const handleDrawerOpen = () => {
    setdDawer(true);
  };

  const handleDrawerClose = () => {
    setdDawer(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to="/">Admin Portal + Harmony optimizer</Link>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setLoginDialog(true)}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSingupDialog(true)}
          >
            Singup
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuAdmin.map(item => (
            <Link to={item.link} key={item.name}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {menuOptimizer.map(item => (
            <Link to={item.link} key={item.name}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      {/* Login dialog */}
      <Login show={loginDialog} close={() => setLoginDialog(false)}/>
      {/* Singup dialog */}
      <SingUp show={singupDialog} close={() => setSingupDialog(false)}/>
      {/* Main screen */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default Navigation;
