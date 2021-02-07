import axios from 'axios';
import { useQuery } from 'react-query';

const API_URL = 'https://api.github.com/';

export const fetchItems = (_, query) => {
    const api = new URL('users', API_URL).href;

    return axios.get(`${api}/${query}`)
    .then(resp => resp.data)
    .catch(error => error);
}

export default function useItemLookup(query) {
    return useQuery(query && ['fetchitem', query], fetchItems);
};