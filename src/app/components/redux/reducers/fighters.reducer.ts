import { createReducer, on } from '@ngrx/store';
import * as fighterActions from '../actions/fighters.actions'
import { FigthersState } from '../interfaces/figthers.reducers';

export const initialState: FigthersState = {
    players: 0,
    mobs: 0,
    mobStat: {},
    array: []
};

export const fightersReducer = createReducer(
  initialState,
    on(fighterActions.SETFIGHTERS, (state, {payload}) => ({
        players: payload.players,
        mobs: payload.mobs,
        mobStat: state.mobStat,
        array: state.array})),
    on(fighterActions.SETMOBSTATS, (state, {payload}) => ({
        players: state.players,
        mobs: state.mobs,
        mobStat: payload.mobStat,
        array: state.array})),
    on(fighterActions.SETPLAYERSSTATS, (state, {payload}) => ({
        players: state.players,
        mobs: state.mobs,
        mobStat: state.mobStat,
        array: payload.array})),
    on(fighterActions.RESET, (state) => initialState)
);