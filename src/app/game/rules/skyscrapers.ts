import { Game } from "../models/game.model";
import { Space } from "../models/board.model";
import { currentPlayer, adjacentSpaces } from "../utils/gamestate.utils";

// CORE GAME SKYSCRAPERS
// VEL - Gain 1 ECoin for each adjacent empty space
export const VelActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += adjacentSpaces(state, skyscraper)
        .filter(s => s.itemName === 'EMPTY').length;
    return state;
}

// TWINS - Gain 4 ECoins if adjacent to at least one TWINS
export const TwinsActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    if (adjacentSpaces(state, skyscraper).some(s => s.itemName === 'TWINS'))
        player.credits += 4;
    return state;
}

// HIVE - Gain 2 ECoins for each empty space in the activating row/column

// SHAFT - Gain 3 ECoins
export const ShaftActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += 3;
    return state;
}

// ZONA - Gain 1 ECoin for each public strucuture in the city
export const ZonaActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += player.board.spaces.filter(s => s.itemType === 'Public Building').length;
    return state;
}

// TECHTREE - Gain 1 ECoin for each Skygarden in the city
export const TechtreeActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += player.board.spaces.filter(s => s.itemType === 'SkyGarden').length;
    return state;
}

// GEOSEED - Gain 2 ECoins for each adjacent city edge
export const GeoseedActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += 4 - adjacentSpaces(state, skyscraper).length;
    return state;
}

// NEON - No effect
export const NeonActivationEffect = (state: Game, skyscraper: Space): Game => state;

// HELIOS - Gain 1 ECoin for each player in the game
export const HeliosActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += state.players.length;
    return state;
}

// SPECTRUM - Gain ECoins equal to the current round
export const SpectrumActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += state.round;
    return state;
}

// CUBE - Gain 5 ECoins
export const CubeActivationEffect = (state: Game, skyscraper: Space): Game => {
    let player = currentPlayer(state);
    player.credits += 5;
    return state;
}

// NOVA - May spend 6 ECoins to gain 1 Solar Point

export type CORE_SKYSCRAPERS =
    'VEL' | 'TWINS' | 'HIVE' |
    'SHAFT' | 'ZONA' | 'TECHTREE' |
    'GEOSEED' | 'NEON' | 'HELIOS' |
    'SPECTRUM' | 'CUBE' | 'NOVA';

// add expansions to union type here
export type SKYSCRAPERS = CORE_SKYSCRAPERS;