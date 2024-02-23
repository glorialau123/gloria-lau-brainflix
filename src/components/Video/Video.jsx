import "./Video.scss";

function Video(props) {
  return (
    <section className="video">
      <video
        className="video__player"
        controls
        poster={props.selectedVideo.image}
      ></video>
    </section>
  );
}

export default Video;
