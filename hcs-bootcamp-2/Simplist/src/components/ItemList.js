import React from 'react';
import { View } from 'react-native';
import Item from './Item';

export default class ItemList extends React.Component {
    render() {
        const { todos, removeItem, toggleChecked, moveItem } = this.props;
        return (
            <View>
                {todos.map((todo, index) => {
                    return (
                        <Item
                            key={todo.id}
                            text={todo.text}
                            checked={todo.completed}
                            removeItem={() => removeItem(todo.id)}
                            toggleChecked={() => toggleChecked(todo)}
                            index={index}
                            listLength={todos.length}
                            moveItem={direction => moveItem(todo, direction)}
                        />
                    );
                })}
            </View>
        );
    }
}
