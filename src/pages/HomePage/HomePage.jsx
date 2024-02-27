import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";


import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import NextVideo from "../../components/NextVideo/NextVideo";

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  const [videos, setVideos] = useState(videoDetails);

  return (
    <div className="homepage">
      <Video selectedVideo={selectedVideo} />
      <main className="main">
        <div className="collection">
          <Description selectedVideo={selectedVideo} />
          <Form />
          <Comment selectedVideo={selectedVideo} />
        </div>
        <NextVideo
          videos={videos}
          setVideos={setVideos}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </main>
    </div>
  );
}

export default HomePage;