import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import NextVideo from "../../components/NextVideo/NextVideo";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  //const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  // const [videos, setVideos] = useState(videoDetails);

  const apiKey = `2b84cfb1-23e0-4634-92f4-3d60e907dfbc`;

  //get all videos from api upon first rendering
  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`
      );
      //console.log(response.data);
      setVideos(response.data);
    }

    getVideos();
  }, []);

  //get video from an id
  const params = useParams();
  //console.log("Params:", params);
  let selectedId = params.id;
  console.log("selected id from params:", selectedId);

  //if no id(homepage), render default video; else if provide id, render clicked video details
  useEffect(() => {
    async function getSelectedVideo() {
      if (selectedId) {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedId}?api_key=${apiKey}`
        );
        setSelectedVideo(response.data);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        // selectedId = `84e96018-4022-434e-80bf-000ce4cd12b8`;
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`
        );
        setSelectedVideo(response.data);
      }
    }
    getSelectedVideo();
  }, [selectedId]);

  //want clicked video to show correct id in url(params); want a function that takes

  // const nextVideoClick = async (selectedId) => {
  //   const response = await axios.get(
  //     `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedId}?api_key=2b84cfb1-23e0-4634-92f4-3d60e907dfbc`
  //   );
  //   setSelectedVideo(response.data);
  // };

  return (
    <div className="homepage">
      <Video selectedVideo={selectedVideo} />
      <main className="main">
        <div className="collection">
          <Description selectedVideo={selectedVideo} />
          <Form selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
          <Comment selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
        </div>
        <NextVideo
          videos={videos}
          setVideos={setVideos}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
          // nextVideoClick={nextVideoClick}
        />
      </main>
    </div>
  );
}

export default HomePage;
