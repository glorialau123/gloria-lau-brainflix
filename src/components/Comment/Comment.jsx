import axios from "axios";
import "./Comment.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function Comment(props) {
  dayjs.extend(relativeTime);

  const selectedVideoComments = props.selectedVideo?.comments;
  // console.log(selectedVideoComments);

  //sort comments from newest to oldest to display
  const sortedComments = selectedVideoComments?.slice().sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  const apiKey = `2b84cfb1-23e0-4634-92f4-3d60e907dfbc`;

  const deleteCommentClick = (id) => {
    // console.log(props.selectedVideo.comments);
    props.setSelectedVideo((oldData) => ({
      ...oldData,
      comments: props.selectedVideo?.comments?.filter((comment) => comment.id !== id),
    }));
    // console.log("the id deleted is", id);
    // console.log(props.selectedVideo.comments.filter((comment) => comment.id !== id));
  };

  // const deleteCommentClick = async (event) => {
  //   console.log("delete clicked");
  //   console.log(event.currentTarget);
  //   // const response = await axios.delete(
  //   //   `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${props.selectedVideo.id}/comments/${selectedCommentId}?api_key=${apiKey}`
  //   // );
  // };

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
              ✖
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
