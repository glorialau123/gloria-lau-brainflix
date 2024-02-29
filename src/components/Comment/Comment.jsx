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

  const selectedVideoPerson = sortedComments?.map((person) => (
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
