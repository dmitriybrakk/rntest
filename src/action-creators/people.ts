import { UPDATE_PEOPLE } from '../constants/actions/people';

export function updatePeople(people: People.Person[]) {
    return {
        type: UPDATE_PEOPLE,
        payload: people,
    };
}
