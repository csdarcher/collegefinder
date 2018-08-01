// Base API Configuration
import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.data.gov/ed/collegescorecard/v1/schools?`
})
API.interceptors.request.use(function (config) {
  // Set common parameters on each request
  config.params.api_key = 'd9xeq99pO8xRBij92yBUzmSIPR1P6v4RDAyQN53X';
  return config;
}, );
