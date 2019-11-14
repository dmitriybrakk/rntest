import { combineReducers, Action } from 'redux';
import appReducer from './appReducer';
import peopleReducer from './peopleReducer';

type Handlers<State, Types extends string, Actions extends Action<Types>> = {
    readonly [Type in Types]: (state: State, action: Actions) => State;
};

export function createReducer<State, Types extends string, Actions extends Action<Types>>(
    initialState: State,
    handlers: Handlers<State, Types, Actions>,
) {
    return function(state = initialState, action: Actions) {
        return handlers[action.type] ? handlers[action.type as Types](state, action) : state;
    };
}

export default combineReducers({
    app: appReducer,
    people: peopleReducer,
});
