import { toggleTheme } from '../action-creators/app';
import { TOGGLE_THEME } from '../constants/actions/app';
import { createReducer } from '.';

type Types = typeof TOGGLE_THEME;
interface State {
    theme: App.Theme;
}
type ToggleThemeAction = ReturnType<typeof toggleTheme>;
type Action = ToggleThemeAction;

const initialState: State = {
    theme: 'light',
};
const handlers = {
    [TOGGLE_THEME]: (state: State) => ({
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
    }),
};

export default createReducer<State, Types, Action>(initialState, handlers);
