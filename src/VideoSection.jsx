import React from "react";

const VideoSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        id="background-video"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7%2F670e635017a1e518bda0a0fd_001-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7%2F670e635017a1e518bda0a0fd_001-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/67092b02e0a47e061ff6aef7%2F670e635017a1e518bda0a0fd_001-transcode.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

    </div>
  );
};

export default VideoSection;
