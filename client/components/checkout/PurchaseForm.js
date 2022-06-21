import React from 'react';
import { connect } from 'react-redux';

import { checkout } from '../../store/guest';

class PurchaseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      addressLine: '',
      country: '',
      zip: '',
      state: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.checkout(
      {
        user: {
          email: this.state.email,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          address: `${this.state.addressLine}, ${this.state.state} ${this.state.zip}, ${this.state.country} `,
        },
        cart: this.props.cart,
      },
      this.props.history
    );
  }

  render() {
    const { email, firstName, lastName, addressLine, country, zip, state } =
      this.state;

    return (
      <div className="purchase-form-container">
        <form className="purchase-form" onSubmit={this.handleSubmit}>
          <div className="form-fields">
            <label>Email</label>
            <input
              name="email"
              class="form-control"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                name="firstName"
                className="form-control"
                onChange={this.handleChange}
                value={firstName}
              />
            </div>

            <div class="col">
              <label>Last Name</label>
              <input
                name="lastName"
                className="form-control"
                onChange={this.handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="form-fields">
            <label>Address Line</label>
            <input
              name="addressLine"
              className="form-control"
              onChange={this.handleChange}
              value={addressLine}
            />
          </div>
          <div className="form-fields">
            <label>Country</label>
            <input
              name="country"
              className="form-control"
              onChange={this.handleChange}
              value={country}
            />
          </div>
          <div className="form-fields">
            <label>Zip</label>
            <input
              name="zip"
              className="form-control"
              onChange={this.handleChange}
              value={zip}
            />
          </div>
          <div className="form-fields">
            <label>State</label>
            <input
              name="state"
              className="form-control"
              onChange={this.handleChange}
              value={state}
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { checkout };

export default connect(null, mapDispatch)(PurchaseForm);
