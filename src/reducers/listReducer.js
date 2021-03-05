import { v1 as uuid } from 'uuid';

const listReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, {name: action.item.name, quantity: action.item.quantity, id: uuid()}];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default listReducer;