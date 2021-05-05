import Axios from 'axios';

export default Axios.create({
    baseURL:"https://a16491b6bc5c.ngrok.io",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});