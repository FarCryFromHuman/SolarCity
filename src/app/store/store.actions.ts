import { Injectable } from "@angular/core";
import { Action } from "redux";
import { Column, Row, Cell } from "../game/models/board.model";

@Injectable()
export class GameActions {
    static START_GAME = 'START_GAME';
    static TAKE_MOVE = 'TAKE_MOVE';

    startGame(): Action {
        return { type: GameActions.START_GAME };
    }

    takeMove(cell: Cell, row?: Row, column?: Column): Action {
        return { type: GameActions.TAKE_MOVE };
    }
}