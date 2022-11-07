import styles from "./Feed.module.scss";
import Story from "../../components/Story/Story";
import { useQuery } from "react-query";
import { getArticles } from "../../services/api";
import { getTags } from "../../services/api";

const FeedPage = () => {
  const {
    isLoading,
    isRefetching,
    data: articles,
    isError,
    error,
  } = useQuery("Articles", getArticles, {
    staleTime: 600000,
    refetchInterval: 600000,
    refetchIntervalInBackground: true,
  });

  const { data: tags } = useQuery("Tags", getTags);

  if (isLoading || isRefetching) {
    return <h2 className="mx-16 my-8 text-2xl">Loading...</h2>;
  }

  if (isError) {
    return <h2 className="mx-16 my-8 text-2xl">{error.message}</h2>;
  }

  return (
    <main>
      <div className={styles.feed}>
        {articles.map((article) => (
          <Story article={article} />
        ))}
      </div>

      <div className={styles.popular}>
        <p>Popular Tags</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FeedPage;
