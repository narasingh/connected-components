import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { queryCache } from 'react-query'
import { fetchItems } from '../../hooks/useItemLookup';

const ItemLookup = ({ api = '', onSuccess, onError }) => {
    const [query, setQuery] = useState('');
    const debounceTime = 500;
    const delayQuery = useRef(debounce(q => sendQuery(q), debounceTime)).current;

    const sendQuery = async (query) => {
        const response = await queryCache.prefetchQuery(['fetchitem', query], fetchItems);
        if(response && !response?.isAxiosError) {
            onSuccess(response);
        } if(!response || response?.isAxiosError) {
            onError(response);
        }
    }

    const handleSearch = useCallback((evt) => {
        const nextValue = evt?.target?.value;
        setQuery(nextValue);
        delayQuery(nextValue);

    }, [setQuery, delayQuery]);

    return (
    <form>
       <input
         placeholder="Search item"
         onChange={handleSearch}
         value={query}
       />
     </form>
    );
};

ItemLookup.propTypes = {
    api: PropTypes.string,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
};

export default ItemLookup;

