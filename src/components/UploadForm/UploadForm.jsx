import "./UploadForm.scss";
import { Link, useNavigate } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";

function UploadForm() {
  const navigate = useNavigate();
  const [newDescription, setNewDescription] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [invalidTitleInput, setInvalidTitleInput] = useState("");
  const [invalidDescriptionInput, setInvalidDescriptionInput] = useState("");

  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setNewDescription(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (newTitle && newDescription) {
      alert("Your video has been uploaded!");
      navigate("/");
      setNewTitle("");
      setNewDescription("");
      setInvalidTitleInput("");
      setInvalidDescriptionInput("");
    }
    if (newTitle && !newDescription) {
      alert("Please enter a description!");
      setInvalidDescriptionInput("upload__description--invalid");
    }
    if (!newTitle && newDescription) {
      alert("Please enter a title!");
      setInvalidTitleInput("upload__title--invalid");
    }
    if (!newTitle && !newDescription) {
      alert("Please enter a title and description!");
      setInvalidTitleInput("upload__title--invalid");
      setInvalidDescriptionInput("upload__description--invalid");
    }
  }

  return (
    <form className="upload__form" onSubmit={handleSubmit}>
      <div className="upload__container">
        <div className="upload__video-container">
          <p className="upload__label">VIDEO THUMBNAIL</p>
          <img
            src={thumbnail}
            alt="video thumbnail of runner"
            className="upload__image"
          />
        </div>
        <div className="upload__area-container">
          <div className="upload__area-title">
            <label className="upload__label" htmlFor="title">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              className={`upload__title ${invalidTitleInput}`}
              name="title"
              id="title"
              placeholder="Add a title to your video"
              onChange={handleChangeTitle}
              value={newTitle}
            />
          </div>
          <div className="upload__area-description">
            <label className="upload__label" htmlFor="description">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className={`upload__description ${invalidDescriptionInput}`}
              name="description"
              id="description"
              placeholder="Add a description to your video"
              onChange={handleChangeDescription}
              value={newDescription}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="upload__buttons">
        <button className="upload__publish">PUBLISH</button>
        <Link className="upload__cancel-link" to="/">
          <button className="upload__cancel">CANCEL</button>
        </Link>
      </div>
    </form>
  );
}

export default UploadForm;
