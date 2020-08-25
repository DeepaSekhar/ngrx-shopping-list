import { Action } from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model'
import { ShoppingActionTypes, ShoppingActions } from '../actions/shopping-list.action'

const initialState: ShoppingItem = {
    id: '457676-7457-76',
    name: 'diet-coke'
}

export function ShoppingReducer(state: ShoppingItem[] = [initialState], action: ShoppingActions) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            console.log("ADD", action.type);
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload)
            console.log("Delete", action.type);
        default:
            return state;
    }
}