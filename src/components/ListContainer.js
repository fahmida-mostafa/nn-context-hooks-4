import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import ListItem from './ListItem';

const ListContainer = () => {
    const { list } = useContext(ListContext);
    return (
        <div className="list-container">
            {list.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </div>
    );
}
 
export default ListContainer;