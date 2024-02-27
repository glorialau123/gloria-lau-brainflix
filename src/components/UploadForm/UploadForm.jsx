import "./UploadForm.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

function UploadForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    alert("Your video has been uploaded!");
    navigate("/");
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
          <label className="upload__label" htmlFor="title">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            className="upload__title"
            name="title"
            id="title"
            placeholder="Add a title to your video"
          />
          <label className="upload__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__description"
            name="description"
            id="description"
            placeholder="Add a description to your video"
          ></textarea>
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
