export default function HomeContentWithLinkContainer({ rowContent }) {
  return rowContent ? (
    <div className="col-md-4">
      <h3>{rowContent.heading}</h3>
      <p>{rowContent.paragraph}</p>
      <ul className="pl-3">
        {rowContent.listItems &&
          rowContent.listItems.map(({ content }) => (
            <li key={content}>{content}</li>
          ))}
      </ul>
      <a
        href={rowContent.link.href}
        target="_blank"
        title={rowContent.link.title}
      >
        Learn More
      </a>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
