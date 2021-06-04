import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { Block } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "96%",
    marginTop: 30,

    [theme.breakpoints.up("350")]: {
      width: `60vw`,
    },
    [theme.breakpoints.up("500")]: {
      width: `40vw`,
    },
    [theme.breakpoints.up("570")]: {
      width: `26vw`,
    },
    [theme.breakpoints.up("815")]: {
      width: `20vw`,
    },
    [theme.breakpoints.up("1120")]: {
      width: `17vw`,
    },
  },
  media: {
    height: 340,
    width: "100%",
  },
  p: {
    position: "absolute",
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: "2em",
  },
  div: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

export default function AnimeCards({ id, title, image }) {
  const [infoAnime, setInfoAnime] = useState([]);

  useEffect(() => {
    async function getAnime() {
      try {
        const res = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);
        setInfoAnime(res.data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
    getAnime();
  }, []);
  console.log("holaaa");

  const classes = useStyles();
  console.log(image);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={"anime/" + id} style={{ textDecoration: "none" }}>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          >
            <div className={classes.div}>
              <p className={classes.p}>{title}</p>
            </div>
          </CardMedia>
        </Link>
        <CardContent>
          <Typography gutterBottom variant="body2" component="h2">
            {infoAnime.score < 4.9
              ? "I do not recommend it."
              : infoAnime.score < 7.9
              ? "You may have fun."
              : "Great, this is one of the best anime."}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="inherit" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
