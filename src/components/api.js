// Base API Configuration
import axios from 'axios';

export const API = axios.get({
    baseURL: 'https://api.data.gov/ed/collegescorecard/v1/schools?api_key=d9xeq99pO8xRBij92yBUzmSIPR1P6v4RDAyQN53X&fields=school.name'
});