import Axios from 'axios';

export default Axios.create({
    baseURL:"https://ac0d42e77afc.ngrok.io",
    withCredentials: false,
    headers:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});