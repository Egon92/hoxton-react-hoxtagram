import Img from "./Img/Img";

function Article(props) {
  // console.log("im looking at props", props);
  return (
    <article className="image-card">
      {props.images.map((image) => (
        <Img images={image} />
      ))}
      <div className="likes-section">
        <span className="likes">0 likes</span>
        <button className="like-button">♥</button>
      </div>
      <ul className="comments">
        <li>Get rid of these comments</li>
        <li>And replace them with the real ones</li>
        <li>From the server</li>
      </ul>
    </article>
  );
}
export default Article;
