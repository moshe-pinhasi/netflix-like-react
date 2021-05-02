import { useState, useEffect, useReducer, useDebugValue } from 'react';
import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3"
const DEFAULT_PARAMS = {api_key: "5f76992c9e02fb2ce7f8136ef983292c"}

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const doAjax = async (endpoint, method='get', params, data=null) =>{
  const res = await axios({
    url: `${BASE_URL}${endpoint}`,
    method,
    params,
    data
  })
  return res.data;  
}

export const getConfig = (endpoint, params) => ({
  method: 'GET',
  endpoint,
  params
})

export const postConfig = (endpoint, data) => ({
  method: 'POST',
  endpoint,
  data
})

export const useDataApi = (initialConfig, initialData) => {
  const [config, setConfig] = useState(initialConfig);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    error: null,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      try {
        dispatch({type: "FETCH_INIT"})
        let {method, endpoint, data, params} = config
        params = {...DEFAULT_PARAMS, ...params}
        // need to add authorization header
        const result = await doAjax(endpoint, method, params, data)
        !didCancel && dispatch({type: "FETCH_SUCCESS", payload: result})
      } catch (error) {
        console.error('[useDataApi]', error)
        !didCancel && dispatch({type: "FETCH_FAILURE"})
      }
    }

    fetchData()

    return () => didCancel = true //clean up function which runs when a component unmounts
  }, [config])

  useDebugValue(state.isLoading ? 'loading' : 'idle'); // display the status in devtools 

  return [state, setConfig]
}