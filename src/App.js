import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./Video";
import { getPosts } from "./helper/apicall";
import axios from "./axios";

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/api/v1/posts");
      setvideos(request.data);
      return request;
    }

    fetchData();
  }, []);

  // console.log(videos);

  return (
    <div className="app">
      <div className="app_video">
        {videos.map((video, index) => {
          return (
            <Video
              key={video._id}
              video={video.url}
              channelName={video.channel}
              Discription={video.description}
              songName={video.song}
              likes={video.likes}
              shares={video.shares}
              comments={video.shares}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
