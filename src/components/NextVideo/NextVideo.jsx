import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
  //JS part:
  //click next video function
  //const handleVideoClick = (id) => {
  // const clickedVideo = props.videos.find((video) => {
  //   return video.id === id;
  // });
  //props.nextVideoClick(id);
  //props.setSelectedVideo(clickedVideo);
  //};

  //display videos function: filter out selected video and display rest
  const showVideos = props.videos
    .filter((video) => {
      return video.id !== props.selectedVideo.id;
    })
    .map((video) => {
      return (
        <Link to={`/${video.id}`} key={video.id} className="videos__link">
          <div
            className="videos__item"
            // onClick={() => {
            //   handleVideoClick(video.id);

            // }}
          >
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
