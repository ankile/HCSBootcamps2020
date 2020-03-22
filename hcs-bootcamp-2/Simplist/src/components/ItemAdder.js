import React, { createRef } from 'react';
import { TextInput, View } from 'react-native';

export default class ItemAdder extends React.Component {
    text = '';

    // Create a reference to pass to the input field so it can be accessed later
    inputRef = createRef(null);

    updateText = newText => {
        this.text = newText;
    };

    submit = () => {
        const { addItem } = this.props;

        // If this element is in the DOM, get it and clear its contents
        if (this.inputRef) {
            this.inputRef.current.clear();
        }

        addItem(this.text);
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
                    ref={this.inputRef}
                    onChangeText={this.updateText}
                    onSubmitEditing={this.submit}
                    clearButtonMode="always"
                    placeholder="New todo-item"
                    enablesReturnKeyAutomatically
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
