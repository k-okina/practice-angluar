import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { counterReducer } from './counter';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';

const reducer = { counter: counterReducer };

export type RootReducerType = typeof reducer;

export type RootStateType = {
  [P in keyof RootReducerType]: ReturnType<RootReducerType[P]>;
};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
