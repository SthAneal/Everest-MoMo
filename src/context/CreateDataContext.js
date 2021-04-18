import React, {useReducer} from 'react';

export default (reducer, actions, defaultState)=>{
    const Context = React.createContext();

    const Provider = ({children})=>{
        const [state, dispatch] = useReducer(reducer, defaultState);
        const actionsBound = {};
        
        for(let key in actions){
            actionsBound[key] = actions[key](dispatch);
        }

        return(
            <Context.Provider value={{state, ...actionsBound}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider}
}
