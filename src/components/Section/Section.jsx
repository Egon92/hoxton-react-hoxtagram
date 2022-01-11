import Article from "./Article/Article";

function Section(props) {
  return (
    <section className="image-container">
      <Article images={props.images} />
    </section>
  );
}

export default Section;
