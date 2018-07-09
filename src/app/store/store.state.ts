import { Game } from "../game/models/game.model";
import { PlayerBoard, Column, Row, Cell } from "../game/models/board.model";
import { Player } from "../game/models/player.model";

interface IAppState {
    currentGame?: Game;
};

const initialState: IAppState = {
    currentGame: null
};

export { IAppState, initialState }