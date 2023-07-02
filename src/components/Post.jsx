const Post = (props) => {
  const { source, author, title, description, publishedAt } = props;
  return (
    <div className="border border-black p-3 m-2">
      <div>Source: {source.name}</div>
      <div>Author: {author}</div>
      <div>Published: {publishedAt}</div>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
    </div>
  );
};

export default Post;
