import { useContext } from "react";
import SelectionContext from "../slectionContext";
import { useQuery } from "@tanstack/react-query";
import HeadLine from "./HeadLine";
async function fetchPost({ queryKey }) {
  const url = queryKey[1];
  const apiRes = await fetch(url);
  if (!apiRes.ok) {
    console.log("Did Not get response");
  }

  const json = await apiRes.json();
  return json;
}
const HeadLineList = () => {
  const selectionContext = useContext(SelectionContext);
  const [country] = selectionContext.country;
  const [category] = selectionContext.category;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ade14025d7fc48b98eb7334411ca959b`;
  // const url = "";
  const query = useQuery(["postList", url], fetchPost);
  // This is here for testing when internet is not available
  // const dummyArticle = [
  //   {
  //     source: { name: "Dummy Source" },
  //     author: "Sandesh Khadka",
  //     title: "This is the tiltle of this post",
  //     description:
  //       "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  //     publishedAt: "2023-07-01T04:00:00Z",
  //   },
  // ];
  const articles = query?.data?.articles || [];

  return (
    <div>
      {articles.length ? (
        articles.map((article) => (
          <HeadLine
            source={article.source}
            author={article.author}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            url={article.url}
            key={article.title}
          />
        ))
      ) : (
        <div className="text-6xl h-screen flex justify-center items-center pb-60">
          Loading...
        </div>
      )}
    </div>
  );
};

export default HeadLineList;
