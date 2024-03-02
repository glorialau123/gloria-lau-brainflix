import "./Form.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [newComment, setNewComment] = useState("");
  const [invalidComment, setInvalidComment] = useState("");
  const apiKey = `2b84cfb1-23e0-4634-92f4-3d60e907dfbc`;

  const handleChangeInput = (event) => {
    setNewComment(event.target.value);
  };

  //handleSubmit function for form - if new value is set, post to API and re-render new comment with updated video data
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment) {
      const postNewComment = async () => {
        try {
          const newCommentItem = {
            name: "User",
            comment: newComment,
          };
          const response = await axios.post(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${props.selectedVideo.id}/comments?api_key=${apiKey}`,
            newCommentItem
          );
          //show updated video data with new comment
          props.setSelectedVideo((oldData) => ({
            ...oldData,
            comments: [...oldData.comments, response.data],
          }));
        } catch (error) {
          console.error(error);
        }
      };
      postNewComment();

      setNewComment("");
      setInvalidComment("");
      alert("Commented successfully");
    } else {
      setInvalidComment("form__input--invalid");
      alert("Please input comment!");
    }
  };

  return (
    <section className="form">
      <img src={avatar} alt="side profile" className="form__avatar" />
      <form id="form-form" className="form__form" onSubmit={handleSubmit}>
        <div className="form__area">
          <label htmlFor="form-input" className="form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            type="text"
            id="form-input"
            className={`form__input ${invalidComment}`}
            name="form-input"
            placeholder="     Add a new comment"
            onChange={handleChangeInput}
            value={newComment}
          ></textarea>
        </div>
        <button className="form__button">COMMENT</button>
      </form>
    </section>
  );
}

export default Form;
