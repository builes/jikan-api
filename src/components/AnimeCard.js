import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down("959")]: {
      margin: `20px`,
    },
  },
}));

export default function AnimeCard() {
  const classes = useStyles();

  const { id } = useParams();

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
  return (
    <Grid container justify="space-around">
      <Grid item xs={6} md={4}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="100%"
          image={infoAnime.image_url}
        />
      </Grid>
      <Grid item xs={12} md={7} className={classes.text}>
        <Typography variant={"h4"}>{infoAnime.title}</Typography>
        <Divider style={{ marginTop: "7px", marginBottom: "7px" }} />
        <Typography align="justify" variant={"body2"}>
          <b>Sypnosis:</b>
          {infoAnime.synopsis}
        </Typography>
        <Divider style={{ marginTop: "7px", marginBottom: "7px" }} />
        <Typography align="justify" variant={"body2"}>
          <b>Episodes:</b> {infoAnime.episodes}
        </Typography>
        <Divider style={{ marginTop: "7px", marginBottom: "7px" }} />
        <Typography align="justify" variant={"body2"}>
          <b>Rating:</b> {infoAnime.rating}
        </Typography>
        <Divider style={{ marginTop: "7px", marginBottom: "7px" }} />
        <Typography align="justify" variant={"body2"}>
          <b>Score:</b> {infoAnime.score}
        </Typography>
        <Divider style={{ marginTop: "7px", marginBottom: "7px" }} />
        {infoAnime.trailer_url != null && (
          <a href={infoAnime.trailer_url} target="_blank">
            <Button color="primary" size="large" variant="contained">
              Trailer
            </Button>
          </a>
        )}
      </Grid>
    </Grid>
  );
}
