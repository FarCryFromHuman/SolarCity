import { PlayerBoard } from "./board.model";

export class Player {
    constructor(public number: number, public name?: string, public board?: PlayerBoard) { }
    loans: number;
    credits: number;
    points: number;
    isActive: boolean = false;
}