import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlayerBoard, Cell } from '../models/board.model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {
  @Input() board: PlayerBoard;
  @Output() onCellSelected = new EventEmitter<{ board: PlayerBoard, cell: Cell }>();

  //TEMP
  selectedCell: string = 'NA';

  constructor(private imageService: ImagesService) { }

  ngOnInit() {
  }

  selectCell(cell: Cell) {
    this.selectedCell = cell.name;
    this.onCellSelected.emit({ board: this.board, cell });
  }

  getCell(col: string, row: string): Cell {
    return this.board.cells.find(c => c.name === col + row);
  }
}
