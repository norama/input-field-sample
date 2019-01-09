import { ActionTypes } from './types';

export function changeInputAction(input) {
    return {
        type: ActionTypes.INPUT_CHANGED,
        input
    };
}

export function changeInputError(error) {
    return {
        type: ActionTypes.INPUT_ERROR,
        error
    }
}