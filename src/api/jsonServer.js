import Axios from 'axios';

export default Axios.create({
    baseURL:"https://8e039a279720.ngrok.io",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});