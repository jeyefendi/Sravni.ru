import styles from './Feed.module.scss';
import Story from '../../components/Story/Story';
import { useQuery } from 'react-query';
import { getArticles } from '../../services/api';


const FeedPage = () => {
    const { isLoading, isRefetching, data, isError, error, refetch } = useQuery(
        'storyIds',
        getArticles,
        {
            staleTime: 60000,
            refetchInterval: 60000,
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
                {data.map((storyId) => (
                    <Story key={storyId} storyId={storyId}/>
                ))}
            </main>
            <button onClick={async () => await refetch()} className={styles.refresh}>
                <img src="/refresh.png" alt="Refetch" className="w-16"/>
            </button>
        </>
    );
};

export default FeedPage;
