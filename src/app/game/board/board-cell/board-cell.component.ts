import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Space } from '../../models/board.model';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {

  @Input() cell: Space;
  @Output() onChosen = new EventEmitter<Space>();
  imagePath: string;

  constructor(private imageService: ImagesService) { }

  ngOnInit() {
    this.imagePath = this.imageService.forCell(this.cell);
  }

  onClick() {
    //if (!this.cell.structure || this.cell.structure.type == 'Skyscraper')
    this.onChosen.emit(this.cell);
  }
}
