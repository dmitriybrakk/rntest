import React from 'react';
import { RefreshControl, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/button';
import { TOGGLE_THEME } from '../../constants/actions/app';

interface Props {
    withThemeSwitcher: boolean;
    toggleTheme: () => void;
    onRefresh: () => void;
    loading: boolean;
    children: any;
}

const List = ({ withThemeSwitcher, toggleTheme, onRefresh, loading, children }: Props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={loading} />}>
            {loading && <ActivityIndicator />}
            {!loading && (
                <>
                    {withThemeSwitcher && <Button onPress={toggleTheme}>Toogle theme</Button>}
                    {children}
                </>
            )}
        </ScrollView>
    </SafeAreaView>
);

List.defaultProps = {
    withThemeSwitcher: true,
};

const mapDispatchToProps = dispatch => ({
    toggleTheme: () => dispatch({ type: TOGGLE_THEME }),
});

export default connect(null, mapDispatchToProps)(List);
