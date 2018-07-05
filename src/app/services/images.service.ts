import { Cell, Column, Row } from "../game/models/board.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ImagesService {
    private baseImagePath = '../assets/game/';

    forCell(cell: Cell): string {
        return this.baseImagePath + (cell.structure ? cell.structure.name : 'empty-cell') + '.png';
    }

    forColumn(col: Column): string {
        return this.baseImagePath + 'col-top-' + col.name.toLowerCase() + '.png';
    }

    forRow(row: Row): string {
        return this.baseImagePath + 'row-left-' + row.name + '.png';
    }
}
