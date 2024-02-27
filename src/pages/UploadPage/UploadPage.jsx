import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <div className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <UploadForm />
    </div>
  );
}

export default UploadPage;
