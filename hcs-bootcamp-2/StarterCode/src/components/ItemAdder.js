import React from 'react';
import { TextInput, View } from 'react-native';

export default class ItemAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    updateText = newText => {
        this.setState({ text: newText });
    };

    submit = () => {
        const { addItem } = this.props;
        const { text } = this.state;

        addItem(text);
    };

    render() {
        return (
            <View
                style={{
                    marginTop: 5,
                    marginBottom: 5,
                }}
            >
                <TextInput
                    onChangeText={this.updateText}
                    onSubmitEditing={this.submit}
                    style={{
                        backgroundColor: 'white',
                        fontSize: 20,
                        padding: 8,
                        borderRadius: 5,
                    }}
                />
            </View>
        );
    }
}
