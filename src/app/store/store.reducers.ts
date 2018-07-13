import { IAppState } from "./store.state";
import { Reducer, AnyAction, combineReducers } from "redux";
import { tassign } from 'tassign';
import { GameActions } from "./store.actions";
import { Game } from "../game/models/game.model";
import { PlayerBoard, Column, Row, Space } from "../game/models/board.model";
import { Player } from "../game/models/player.model";

const gameStateReducer: Reducer<Game> = (state: Game = null, action: AnyAction): Game => {
    switch (action.type) {
        case GameActions.START_GAME: return startGame(state, action);
        case GameActions.TAKE_MOVE: return takeMove(state, action);
    }

    return state;
}

function startGame(state: Game, action: AnyAction): Game {
    let game = new Game();
    let playerCount = 4;
    let rowCount = 4;
    let colCount = 4;

    let createBoard = function (rowCount: number, colCount: number): PlayerBoard {
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let cols = Array<number>(colCount).fill(0).map((c, i) => new Column(letters.charAt(i)));
        let rows = Array<number>(rowCount).fill(0).map((r, i) => new Row((i + 1).toString()));
        let cells = new Array<Space>();
        for (let col of cols)
            for (let row of rows)
                cells.push(new Space(col.name + row.name));
        return new PlayerBoard(rows, cols, cells);
    }

    // create players with boards
    let playerNames = ['Austin', 'Emily', null, 'Matt']
    game.players = playerNames.map((p, i) =>
        new Player(i + 1, p, createBoard(rowCount, colCount)));

    // replace with correct rules later
    game.currentPlayerIndex = 0;

    return game;
}

function takeMove(state: Game, action: AnyAction): Game {
    let player = state.currentPlayerIndex;
    let players = state.players;

    //block row or column chosen on all boards
    //probably need a strongly typed action here


    let nextPlayer = player < players.length - 1 ? player + 1 : 0;
    return { ...state, currentPlayerIndex: nextPlayer };
}

export const rootReducer = combineReducers<IAppState>({
    currentGame: gameStateReducer
});
