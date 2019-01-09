import { ActionTypes } from './types';

export function changeInputAction(input) {
    return {
        type: ActionTypes.INPUT_CHANGED,
        input
    };
}