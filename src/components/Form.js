import React, { useState, useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import { v1 as uuid } from 'uuid';

const Form = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const { dispatchList } = useContext(ListContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchList({ type: 'ADD_ITEM', item: { name, quantity, id: uuid() } });
        setName('');
        setQuantity('');
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="item name" value={name}
                onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="quantity" value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
            <input type="submit" value="Add Item" />
        </form>
    );
}
 
export default Form;