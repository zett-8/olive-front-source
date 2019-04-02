import React from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { STRIPE_API_KEY } from '../utils/settings'

export default ComposedComponent =>
  class extends React.Component {
    render() {
      return (
        <StripeProvider apiKey={STRIPE_API_KEY}>
          <Elements>
            <ComposedComponent {...this.props} />
          </Elements>
        </StripeProvider>
      )
    }
  }
