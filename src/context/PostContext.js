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

const getChildrensByParentAliasName = (dispatch)=>{
    return async (aliasName)=>{
        let parentData = await Axios.get(`/posts/?aliasName=${aliasName}`);
        parentData.data[0].childrens=[];

        let childData = await Axios.get(`/posts/?parentId=${parentData.data[0]._id}`);
        childData.data.forEach((child)=>{
            parentData.data[0].childrens.push(
                /* {
                    [child.aliasName]:child
                } */
                child
            )
        })

        //let wholeData = Object.assign(...parentData, parentData['childrens'])
        dispatch({type:'UPDATE_POST', payload:parentData.data[0]});

        


    }
}

const changeRoute = (dispatch)=>{
    return (route)=>{
        dispatch({type:'CHANGE_ROUTE',payload:route})
    }
}



export const {Context, Provider} = CreateDataContext(postReducer, {changeRoute, getPostByAliasName, getChildrensByParentAliasName},{route:'home'});