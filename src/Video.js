import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebare from "./VideoSidebare";

function Video({
  video,
  likes,
  shares,
  comments,
  channelName,
  Discription,
  songName,
}) {
  const [isPlaying, setisPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setisPlaying(false);
    } else {
      videoRef.current.play();
      setisPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={video}
      ></video>

      <VideoFooter
        channelName={channelName}
        Discription={Discription}
        songName={songName}
      />
      <VideoSidebare likes={likes} shares={shares} comments={comments} />
    </div>
  );
}

export default Video;
