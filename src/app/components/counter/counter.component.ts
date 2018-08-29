import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RootStateType} from '../../app.module';
import {INCREMENT, DECREMENT, RESET} from '../../counter';


const getCount = (state: RootStateType) => state.counter;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;
  test: Promise<number>;

  constructor(private store: Store<RootStateType>) {
    this.count$ = store.select(getCount);
    this.test = new Promise((resolve, reject) => {
      setTimeout(() => resolve(3), 1000);
    });
    this.test.then((value) => console.log('すごい 1'));
    this.test.then((value) => console.log('すごい 2'));
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
