import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const ListItem = (props) => {
    const { dispatchList } = useContext(ListContext);
    return (
        <div className="list-item"
            onClick={() => dispatchList({ type: 'REMOVE_ITEM', id: props.item.id })}>
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