import React from 'react';
import { ScrollView } from 'react-native';
import Item from './Item';

export default class ItemList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ScrollView
                style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: 'lightblue',
                    borderRadius: 5,
                }}
            >
                {todos.map(todo => {
                    return <Item key={todo} text={todo} />;
                })}
            </ScrollView>
        );
    }
}
