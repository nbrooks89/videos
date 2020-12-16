import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item">
      <img
        alt={video.snippet.title}
        className="image"
        src={video.snippet.thumbnails.medium.url}
      />

      <p className="header">{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
