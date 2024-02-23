import "./Comment.scss";

function Comment(props) {
  const selectedVideoComments = props.selectedVideo.comments;

  const selectedVideoPerson = selectedVideoComments.map((person) => (
    <li className="comments__item" key={person.id}>
      <div className="comments__image"></div>
      <div className="comments__info">
        <div className="comments__header">
          <h2 className="comments__name">{person.name}</h2>
          <p className="comments__date">{person.timestamp}</p>
        </div>
        <p className="comments__text">{person.comment}</p>
      </div>
    </li>
  ));

  return (
    <section className="comments">
      <ul className="comments__list">
        {selectedVideoPerson}
        {/* <li className="comments__item">
          <div className="comments__image"></div>
          <div className="comments__info">
            <div className="comments__header">
              <h2 className="comments__name">Noah Duncan</h2>
              <p className="comments__date">8/11/2023</p>
            </div>
            <p className="comments__text">Here is a nice comment.</p>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default Comment;
