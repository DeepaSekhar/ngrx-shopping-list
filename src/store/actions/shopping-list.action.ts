
import { Action } from '@ngrx/store';
import { ShoppinItem } from '../model/shopping-item.model'

export const ADD_ITEM = '[SHOPPING]Add Item';

export class addItem implements Action {
    readonly type = ADD_ITEM;
    constructor(public payload: ShoppinItem) { }

}
export type actions = addItem