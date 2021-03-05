import React, { createContext, useReducer } from 'react';
import { v1 as uuid } from 'uuid';
import listReducer from '../reducers/listReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [list, dispatchList] = useReducer(listReducer, [
        {name: 'bread', quantity: 1, id: uuid() },
        {name: 'apples', quantity: 5, id: uuid() },
        {name: 'oranges', quantity: 10, id: uuid() }
    ]);
    return (
        <ListContext.Provider value={{ list, dispatchList }}>
            {props.children}
        </ListContext.Provider>
    );
}
 
export default ListContextProvider;