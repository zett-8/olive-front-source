const ENV = process.env.NODE_ENV

const stripeApiKey = {
  local: 'pk_test_ReCanV8j6r2cNQgScUgSfTJV00GG2wEOWg',
  development: '',
  production: ''
}

export const STRIPE_API_KEY = stripeApiKey[ENV]
