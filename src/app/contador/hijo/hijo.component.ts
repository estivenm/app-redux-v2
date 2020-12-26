import { Component, OnInit } from '@angular/core';
import { MultiplicarAction, DividirAction } from '../contador.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})

export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(this.contador);

    });
  }

  multiplicar() {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const action  = new DividirAction(5);
    this.store.dispatch(action);
  }
}
