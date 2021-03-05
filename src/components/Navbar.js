import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const Navbar = () => {
    const { list } = useContext(ListContext);
    return (
        <div className="navbar">
            <h1>Shopping List</h1>
            {list && <p>There are {list.length} items in the list</p>}
        </div>
    );
}
 
export default Navbar;