import { IAppState } from "./store.state";
import { Reducer, AnyAction } from "redux";
import { tassign } from 'tassign';
import { GameActions } from "./store.actions";

export function rootReducer(state: IAppState, action: AnyAction): IAppState {
    switch (action.type) {
        case GameActions.TAKE_MOVE: return takeMove(state, action);
    }

    return state;
}

function takeMove(state: IAppState, action: AnyAction): IAppState {
    let player = state.currentGame.currentPlayerIndex;
    let players = state.currentGame.players;

    //block row or column chosen on all boards
    //probably need a strongly typed action here


    let nextPlayer = player < players.length - 1 ? player + 1 : 0;
    return { ...state, currentGame: { ...state.currentGame, currentPlayerIndex: nextPlayer } };
}
