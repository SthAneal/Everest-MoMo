import Axios from 'axios';

export default Axios.create({
    baseURL:"https://56be0c9d7fa8.ngrok.io",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});