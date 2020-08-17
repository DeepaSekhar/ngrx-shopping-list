import { Action } from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model'
import * as shoppingItems from '../actions/shopping-list.action'

const initialState: ShoppingItem = {
    id: '457676-7457-76',
    name: 'diet-coke'
}

export function ShoppingReducer(state: ShoppingItem[] = [initialState], action: shoppingItems.Actions) {
    switch (action.type) {
        case shoppingItems.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}