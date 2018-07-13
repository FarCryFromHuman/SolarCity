import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlayerBoard, Space } from '../models/board.model';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {
  @Input() board: PlayerBoard;
  @Output() onCellSelected = new EventEmitter<{ board: PlayerBoard, cell: Space }>();

  //TEMP
  selectedCell: string = 'NA';

  constructor(private imageService: ImagesService) { }

  ngOnInit() {
  }

  selectCell(cell: Space) {
    this.selectedCell = cell.name;
    this.onCellSelected.emit({ board: this.board, cell });
  }

  getCell(col: string, row: string): Space {
    return this.board.spaces.find(c => c.name === col + row);
  }
}
