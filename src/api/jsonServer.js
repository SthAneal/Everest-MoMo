import Axios from 'axios';

export default Axios.create({
    baseURL:"https://everestmomoapi.herokuapp.com/",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});
