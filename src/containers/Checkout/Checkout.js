import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Checkout extends Component {
  componentWillMount() {
    this.props.onInitPurchase();
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.push('/checkout/contact-data');
  };

  render() {
    let summary = <Redirect to="/" />
    if (this.props.ingredients) {
    const purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null;
    summary = (
        <div>
          {purchaseRedirect}
          <CheckoutSummary
            ingredients={this.props.ingredients}
            onCheckoutCancelled={this.checkoutCancelledHandler}
            onCheckoutContinued={this.checkoutContinuedHandler} />
          <Route
            path={this.props.match.url + '/contact-data'}
            component={ContactData} />
        </div>
      )
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);