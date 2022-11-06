import styles from "./Story.module.scss";
import React from "react";
import { useQuery } from "react-query";
import { getArticles } from "../../services/api";

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
          <div className={styles.story__header}>
            <div className={styles.story__author}>
              <img src={article.author.image} alt="Avatar" />
              <div>
                <p>{ article.author.username }</p>
                <p>{ article.createdAt }</p>
              </div>
            </div>
            <button>{article.favoritesCount}</button>
          </div>

          <div className={styles.story__content}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="flex justify-between">
              <a href="/">Read more...</a>
              <div className="flex justify-end gap-2">
                {article.tagList.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <hr />
        </div>
      </>
    )
  );
};

export default Story;
