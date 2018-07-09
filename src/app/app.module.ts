import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { GameManagerComponent } from './game/game-manager/game-manager.component';
import { PlayerBoardComponent } from './game/board/player-board.component';
import { BoardCellComponent } from './game/board/board-cell/board-cell.component';
import { BoardTrackComponent } from './game/board/board-track/board-track.component';
import { PlayerComponent } from './game/player/player.component';
import { ImagesService } from './services/images.service';
import { IAppState, initialState } from './store/store.state';
import { rootReducer } from './store/store.reducers';
import { GameActions } from './store/store.actions';
import { NgMaterialImports } from './utils/ng-mat-imports.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './utils/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GameManagerComponent,
    PlayerBoardComponent,
    BoardCellComponent,
    BoardTrackComponent,
    PlayerComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    NgMaterialImports,
    AppRoutingModule
  ],
  providers: [ImagesService, GameActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    const storeMiddleware = [createLogger()];

    ngRedux.configureStore(rootReducer, initialState, storeMiddleware, storeEnhancers);
  }
}
