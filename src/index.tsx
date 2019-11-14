import React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from './constants/app/theme';
import People from './screens/people';

interface Props {
    theme: App.Theme;
}

const AppRouter = ({ theme }: Props) => (
    <ThemeContext.Provider value={theme}>
        <People />
    </ThemeContext.Provider>
);

const mapStateToProps = state => ({
    theme: state.app.theme,
});

const App = connect(mapStateToProps)(AppRouter);

export default App;
