import axios from 'axios';

export const baseUrl = 'https://api.realworld.io/api';
export const articlesUrl = `${baseUrl}/articles.json`;


export const getArticles = async () => {
    const { data } = await axios.get(articlesUrl);
    
    return data;
};


// export const getSingleComment = async (commentId) => {
//     const { data } = await axios.get(`${storyUrl}/${commentId}.json`);

//     return data;
// };

// export const getSingleStory = async (storyId) => {
//     const { data } = await axios.get(`${storyUrl}/${storyId}.json`);

//     return data;
// };