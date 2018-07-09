import { Component, OnInit, Input } from '@angular/core';
import { PlayerBoard, Row, Column, Cell } from '../models/board.model';
import { Player } from '../models/player.model';
import { Game } from '../models/game.model';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/store.state';
import { GameActions } from '../../store/store.actions';

@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.css']
})
export class GameManagerComponent implements OnInit {

  @Input() playerCount: number;
  @Input() colCount: number;
  @Input() rowCount: number;

  @select('currentGame') readonly game$: Observable<Game>;
  @select(['currentGame', 'players']) readonly players$: Observable<Player[]>;
  @select(state => state.currentGame.players[state.currentGame.currentPlayerIndex]) readonly currentPlayer$: Observable<Player>;
  //game: Game = new Game();

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: GameActions) { }

  ngOnInit() {
    //this.tempSetup();
  }

  startGame() {
    this.ngRedux.dispatch(this.actions.startGame());
  }

  cellSelected(context: { player: Player, cell: Cell }) {
    console.log('bubbled up ' + context.player.name + '\'s cell ' + context.cell.name);
    this.ngRedux.dispatch(this.actions.takeMove(context.cell, null, null));
  }
}
