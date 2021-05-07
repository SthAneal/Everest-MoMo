import Axios from 'axios';

export default Axios.create({
    baseURL:"https://077f176f0a7b.ngrok.io",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});