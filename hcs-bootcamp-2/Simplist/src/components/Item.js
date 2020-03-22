import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

export default class Item extends React.Component {
    render() {
        const { text, checked, removeItem, toggleChecked } = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor: '#4392F1',
                    padding: 10,
                    margin: 5,
                    borderRadius: 5,
                }}
            >
                <CheckBox
                    center
                    checked={checked}
                    onPress={toggleChecked}
                    containerStyle={{
                        margin: -10,
                        marginLeft: 0,
                        padding: 0,
                    }}
                    checkedColor="#FFF"
                    uncheckedColor="#FFF"
                />

                <Text
                    style={{
                        textAlign: 'left',
                        fontSize: 18,
                        color: '#FFF',
                    }}
                >
                    {text}
                </Text>
                <Icon
                    name="clear"
                    containerStyle={{
                        position: 'absolute',
                        right: 10,
                        // borderWidth: 1,
                        padding: 3,
                    }}
                    onPress={removeItem}
                    color="#FFF"
                />
            </View>
        );
    }
}
