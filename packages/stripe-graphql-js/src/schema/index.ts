import './address'
import './customer'
import './customers'
import './customer-shipping'
import './customer-tax'
import './customer-tax-location'
import './payment-methods'
import './payment-method'
import './payment-method-billing-details'
import './payment-method-card'
import './payment-method-card-checks'
import './payment-method-card-networks'
import './payment-method-card-three-d-secure-usage'
import './payment-method-card-wallet-masterpass'
import './payment-method-card-wallet-visa-checkout'
import './payment-method-card-wallet'
import './stripe'
import './subscriptions'
import './subscription'
import './subscription-items'
import './subscription-item'
import './subscription-item-billing-thresholds'
import './subscription-automatic-tax'
import './subscription-billing-thresholds'
import './subscription-pause-collection'
import './invoices'
import './invoice'
import './invoice-automatic-tax'
import './invoice-custom-field'
import './invoice-customer-shipping'
import './invoice-customer-tax-id'
import './invoice-line-item'
import './invoice-rendering-options'
import './invoice-status-transitions'
import './plan'
import './plan-transform-usage'
import './price'
import './product'
import './tax-rate'
import './test-clock'
import './billing-portal-session'

import { builder } from '../builder'

export const schema = builder.toSchema()
