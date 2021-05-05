import CreateDataContext from './CreateDataContext';
import Axios from '../api/jsonServer';

const postReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_ROUTE':
            return {...state, route:action.payload}
        case 'UPDATE_POST':
            return Object.assign({...state}, {[action.payload.aliasName]:action.payload})
        default:
            return state;
    };
};

const getPostByAliasName = (dispatch)=>{
    return async (aliasName)=>{
        const response = await Axios.get(`/posts/?aliasName=${aliasName}`);
        dispatch({type:'UPDATE_POST', payload:response.data[0]});
    }
}

const changeRoute = (dispatch)=>{
    return (route)=>{
        dispatch({type:'CHANGE_ROUTE',payload:route})
    }
}



export const {Context, Provider} = CreateDataContext(postReducer, {changeRoute, getPostByAliasName},{route:'home'});