
import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model'

export const ADD_ITEM = '[SHOPPING]Add Item';

export class addItem implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: ShoppingItem) { }

}
export type Actions = addItem