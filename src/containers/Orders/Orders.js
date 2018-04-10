import React, { Component } from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetched = [];
                for (let key in response.data) {
                    fetched.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetched });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        const orders = this.state.orders.map(order => {
            return <Order
                price={+order.price}
                key={order.id}
                ingredients={order.ingredients} />
        })

        return (
            <div>
                {orders}
            </div>
        )
    }
}

export default Orders;