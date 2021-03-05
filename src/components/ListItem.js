import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const ListItem = (props) => {
    // const { dispatchList } = useContext(ListContext);
    const { removeItem } = useContext(ListContext);
    const handleClick = () => {
        // dispatchList({ type: 'REMOVE_ITEM', id: props.item.id });
        removeItem(props.item.id);
    }
    return (
        <div className="list-item"
            onClick={handleClick}>
            <span className="item-name">
                {props.item.name}
            </span>
            <span className="item-quantity">
                {props.item.quantity}
            </span>
        </div>
    );
}
 
export default ListItem;