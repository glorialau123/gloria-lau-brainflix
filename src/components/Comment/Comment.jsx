import "./Comment.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function Comment(props) {
  dayjs.extend(relativeTime);

  const selectedVideoComments = props.selectedVideo?.comments;

  const selectedVideoPerson = selectedVideoComments?.map((person) => (
    <li className="comments__item" key={person.id}>
      <div className="comments__image"></div>
      <div className="comments__info">
        <div className="comments__header">
          <h2 className="comments__name">{person.name}</h2>
          <p className="comments__date">{dayjs(person.timestamp).fromNow()}</p>
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
