import { Game } from "../game/models/game.model";
import { PlayerBoard, Column, Row, Cell } from "../game/models/board.model";
import { Player } from "../game/models/player.model";

interface IAppState {
    currentGame: Game;
};

const initialState: IAppState = {
    currentGame: function () {
        let game = new Game();
        let playerCount = 4;
        let rowCount = 4;
        let colCount = 4;

        let createBoard = function (rowCount: number, colCount: number): PlayerBoard {
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let cols = Array<number>(colCount).fill(0).map((c, i) => new Column(letters.charAt(i)));
            let rows = Array<number>(rowCount).fill(0).map((r, i) => new Row((i + 1).toString()));
            let cells = new Array<Cell>();
            for (let col of cols)
                for (let row of rows)
                    cells.push(new Cell(col.name + row.name));
            return new PlayerBoard(rows, cols, cells);
        }

        // create players with boards
        let playerNames = ['Austin', 'Emily', null, 'Matt']
        game.players = playerNames.map((p, i) =>
            new Player(i + 1, p, createBoard(rowCount, colCount)));

        // replace with correct rules later
        game.currentPlayerIndex = 0;

        return game;
    }()
};

export { IAppState, initialState }