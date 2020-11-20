import axios from "axios";
import querystring from "querystring";

const headers = {
  Accept: "application/json",
};

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers,
});

const queryBuilder = (params) => {
  const cleanParams = {};
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value) cleanParams[key] = value;
  });
  return querystring.stringify(cleanParams);
};

export default api;
export { queryBuilder };
