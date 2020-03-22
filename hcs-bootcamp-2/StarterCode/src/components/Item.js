import React from 'react';
import { View, Text } from 'react-native';

export default class Item extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <View
                style={{
                    backgroundColor: 'yellow',
                    padding: 10,
                    margin: 5,
                    borderRadius: 5,
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                    }}
                >
                    {text}
                </Text>
            </View>
        );
    }
}
