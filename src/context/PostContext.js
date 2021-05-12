import CreateDataContext from './CreateDataContext';
import Axios from '../api/jsonServer';

const postReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_ROUTE':
            return {...state, route:action.payload}
        case 'UPDATE_POST':
            return Object.assign({...state}, {[action.payload.aliasName]:action.payload})
        case 'UPDATE_MENU':
            return Object.assign({...state}, {menu:action.payload})
        case 'UPDATE_TESTIMONIALS':
            return Object.assign({...state}, {testimonials:action.payload})
        case 'UPDATE_CONTACT':
            return Object.assign({...state}, {contact:action.payload})
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

// to get all the menus items
const getMenu = (dispatch)=>{
    return async ()=>{
        const response = await Axios.get(`/menu/`);
        dispatch({type:'UPDATE_MENU', payload:response.data});
    }
}

const changeRoute = (dispatch)=>{
    return (route)=>{
        dispatch({type:'CHANGE_ROUTE',payload:route})
    }
}

// to get all the testimonials
const getTestimonials = (dispatch)=>{
    return async (limit)=>{
        const response = await Axios.get(`/testimonials?_page=1&_limit=${limit}&_sort=date&_order=desc`);
        dispatch({type:'UPDATE_TESTIMONIALS', payload:response.data});
    }
}

// to get all the contact information
const getContact = (dispatch)=>{
    return async ()=>{
        const response = await Axios.get(`/contact`);
        dispatch({type:'UPDATE_CONTACT', payload:response.data});
    }
}

export const {Context, Provider} = CreateDataContext(postReducer, {changeRoute, getPostByAliasName, getChildrensByParentAliasName, getMenu, getTestimonials, getContact},{route:'home'});