import React from 'react';
import { Text, ScrollView } from 'react-native';
import ItemAdder from '../components/ItemAdder.js';
import ItemList from '../components/ItemList.js';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ['test1','test2','test3'],
        }
    }

    addItem = (item) => {
        this.setState({
            todo: [...this.state.todo, item],
        });
    }

    deleteItem = (item) => {
        var items = this.state.todo;
        var ix = items.indexOf(item);
        if (ix >= 0) {
            items.splice(ix,1);
            this.setState({
                todo: items,
            })
        }
    }

    render() {
        return (
            <ScrollView
                keyboardShouldPersistTaps='handled'
                style={
                    {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'crimson',
                        padding: 30,
                    }}
                scrollEnabled={false}
            >
                <ItemAdder submit={this.addItem}/>
                <Text style={{
                    fontSize: 30,
                    paddingTop: 20,
                }}>
                    To Do:
                </Text>
                <ItemList items={this.state.todo} deleteItem={this.deleteItem}/>
            </ScrollView>
        );
    }
}
