import { createReducer } from '.';
import { UPDATE_PEOPLE } from '../constants/actions/people';
import { updatePeople } from '../action-creators/people';

type Types = typeof UPDATE_PEOPLE;
type State = People.Person[];
type UpdateAction = ReturnType<typeof updatePeople>;
type Action = UpdateAction;

const initialState: State = [];
const handlers = {
    [UPDATE_PEOPLE]: (state: State, action: UpdateAction) => action.payload,
};

export default createReducer<State, Types, Action>(initialState, handlers);
