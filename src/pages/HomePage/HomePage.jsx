import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Video from "../../components/Video/Video";
import Description from "../../components/Description/Description";
import Form from "../../components/Form/Form";
import Comment from "../../components/Comment/Comment";
import NextVideo from "../../components/NextVideo/NextVideo";

const { REACT_APP_BACKEND_URL } = process.env;

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  //get all videos from api upon first render
  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(`${REACT_APP_BACKEND_URL}/videos`);
      setVideos(response.data);
    }

    getVideos();
  }, []);

  //get video from an id via params
  const params = useParams();
  let selectedId = params.id;

  //if id is provided, render clicked video details; else if no id(homepage), render default video
  useEffect(() => {
    async function getSelectedVideo() {
      if (selectedId) {
        try {
          const response = await axios.get(
            `${REACT_APP_BACKEND_URL}/videos/${selectedId}`
          );
          setSelectedVideo(response.data);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.get(`${REACT_APP_BACKEND_URL}/videos/`);
          setSelectedVideo(response.data[0]);
        } catch (error) {
          console.error(error);
        }
      }
    }
    getSelectedVideo();
  }, [selectedId]);

  return (
    <div className="homepage">
      <Video selectedVideo={selectedVideo} />
      <main className="main">
        <div className="collection">
          <Description
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
          />
          <Form selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
          <Comment selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />
        </div>
        <NextVideo videos={videos} selectedVideo={selectedVideo} />
      </main>
    </div>
  );
}

export default HomePage;
