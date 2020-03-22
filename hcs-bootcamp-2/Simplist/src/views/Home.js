import React from 'react';
import { View, Text } from 'react-native';
import ItemList from '../components/ItemList';
import ItemAdder from '../components/ItemAdder';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addItem = item => {
        const { todos } = this.state;
        this.setState({
            todos: [...todos, item],
        });
    };

    render() {
        const { todos } = this.state;

        return (
            <View
                style={{
                    backgroundColor: 'crimson',
                    height: '100%',
                    width: '100%',
                    padding: 45,
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 30,
                    }}
                >
                    Home Screen
                </Text>
                <ItemAdder addItem={this.addItem} />
                <ItemList todos={todos} />
            </View>
        );
    }
}
