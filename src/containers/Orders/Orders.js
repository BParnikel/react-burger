import React, {Component} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Orders extends Component {
  componentDidMount() {
    this.props.onOrdersFetched(this.props.token, this.props.userId);
  }

  render() {
    const orders = this.props.orders.map(order => {
      return <Order
        price={+order.price}
        key={order.id}
        ingredients={order.ingredients}/>
    });

    return (
      <div>
        {orders}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrdersFetched: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));