export interface FigthersState {
  fighters: string;
  players: number;
  mobs: number;
  mobStat: object;
  mobDices: number[];
  array: object[];
}

export const selectPlayers = (state: FigthersState) =>
  state.fighters["players"];

export const selectMobs = (state: FigthersState) => state.fighters["mobs"];

export const selectMobsStats = (state: FigthersState) =>
  state.fighters["mobStat"];

export const selectMobsDices = (state: FigthersState) =>
  state.fighters["mobDices"];

export const selectArray = (state: FigthersState) => state.fighters["array"];

export const selectParticipants = (state: FigthersState) => {
  return { players: state.fighters["array"], mobs: state.fighters["mobStat"] };
};

export const selectNumbers = (state: FigthersState) => {
  return { players: state.fighters["players"], mobs: state.fighters["mobs"] };
};
