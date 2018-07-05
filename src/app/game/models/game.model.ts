import { Player } from "./player.model";

export class Game {
    constructor(public players?: Player[]) { }
    round: number = 0;
    currentPlayerIndex: number = -1;
}