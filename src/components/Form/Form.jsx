import "./Form.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

function Form() {
  return (
    <section className="form">
      <img src={avatar} alt="side profile" className="form__avatar" />
      <form id="form-form" className="form__form">
        <div className="form__area">
          <label htmlFor="form-input" className="form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            type="text"
            id="form-input"
            className="form__input"
            name="form-input"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <img src={commentIcon} alt="comment icon" className="form__comment-icon" />
        <button className="form__button">COMMENT</button>
      </form>
    </section>
  );
}

export default Form;
