import CreateDataContext from './CreateDataContext';

const postReducer = (state, action)=>{
    switch(action.type){
        case 'CHANGE_ROUTE':
            return {route:action.payload}
        default:
            return state;
    };
};

const changeRoute = (dispatch)=>{
    return (route)=>{
        dispatch({type:'CHANGE_ROUTE',payload:route})
        console.log('this is comming from post context. the route is='+route);
    }
}



export const {Context, Provider} = CreateDataContext(postReducer, {changeRoute},{route:'home'});