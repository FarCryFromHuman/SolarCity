import { Structure } from "./pieces.model";

// version with Player back-reference
// class Board {
//     constructor(public player: Player, public rows: Row[], public cols: Column[], public cells: Cell[]) { }
// }

class PlayerBoard {
    constructor(public rows: Row[], public cols: Column[], public cells: Cell[]) { }
}

class Column {
    constructor(public name: string) { }
    activated: boolean = false;
}

class Row {
    constructor(public name: string) { }
    activated: boolean = false;
}

class Cell {
    constructor(public name: string) { }
    structure?: Structure;
    activated: boolean = false;
}

export { PlayerBoard, Column, Row, Cell }