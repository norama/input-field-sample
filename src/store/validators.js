import { ActionTypes } from './types';
import { InputErrors } from './errors';

import { changeInputError } from './actions';

export const inputValidator = (store) => (next) => (action) => {

    if (action.type === ActionTypes.INPUT_CHANGED) {
        if (action.input.length > 10) {
            store.dispatch(changeInputError(InputErrors.TOO_LONG_INPUT));
            return;
        }
    }

    next(action);
}