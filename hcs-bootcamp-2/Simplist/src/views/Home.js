import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import ItemList from '../components/ItemList';
import ItemAdder from '../components/ItemAdder';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addItem = itemText => {
        const { todos } = this.state;
        this.setState({
            todos: [
                ...todos,
                { id: itemText, text: itemText, completed: false },
            ],
        });
    };

    removeItem = itemId => {
        const { todos } = this.state;

        this.setState({ todos: todos.filter(i => i.id !== itemId) });
    };

    toggleChecked = itemId => {
        const { todos } = this.state;

        this.setState({
            todos: todos.map(t =>
                t.id === itemId ? { ...t, completed: !t.completed } : t
            ),
        });
    };

    render() {
        const { todos, hideComplete } = this.state;
        const complete = todos.filter(t => t.completed);
        const incomplete = todos.filter(t => !t.completed);

        return (
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    height: '100%',
                    width: '100%',
                    padding: 45,
                }}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 36,
                        margin: 5,
                        color: '#F9564F',
                    }}
                >
                    Simplist
                </Text>
                <ItemAdder addItem={this.addItem} />

                <ScrollView
                    style={{
                        borderRadius: 5,
                        // marginVertical: 10,
                        marginHorizontal: -5,
                    }}
                >
                    {incomplete.length === 0 ? (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                padding: 10,
                                margin: 5,
                                borderRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    textAlign: 'center',
                                }}
                            >
                                Nothing Left To Do!
                            </Text>
                        </View>
                    ) : (
                        <ItemList
                            todos={incomplete}
                            removeItem={this.removeItem}
                            toggleChecked={this.toggleChecked}
                        />
                    )}
                    {complete.length > 0 && (
                        <View
                            style={{
                                marginTop: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                                onPress={() =>
                                    this.setState({
                                        hideComplete: !hideComplete,
                                    })
                                }
                            >
                                Completed Items (
                                {hideComplete ? 'show' : 'hide'}):
                            </Text>
                            {!hideComplete && (
                                <ItemList
                                    todos={complete}
                                    removeItem={this.removeItem}
                                    toggleChecked={this.toggleChecked}
                                />
                            )}
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    }
}
