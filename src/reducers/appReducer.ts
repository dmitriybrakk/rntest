import { createReducer } from '.';
import { TOGGLE_THEME } from '../constants/actions/app';
import { toggleTheme } from '../action-creators/app';
import { THEME } from '../constants/app/theme';

type Types = typeof TOGGLE_THEME;
interface State {
    theme: App.Theme;
}
type ToggleThemeAction = ReturnType<typeof toggleTheme>;
type Action = ToggleThemeAction;

const initialState: State = {
    theme: THEME.light,
};
const handlers = {
    [TOGGLE_THEME]: (state: State) => ({
        ...state,
        theme: state.theme === App.Theme.light ? 'dark' : 'light',
    }),
};

export default createReducer<State, Types, Action>(initialState, handlers);
