import { Injectable } from "@angular/core";
import { Action } from "redux";
import { Column, Row, Cell } from "../game/models/board.model";

@Injectable()
export class GameActions {
    static TAKE_MOVE = 'TAKE_MOVE';

    takeMove(cell: Cell, row?: Row, column?: Column): Action {
        return { type: GameActions.TAKE_MOVE };
    }
}