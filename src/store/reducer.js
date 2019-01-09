import { ActionTypes } from './types';

const initialState = {
    input: ''
};

export default function reducer(state=initialState, action={}) {
    switch (action.type) {
        case ActionTypes.INPUT_CHANGED:
            return {
                input: action.input
            };

        default:
            return state;
    }
}

// selector

export function getInput(state) {
    return state.input;
}