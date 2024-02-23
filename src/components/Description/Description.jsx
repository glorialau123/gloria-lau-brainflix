import "./Description.scss";
import eyeIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function Description(props) {
  return (
    <section className="description">
      <h1 className="description__heading">{props.selectedVideo.title}</h1>
      <div className="description__details">
        <div className="description__authoring">
          <p className="description__author">By {props.selectedVideo.channel}</p>
          <p className="description__date">{props.selectedVideo.timestamp}</p>
        </div>
        <div className="description__interact">
          <div className="description__visibility">
            <img src={eyeIcon} alt="eye-icon" className="description__visibility-icon" />
            <p className="description__visibility-number"> {props.selectedVideo.views}</p>
          </div>
          <div className="description__like">
            <img src={likeIcon} alt="like-icon" className="description__like-icon" />
            <p className="description__like-number"> {props.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="description__text">
        <p className="description__paragraph">{props.selectedVideo.description}</p>
        <p className="description__comments">
          {props.selectedVideo.comments.length} Comments
        </p>
      </div>
    </section>
  );
}

export default Description;
