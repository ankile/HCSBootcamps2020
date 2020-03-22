import React from 'react';
import { View, TextInput, Text } from 'react-native';

export default class ItemAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    updateText = (newText) => {
        this.setState({
            text: newText,
        });
    }

    submitItem = () => {
        this.props.submit(this.state.text);
        this.input.clear();
    }

    render() {
        return (
            <TextInput
                ref={(input) => {this.input = input}}
                onChangeText={this.updateText}
                onSubmitEditing={this.submitItem}
                style={
                    {
                        width: '100%',
                        height: 40,
                        backgroundColor: 'white',
                        borderWidth: 2,
                        borderRadius: 10,
                        padding: 10,
                    }
                }
            />
        )
    }
}
