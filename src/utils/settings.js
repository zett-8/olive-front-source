import React from 'react'

const ENV = process.env.NODE_ENV

const PATHS = {
  local: 'http://localhost:8008',
  development: 'http://ec2co-ecsel-ldr54y7zto1q-1944992330.ap-northeast-1.elb.amazonaws.com:8008',
  production: '',
}

const stripeApiKey = {
  local: 'pk_test_ReCanV8j6r2cNQgScUgSfTJV00GG2wEOWg',
  development: 'pk_test_ReCanV8j6r2cNQgScUgSfTJV00GG2wEOWg',
  production: ''
}

export const PATH = PATHS[ENV]

export const STRIPE_API_KEY = stripeApiKey[ENV]

export const BANK_INFO = () => (
  <div className="bankInfo">
    <p>銀行 001 支店 400</p>
    <p>普) 12345678</p>
    <p>カ)ヌーン</p>
  </div>
)
