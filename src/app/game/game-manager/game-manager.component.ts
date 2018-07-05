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

  // temp
  // tempSetup() {
  //   //init game
  //   this.game = new Game();

  //   let createBoard = function (rowCount: number, colCount: number): PlayerBoard {
  //     var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //     let cols = Array<number>(colCount).fill(0).map((c, i) => new Column(letters.charAt(i)));
  //     let rows = Array<number>(rowCount).fill(0).map((r, i) => new Row((i + 1).toString()));
  //     let cells = new Array<Cell>();
  //     for (let col of cols)
  //       for (let row of rows)
  //         cells.push(new Cell(col.name + row.name));
  //     return new PlayerBoard(rows, cols, cells);
  //   }

  //   // create players with boards
  //   let playerNames = ['Austin', 'Emily', null, 'Matt']
  //   this.game.players = playerNames.map((p, i) =>
  //     new Player(i + 1, p, createBoard(this.rowCount, this.colCount)));
  // }

  cellSelected(context: { player: Player, cell: Cell }) {
    console.log('bubbled up ' + context.player.name + '\'s cell ' + context.cell.name);
    this.ngRedux.dispatch(this.actions.takeMove(context.cell, null, null));
  }
}
