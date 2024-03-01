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

  console.log(props.selectedVideo.id);

  const deleteCommentClick = (id) => {
    console.log("before state update", props.selectedVideo);

    const deleteComment = async (id) => {
      const response = await axios.delete(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${props.selectedVideo.id}/comments/${id}?api_key=${apiKey}`
      );
      console.log("delete comment response", response);
    };
    deleteComment(id);

    props.setSelectedVideo((oldData) => ({
      ...oldData,
      comments: props.selectedVideo?.comments?.filter((comment) => comment.id !== id),
    }));

    console.log("the id deleted is", id);
    // console.log(props.selectedVideo.comments.filter((comment) => comment.id !== id));

    //testing
    // props.setSelectedVideo((oldData) => {
    //   const newComments = props.selectedVideo?.comments?.filter(
    //     (comment) => comment.id !== id
    //   );
    //   console.log("New Comments:", newComments);

    //   const newState = {
    //     ...oldData,
    //     comments: newComments,
    //   };

    //   console.log("After state update:", newState);

    //   return newState;
    // });
  };

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
