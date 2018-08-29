import {Component} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {INCREMENT, DECREMENT, RESET} from '../../counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;
  test: Promise<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('counter'));
    this.test = new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 3000);
    });
    console.log(this.count$);
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
