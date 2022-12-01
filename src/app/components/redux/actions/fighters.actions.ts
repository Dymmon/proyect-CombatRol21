import { createAction, props } from '@ngrx/store';

export const SETFIGHTERS = createAction(
    '[Combat21] SetFighters',
    props<{payload: any}>()
);
export const SETMOBSTATS = createAction(
    '[Combat21] SetMobStats',
    props<{payload: any}>()
)
export const SETPLAYERSSTATS = createAction(
    '[Combat21] SetPlayersStats',
    props<{payload: any}>()
)
export const RESET = createAction(
    '[Combat21] Reset'
);