import { updatePeople } from '../action-creators/people';
import { UPDATE_PEOPLE } from '../constants/actions/people';
import { createReducer } from '.';

type Types = typeof UPDATE_PEOPLE;
type State = People.Person[];
type UpdateAction = ReturnType<typeof updatePeople>;
type Action = UpdateAction;

const initialState: State = [];
const handlers = {
    [UPDATE_PEOPLE]: (state: State, action: UpdateAction) => action.payload,
};

export default createReducer<State, Types, Action>(initialState, handlers);
