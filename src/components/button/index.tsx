import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PALETTE } from '../../constants/app/theme';

interface Props {
    onPress: () => void;
    children: any;
}

const Card = ({ onPress, children }: Props) => (
    <TouchableOpacity onPress={onPress}>
        <Text
            style={{
                borderRadius: 4,
                margin: 8,
                padding: 8,
                backgroundColor: PALETTE.buttonColor,
                alignSelf: 'stretch',
                textAlign: 'center',
            }}
        >
            {children}
        </Text>
    </TouchableOpacity>
);

export default Card;
