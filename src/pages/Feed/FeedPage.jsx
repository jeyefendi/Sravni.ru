import styles from './Feed.module.scss';
import Story from '../../components/Story/Story';
import { useQuery } from 'react-query';
import { getArticles } from '../../services/api';


const FeedPage = () => {
    const { isLoading, isRefetching, data, isError, error } = useQuery(
        'Articles',
        getArticles,
        {
            staleTime: 600000,
            refetchInterval: 600000,
            refetchIntervalInBackground: true,
        },
    );

    if (isLoading || isRefetching) {
        return <h2 className="mx-16 my-8 text-2xl">Loading...</h2>;
    }

    if (isError) {
        return <h2 className="mx-16 my-8 text-2xl">{error.message}</h2>;
    }

    return (
        <>
            <main className={styles.feed}>
                {data.articles.map(article => 
                    <Story article={article}/>
                )}
            </main>
        </>
    );
};

export default FeedPage;
