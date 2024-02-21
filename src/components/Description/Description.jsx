import "./Description.scss";
import eyeIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function Description() {
  return (
    <section className="description">
      <h1 className="description__heading">
        Tech Trends: The Future of Artificial Intelligence
      </h1>
      <div className="description__details">
        <div className="description__authoring">
          <p className="description__author">By Aiden Thompson</p>
          <p className="description__date">8/8/2023</p>
        </div>
        <div className="description__interact">
          <div classNamse="description__visibility">
            <img src={eyeIcon} alt="eye-icon" className="description__visibility-icon" />
            <p className="description__visibility-number"></p>
          </div>
          <div className="description__like">
            <img src={likeIcon} alt="like-icon" className="description__like-icon" />
            <p className="description__like-number"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
