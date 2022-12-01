export interface FigthersState{
    players: number;
    mobs: number;
    mobStat: object;
    array: object[];
}

export const selectPlayers = (state: FigthersState) => state.players;

export const selectMobs = (state: FigthersState) => state.mobs;

export const selectMobsStats = (state: FigthersState) => state.mobStat;

export const selectArray = (state: FigthersState) => state.array;

export const selectParticipants = (state: FigthersState) => {return {players: state.array, mobs: state.mobStat}};

export const selectNumbers = (state: FigthersState) => {return {players: state.players, mobs: state.mobs}};