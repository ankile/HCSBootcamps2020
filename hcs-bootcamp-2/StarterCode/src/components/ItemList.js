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



# returns (d,1) the gradient of llc_obj(X, y, th, th0) with respect to th
def d_llc_obj_th(X, y, th, th0, lam):
    #return (2*lam*np.linalg.norm(th)) * d_nll_loss_th(X, y, th, th0)
    return d_nll_loss_th(X, y, th, th0)