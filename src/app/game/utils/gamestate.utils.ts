import { Player } from "../models/player.model";
import { Game } from "../models/game.model";
import { Space } from "../models/board.model";

//https://stackoverflow.com/questions/38434337/how-to-create-an-extension-method-in-typescript-for-date-data-type

// these are disgusting and all need to be rewritten
export const currentPlayer = (state: Game): Player => {
    return state.players[state.currentPlayerIndex];
}

export const adjacentSpaces = (state: Game, space: Space): Space[] => {
    let columnName = space.name[0];
    let rowName = space.name[1];
    let board = currentPlayer(state).board;

    let colNames = adjacentColNames(columnName);
    let rowNames = adjacentRowNames(rowName);
    return board.spaces.filter(
        s => colNames.includes(s.name[0]) || rowNames.includes(s.name[1]));
}

export const adjacentColNames = (columnName): String[] => {
    switch (columnName) {
        case 'A': return ['B'];
        case 'B': return ['A', 'C'];
        case 'C': return ['B', 'D'];
        case 'D': return ['C'];
    }
}

export const adjacentRowNames = (rowName): String[] => {
    switch (rowName) {
        case '1': return ['2'];
        case '2': return ['1', '3'];
        case '3': return ['2', '4'];
        case '4': return ['3'];
    }
}
