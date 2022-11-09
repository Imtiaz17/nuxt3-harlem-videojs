import {
    createStore
} from '@harlem/core';

const STATE = {
    current_time: '',
    status: ''
};

export const {
    state,
    getter,
    mutation,
    ...store
} = createStore('video', STATE);

export const current_status = getter('current_status', state => {
    return state.status;
});

export const time = getter('time', state => {
    return state.current_time;
});

export const setStatus = mutation('setStatus', (state, payload: string) => {
    state.status = payload;
});

export const setTime = mutation('setTime', (state, payload: string) => {
    state.current_time = payload;
});
