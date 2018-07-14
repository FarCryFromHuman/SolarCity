import { Injectable } from "@angular/core";
import { Action } from "redux";
import { Column, Row, Space } from "../game/models/board.model";

export interface GameAction extends Action {
    payload: any;
}

@Injectable()
export class GameActions {
    static START_GAME = 'START_GAME';
    static TAKE_MOVE = 'TAKE_MOVE';

    startGame(names: string[]): GameAction {
        return { type: GameActions.START_GAME, payload: names };
    }

    takeMove(cell: Space, row?: Row, column?: Column): GameAction {
        return { type: GameActions.TAKE_MOVE, payload: { cell, row, column } };
    }
}