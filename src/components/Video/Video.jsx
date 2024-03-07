import "./Video.scss";

function Video(props) {
  const { selectedVideo } = props;
  return (
    <section className="video">
      <video className="video__player" controls poster={selectedVideo.image}></video>
    </section>
  );
}

export default Video;
