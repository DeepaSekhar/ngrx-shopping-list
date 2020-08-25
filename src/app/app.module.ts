import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from '../store/reducers/shopping-list.reducer'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
