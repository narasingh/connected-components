import React, { useCallback } from 'react'
import axios from 'axios'

import { useQuery, useMutation, queryCache } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import ItemLookup from '../components/ItemLookup';

export default () => {
  const handleError = useCallback((error) => {
    console.log(error, 'error');
  }, []);

  const handleSuccess = useCallback((response) => {
    console.log(response);
  });

  return (
    <div>
      <h2>Example React Query</h2>
      <ItemLookup onError={handleError} onSuccess={handleSuccess} />
      <br />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}