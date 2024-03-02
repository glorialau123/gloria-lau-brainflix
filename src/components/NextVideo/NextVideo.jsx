import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
  //display videos function: filter out selected video and display rest
  const showVideos = props.videos
    .filter((video) => {
      return video.id !== props.selectedVideo.id;
    })
    .map((video) => {
      return (
        <Link to={`/${video.id}`} key={video.id} className="videos__link">
          <div className="videos__item">
            <img src={video.image} alt="video image" className="videos__image" />
            <div className="videos__description">
              <h2 className="videos__subheading">{video.title}</h2>
              <p className="videos__author">{video.channel}</p>
            </div>
          </div>
        </Link>
      );
    });

  //JSX part:
  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      {showVideos}
    </section>
  );
}

export default NextVideo;
