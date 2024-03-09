import "./Video.scss";

const { REACT_APP_BACKEND_URL } = process.env;

function Video(props) {
  const { selectedVideo } = props;
  return (
    <section className="video">
      {/* <video className="video__player" controls poster={selectedVideo.image}></video> */}
      <video
        className="video__player"
        controls
        poster={`${REACT_APP_BACKEND_URL}/images/${selectedVideo.image}`}
      ></video>
    </section>
  );
}

export default Video;
