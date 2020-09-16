import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channelName, Discription, songName }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channelName}</h3>
        <p>{Discription}</p>
        <MusicNoteIcon className="videoFooter_icon" />

        <Ticker mode="smooth">{({ index }) => <p>{songName}</p>}</Ticker>
      </div>
    </div>
  );
}

export default VideoFooter;
