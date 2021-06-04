import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      marginTop: "5%",
    },
    marginTop: "2%",
    display: "flex",
    justifyContent: "center",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100vw",
    [theme.breakpoints.up("xs")]: {
      width: `80vw`,
    },
    [theme.breakpoints.up("sm")]: {
      width: `70vw`,
      "&:focus": {
        width: "75vw",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: `65vw`,
      "&:focus": {
        width: "70vw",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: `60vw`,
      "&:focus": {
        width: "65vw",
      },
    },
    borderRadius: "30px",
    border: "solid 1px blue",
  },
}));

export default function SearchAppBar({ searchAnime }) {
  const classes = useStyles();

  const handleOnChage = (e) => {
    searchAnime(e.target.value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className="center">
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            autoFocus={true}
            fullWidth={true}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={handleOnChage}
          />
        </div>
      </div>
    </div>
  );
}
