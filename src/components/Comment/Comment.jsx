import axios from "axios";
import "./Comment.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import trashcan from "../../assets/icons/trash.svg";
const { REACT_APP_BACKEND_URL } = process.env;

function Comment(props) {
  dayjs.extend(relativeTime);
  const { selectedVideo, setSelectedVideo } = props;

  const selectedVideoComments = selectedVideo?.comments;

  //sort comments from newest to oldest to display
  const sortedComments = selectedVideoComments?.slice().sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  //delete comment functionality: pass in selected comment id - delete on API and pass in new set state variable function to filter out deleted comment and re-render component due to updated state
  const deleteCommentClick = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (confirmDelete) {
      const deleteComment = async (id) => {
        try {
          await axios.delete(
            `${REACT_APP_BACKEND_URL}/videos/${selectedVideo.id}/comments/${id}`
          );
        } catch (error) {
          console.error(error);
        }
      };
      deleteComment(id);

      setSelectedVideo((oldData) => ({
        ...oldData,
        comments: selectedVideo?.comments?.filter((comment) => comment.id !== id),
      }));
    }
  };

  //map out comment section details and structure
  const selectedVideoPerson = sortedComments?.map((person) => (
    <li className="comments__item" key={person.id}>
      <div className="comments__image"></div>
      <div className="comments__info">
        <div className="comments__header">
          <h2 className="comments__name">{person.name}</h2>
          <div className="comments__header-right">
            <p className="comments__date">{dayjs(person.timestamp).fromNow()}</p>
            <button
              className="comments__delete"
              onClick={() => deleteCommentClick(person.id)}
            >
              <img src={trashcan} alt="trashcan" className="comments__delete-icon" />
            </button>
          </div>
        </div>
        <p className="comments__text">{person.comment}</p>
      </div>
    </li>
  ));

  return (
    <section className="comments">
      <ul className="comments__list">{selectedVideoPerson}</ul>
    </section>
  );
}

export default Comment;
