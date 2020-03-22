import React from 'react';
import { View } from 'react-native';
import Item from './Item';

export default class ItemList extends React.Component {
    render() {
        const { todos, removeItem, toggleChecked } = this.props;
        return (
            <View>
                {todos.map(todo => {
                    return (
                        <Item
                            key={todo.id}
                            text={todo.text}
                            checked={todo.completed}
                            removeItem={() => removeItem(todo.id)}
                            toggleChecked={() => toggleChecked(todo.id)}
                        />
                    );
                })}
            </View>
        );
    }
}
