import "./NextVideo.scss";

function NextVideo() {
  return (
    <section className="videos">
      <h2 className="videos__title">NEXT VIDEOS</h2>
      <div className="videos__item">
        {/* add event handler */}
        <img src="" alt="video image" className="videos__image" />
        <div className="videos__description">
          <h2 className="videos__subheading">Exploring Cities of Europe</h2>
          <p className="videos__author">Ryan Hernandez</p>
        </div>
      </div>
    </section>
  );
}

export default NextVideo;
