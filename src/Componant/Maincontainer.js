import React from "react";
import { useSelector } from "react-redux";
import VideoTitel from "./ ";
import Videobackgraund from "./Videobackgraund";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies(0);
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;
  return (
    <div>
      <VideoTitel titel={original_title} overview={overview} />
      <Videobackgraund/>
    </div>
  );
}; 
export default Maincontainer;