import React from "react";
import { useSelector } from "react-redux";
const Videobackgraund = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video">
        src={"https://www.youtube.com/embed" + trailerVideo?.key}
        titel = "You Tube video player" allow = " ";
      </iframe>
    </div>
  );
};
export default Videobackgraund;
