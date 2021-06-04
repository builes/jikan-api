import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import AnimeCards from "./AnimeCards";
//import Cards from "./Cards";
import SearchAppBar from "./SearchAppBar";
const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 380, itemsToShow: 2 },
  { width: 450, itemsToShow: 3 },
  { width: 700, itemsToShow: 4 },
  { width: 1000, itemsToShow: 5 },
];

export default function GetAnimes() {
  //constante para hacer la peticion de los animes que aparecen inicialmente
  const baseUrl = "https://api.jikan.moe/v3";
  const initialApi = "/anime/1/recommendations";

  const [search, setSearch] = useState("");
  const [animes, setAnimes] = useState([]);

  //constantes para realizar la busqueda de la api
  const urlSearch = baseUrl + `/search/anime?q=${search}&limit=10`;

  //constantes para hacer la peticion de las pelicular por la barra de busqueda
  let urlInitial = baseUrl + initialApi;

  const searchAnime = (text) => {
    setSearch(text);
    console.log(urlSearch);
  };

  useEffect(() => {
    if (search.length >= 3) {
      async function getAnimes() {
        try {
          const res = await axios.get(urlSearch);
          setAnimes(res.data.results);
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }
      getAnimes();
      //console.log(Animes);
    } else {
      async function getAnimes() {
        try {
          const res = await axios.get(urlInitial);
          setAnimes(res.data.recommendations.splice(0, 1));
          console.log(res.data.recommendations.splice(0, 1));
        } catch (error) {
          console.error(error);
        }
      }
      getAnimes();
    }
  }, [search]);

  return (
    <>
      <SearchAppBar searchAnime={searchAnime} />
      <div>
        <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000}>
          {animes.map((anime) => (
            <AnimeCards
              key={anime.mal_id}
              image={anime.image_url}
              title={anime.title}
              id={anime.mal_id}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
