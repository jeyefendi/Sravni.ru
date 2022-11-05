import styles from "./Story.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getArticles } from "../../services/api";

const Story = ({ storyId }) => {
  const {
    isLoading,
    data: story,
    isError,
    error,
  } = useQuery([""], () => getArticles(storyId));

  if (isLoading) {
    return <h2 className="mx-16 my-8">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8">{error.message}</h2>;
  }

  return (
    story && (
      <Link to={``}>
        <div className={styles.story}>

        </div>
        <hr />
      </Link>
    )
  );
};

export default Story;
