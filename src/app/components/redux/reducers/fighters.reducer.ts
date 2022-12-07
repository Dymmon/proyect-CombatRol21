import { createReducer, on } from '@ngrx/store';
import * as fighterActions from '../actions/fighters.actions'
import { FigthersState } from '../interfaces/figthers.reducers';

export const initialState: FigthersState = {
    fighters: null,
    players: 0,
    mobs: 0,
    mobStat: {},
    mobDices: [],
    array: []
};

export const fightersReducer = createReducer(
  initialState,
    on(fighterActions.SETFIGHTERS, (state, {payload}) => ({
        fighters: null,
        players: payload.players,
        mobs: payload.mobs,
        mobStat: state.mobStat,
        mobDices: state.mobDices,
        array: state.array})),
    on(fighterActions.SETMOBSTATS, (state, {payload}) => ({
        fighters: null,
        players: state.players,
        mobs: state.mobs,
        mobStat: payload.mobStat,
        mobDices: state.mobDices,
        array: state.array})),
    on(fighterActions.SETMOBSDICES, (state, {payload}) => ({
        fighters: null,
        players: state.players,
        mobs: state.mobs,
        mobStat: state.mobStat,
        mobDices: payload.mobDices,
        array: state.array})),
    on(fighterActions.SETPLAYERSSTATS, (state, {payload}) => ({
        fighters: null,
        players: state.players,
        mobs: state.mobs,
        mobStat: state.mobStat,
        mobDices: state.mobDices,
        array: payload.array})),
    on(fighterActions.RESET, (state) => initialState)
);