import React from 'react';
import { ScrollView } from 'react-native';
import Item from './Item.js';

export default class ItemList extends React.Component {
    deleteItem = (item) => {
        this.props.deleteItem(item);
    }

    render() {
        return (
            <ScrollView style={{
                marginTop: 10,
                height: 500,
                backgroundColor: 'rgba(0,0,200,0.1)',
            }}>
                {this.props.items.map((item,key) => {
                    return (<Item text={item} delete={this.deleteItem} key={key}/>)
                })}
            </ScrollView>
        );
    }
}
