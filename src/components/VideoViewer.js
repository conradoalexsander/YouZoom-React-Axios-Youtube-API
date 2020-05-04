import React from "react";

const VideoViwer = (Title, VideoUrl) => {
  return (
    <iframe
      title={Title}
      className="main"
      width="420"
      height="315"
      src={VideoUrl}
    ></iframe>
  );
};

export default VideoViwer;
