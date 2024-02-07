import React from 'react';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/${process.env.REACT_APP_SERVER_API_URI}`,
  withCredentials: true
});
export const AxiosContext = React.createContext();
