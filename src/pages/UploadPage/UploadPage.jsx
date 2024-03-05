import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

const { REACT_APP_BACKEND_URL } = process.env;

function UploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <UploadForm />
    </div>
  );
}

export default UploadPage;
