import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => {this.props.delete(this.props.text)}}
                style={{
                    width: '90%',
                    height: 40,
                    backgroundColor: 'green',
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 5,
                }}
            >
                <Text style={{
                    fontSize: 24,
                }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}
