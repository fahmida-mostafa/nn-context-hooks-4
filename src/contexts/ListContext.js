import React, { createContext, useReducer, useState } from 'react';
import { v1 as uuid } from 'uuid';
// import listReducer from '../reducers/listReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
    // const [list, dispatchList] = useReducer(listReducer, [
    //     {name: 'bread', quantity: 1, id: uuid() },
    //     {name: 'apples', quantity: 5, id: uuid() },
    //     {name: 'oranges', quantity: 10, id: uuid() }
    // ]);
    const [list, setList] = useState([
        {name: 'bread', quantity: 1, id: uuid() },
        {name: 'apples', quantity: 5, id: uuid() },
        {name: 'oranges', quantity: 10, id: uuid() }
    ]);
    const addItem = (item) => {
        setList([...list, {
            name: item.name,
            quantity: item.quantity,
            id: uuid()
        }]);
    }
    const removeItem = (id) => {
        setList(list.filter(item => item.id !== id));
    }
    return (
        <ListContext.Provider value={{ list, addItem, removeItem }}>
            {props.children}
        </ListContext.Provider>
    );
}
 
export default ListContextProvider;