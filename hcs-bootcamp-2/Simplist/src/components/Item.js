import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

export default class Item extends React.Component {
    render() {
        const {
            text,
            checked,
            removeItem,
            toggleChecked,
            index,
            listLength,
            moveItem,
        } = this.props;
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
                {index !== listLength - 1 && (
                    <Icon
                        name="arrow-downward"
                        containerStyle={{
                            position: 'absolute',
                            right: 65,
                            // borderWidth: 1,
                            padding: 3,
                        }}
                        onPress={() => moveItem(1)}
                        color="#FFF"
                    />
                )}
                {index !== 0 && (
                    <Icon
                        name="arrow-upward"
                        containerStyle={{
                            position: 'absolute',
                            right: 40,
                            // borderWidth: 1,
                            padding: 3,
                        }}
                        onPress={() => moveItem(-1)}
                        color="#FFF"
                    />
                )}
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
