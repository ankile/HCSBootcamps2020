import React from 'react';
import { View, ScrollView, Text, AsyncStorage } from 'react-native';
import ItemList from '../components/ItemList';
import ItemAdder from '../components/ItemAdder';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incomplete: [],
            complete: [],
        };
    }

    componentDidMount() {
        // Fetch saved data
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const [[, complete], [, incomplete]] = await AsyncStorage.multiGet([
                'complete',
                'incomplete',
            ]);

            this.setState({
                complete: complete ? JSON.parse(complete) : [],
                incomplete: incomplete ? JSON.parse(incomplete) : [],
            });
        } catch (e) {
            // Handle dat error
            console.log(e);
        }
    };

    storeData = async () => {
        const { complete, incomplete } = this.state;
        try {
            await AsyncStorage.multiSet([
                ['complete', JSON.stringify(complete)],
                ['incomplete', JSON.stringify(incomplete)],
            ]);
        } catch (e) {
            // State of the art error handling
            console.log(e);
        }
    };

    addItem = itemText => {
        const { incomplete } = this.state;
        this.setState(
            {
                incomplete: [
                    ...incomplete,
                    { id: itemText, text: itemText, completed: false },
                ],
            },
            this.storeData
        );
    };

    removeItem = itemId => {
        const { incomplete, complete } = this.state;

        this.setState(
            {
                incomplete: incomplete.filter(i => i.id !== itemId),
                complete: complete.filter(i => i.id !== itemId),
            },
            this.storeData
        );
    };

    toggleChecked = item => {
        const { incomplete, complete } = this.state;

        item = { ...item, completed: !item.completed };
        if (item.completed) {
            this.setState(
                {
                    complete: [...complete, item],
                    incomplete: incomplete.filter(t => t.id !== item.id),
                },
                this.storeData
            );
        } else {
            this.setState(
                {
                    incomplete: [...incomplete, item],
                    complete: complete.filter(t => t.id !== item.id),
                },
                this.storeData
            );
        }
    };

    moveItem = (item, direction) => {
        const { incomplete, complete } = this.state;
        let arr = item.completed ? complete : incomplete;
        let newArr = Array.from(arr);
        let index = newArr.findIndex(t => t.id === item.id);

        let temp = newArr[index];
        newArr[index] = newArr[index + direction];
        newArr[index + direction] = temp;

        this.setState(
            {
                [item.completed ? 'complete' : 'incomplete']: newArr,
            },
            this.storeData
        );
    };

    render() {
        const { complete, incomplete, hideComplete } = this.state;

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
                            moveItem={this.moveItem}
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
                                    moveItem={this.moveItem}
                                />
                            )}
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    }
}
