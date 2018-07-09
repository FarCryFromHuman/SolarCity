import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store/store.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Solar City';
  constructor(
    private store: NgRedux<IAppState>
  ) { }

  @select() readonly state$: Observable<IAppState>;

  navLinks = [
    {
      path: 'chat',
      label: 'Chat'
    },
    {
      path: 'play',
      label: 'Play'
    }
  ]
}
