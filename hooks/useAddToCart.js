import axios from 'axios';
import { useMutation, queryCache } from 'react-query';

const API_URL = 'http://localhost:3000/cart/add';

export default function useAddToCart() {
    return useMutation(({ productDetails, api = API_URL }) => {
       return axios.post(api, productDetails).then((resp) => resp.data)
    },
    {
        onSuccess: () => queryCache.refetchQueries('posts'),
    });
}