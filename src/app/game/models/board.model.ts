import { SPACES } from "../rules/spaces";

// version with Player back-reference
// class Board {
//     constructor(public player: Player, public rows: Row[], public cols: Column[], public cells: Cell[]) { }
// }

class PlayerBoard {
    constructor(public rows: Row[], public cols: Column[], public spaces: Space[]) { }
}

class Column {
    constructor(public name: string) { }
    activated: boolean = false;
}

class Row {
    constructor(public name: string) { }
    activated: boolean = false;
}

class Space {
    constructor(public name: string) { }
    itemName: SPACES = 'EMPTY';
    itemType: 'Skyscraper' | 'SkyGarden' | 'Public Building';
    activated: boolean = false;
}

export { PlayerBoard, Column, Row, Space }