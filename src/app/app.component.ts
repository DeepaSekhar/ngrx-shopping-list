import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/models/shopping-item.model'
import { AppState } from '../store/models/app-state.model'
import { AddItemAction, DeleteItemAction } from '../store/actions/shopping-list.action'
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  shoppingItems: Observable<ShoppingItem[]>
  newShoppingItem: ShoppingItem = {
    id: '',
    name: ''
  }

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }
  addItem() {
    this.newShoppingItem.id = uuid();
    console.log('id')
    this.store.dispatch(new AddItemAction(this.newShoppingItem))
    this.newShoppingItem = { id: '', name: '' }
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}

