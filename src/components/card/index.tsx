import React from 'react';
import { Text, View } from 'react-native';
import { ThemeContext, PALETTE } from '../../constants/app/theme';

interface Props {
    title: string;
    subtitle: string;
}

const Card = ({ title, subtitle }: Props) => (
    <ThemeContext.Consumer>
        {theme => (
            <View
                style={{
                    padding: 15,
                    backgroundColor: theme === 'light' ? PALETTE.white : PALETTE.darkTheme, // TODO App.Theme.light
                }}
            >
                <Text style={{ fontSize: 16 }}>{title}</Text>
                <Text style={{ marginTop: 4 }}>{subtitle}</Text>
            </View>
        )}
    </ThemeContext.Consumer>
);

export default Card;
