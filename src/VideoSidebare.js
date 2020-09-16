import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
function VideoSidebare({ likes, shares, comments }) {
  const [liked, setliked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setliked(true)}
          />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebare;
