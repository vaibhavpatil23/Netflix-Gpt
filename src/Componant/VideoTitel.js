import React from "react";

const VideoTitel = ({ titel, overview }) => {
  return (
    <div className="pt-36 px-6">
      <h1 className="text-6xl font-bold">{titel}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
          ⏯️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitel;
