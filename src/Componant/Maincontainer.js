import React from "react";
import { useSelector } from "react-redux";
import VideoTitel from "./VideoTitel";
import Videobackgraund from "./Videobackgraund";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;

  const mainMovie = movies(0);
  console.log(mainMovie);
  return (
    <div>
      <VideoTitel />
      <Videobackgraund />
    </div>
  );
};

export default Maincontainer;
