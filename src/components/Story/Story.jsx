import styles from "./Story.module.scss";
import React from "react";
import { useQuery } from "react-query";
import { getArticles } from "../../services/api";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Story = ({ article }) => {
  const { isLoading, data, isError, error } = useQuery([""], () =>
    getArticles(article)
  );

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8">{error.message}</h2>;
  }

  return (
    data && (
      <>
        <div className={styles.story}>
          <div className="flex justify-between pb-4">
            <div className="flex gap-2 items-center">
              <img
                className="h-fit rounded-full"
                src={article.author.image}
                alt="Avatar"
              />
              <div className={styles.author}>
                <a href="/">{article.author.username}</a>
                <span className="text-xs">{article.createdAt}</span>
              </div>
            </div>
            <button className={styles.likes}>
              <BsFillSuitHeartFill />
              {article.favoritesCount}
            </button>
          </div>

          <div className={styles.content}>
            <h2>{article.title}</h2>
            <span className="text-base">{article.description}</span>
          </div>

          <div className="flex justify-between items-center py-4">
            <a href="/"><span className="text-xs">Read more...</span></a>
            <div className="flex gap-2">
              {article.tagList.map((tag) => (
                <span className="text-xs border rounded-3xl p-2">{tag}</span>
              ))}
            </div>
          </div>

          <hr />
        </div>
      </>
    )
  );
};

export default Story;
