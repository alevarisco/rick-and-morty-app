import axios from "axios";

export const client = axios;

export const rickandmortyApi = client.create({
    baseURL: 'https://rickandmortyapi.com/api'
})