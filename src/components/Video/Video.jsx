import "./Video.scss";
import videoImage from "../../assets/images/Upload-video-preview.jpg";

function Video() {
  return <video className="video" controls poster={videoImage}></video>;
}

export default Video;
