import axios from "axios";
// import axois from the module

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;