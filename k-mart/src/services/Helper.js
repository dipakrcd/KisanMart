import  axios  from "axios"

export const BASE_URL="http://localhost:8080";

export const myaxios=axios.create({
    baseURL:BASE_URL,
});
export const myaxios2=axios.get({
    baseURL:BASE_URL,
});