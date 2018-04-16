import React, {Component} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Orders extends Component {
  componentDidMount() {
    this.props.onOrdersFetched();
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
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrdersFetched: () => dispatch(actions.fetchOrders())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));