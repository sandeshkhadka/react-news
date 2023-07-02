import AuthorIcon from "./AuthorIcon";
import ClockIcon from "./ClockIcon";
import SourceIcon from "./SourceIcon";

const HeadLine = (props) => {
  const { source, author, title, description, publishedAt, url } = props;
  return (
    <div className="border border-black p-3 m-2">
      <h1 className="text-3xl border-b border-l p-1 border-black">{title}</h1>
      <div className="flex gap-2">
        <div className="flex p-1 gap-1">
          <SourceIcon /> <div>{source.name}</div>
        </div>
        <div className="flex p-1 gap-1">
          <AuthorIcon />
          <div>{author ? author : "Anonymous"}</div>
        </div>
        <div className="flex p-1 gap-1">
          <ClockIcon />
          <div>{publishedAt}</div>
        </div>
      </div>
      <div className="p-1 text-lg border-l border-b border-gray-300">
        {description}
        <a href={url} className="p-1 ml-3 text-gray-500 cursor-pointer">
          Continue reading
        </a>
      </div>
    </div>
  );
};

export default HeadLine;
