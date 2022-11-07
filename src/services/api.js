import axios from 'axios';

export const baseUrl = 'https://api.realworld.io/api';
export const articlesUrl = `${baseUrl}/articles`;
export const tagsUrl = `${baseUrl}/tags`;


export const getArticles = async () => {
    const { data } = await axios.get(articlesUrl);
    return data.articles;
};

export const getTags = async () => {
    const { data } = await axios.get(tagsUrl);
    return data.tags;
};