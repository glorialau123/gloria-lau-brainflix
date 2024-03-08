import "./Description.scss";
import eyeIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";

const { REACT_APP_BACKEND_URL } = process.env;

function Description(props) {
  dayjs.extend(relativeTime);
  const { selectedVideo, setSelectedVideo } = props;

  //add toggle like: need to use setSelectedVideo as props; need to use new state variable as classname? to check if classname has been added to add or remove likes
  const toggleLike = async () => {
    try {
      const response = await axios.put(
        `${REACT_APP_BACKEND_URL}/videos/${selectedVideo.id}/likes`
      );
      setSelectedVideo((oldVideoData) => ({ ...oldVideoData, likes: response.data }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="description">
      <h1 className="description__heading">{selectedVideo?.title}</h1>
      <div className="description__details">
        <div className="description__authoring">
          <p className="description__author">By {selectedVideo?.channel}</p>
          <p className="description__date">{dayjs(selectedVideo?.timestamp).fromNow()}</p>
        </div>
        <div className="description__interact">
          <div className="description__visibility">
            <img src={eyeIcon} alt="eye-icon" className="description__visibility-icon" />
            <p className="description__visibility-number"> {selectedVideo?.views}</p>
          </div>
          <div className="description__like" onClick={toggleLike}>
            <img src={likeIcon} alt="like-icon" className="description__like-icon" />
            <p className="description__like-number"> {selectedVideo?.likes}</p>
          </div>
        </div>
      </div>
      <div className="description__text">
        <p className="description__paragraph">{selectedVideo?.description}</p>
        <p className="description__comments">{selectedVideo.comments?.length} Comments</p>
      </div>
    </section>
  );
}

export default Description;
