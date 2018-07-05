import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerBoard, Cell } from '../models/board.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Output() onCellSelected = new EventEmitter<{ player: Player, cell: Cell }>();

  constructor() { }

  ngOnInit() {
  }

  cellSelected(context: { board: PlayerBoard, cell: Cell }) {
    this.onCellSelected.emit({ player: this.player, cell: context.cell });
  }
}
