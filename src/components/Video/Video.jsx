import "./Video.scss";

function Video(props) {
  return <video className="video" controls poster={props.selectedVideo.image}></video>;
}

export default Video;
