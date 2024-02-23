import "./App.scss";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Description from "./components/Description/Description";
import Form from "./components/Form/Form";
import Comment from "./components/Comment/Comment";
import NextVideo from "./components/NextVideo/NextVideo";

function App() {
  console.log(videoDetails);
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <div className="App">
      <Header />
      <Video selectedVideo={selectedVideo} />
      <main className="main">
        <div className="collection">
          <Description selectedVideo={selectedVideo} />
          <Form />
          <Comment selectedVideo={selectedVideo} />
        </div>
        <NextVideo />
      </main>
    </div>
  );
}

export default App;
