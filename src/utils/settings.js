import React from 'react'

const ENV = process.env.NODE_ENV

const PATHS = {
  local: 'http://localhost:8008',
  development: '****',
  production: '****',
}

const stripeApiKey = {
  local: '****',
  development: '****',
  production: '****'
}

export const PATH = PATHS[ENV]

export const STRIPE_API_KEY = stripeApiKey[ENV]

export const BANK_INFO = () => (
  <div className="bankInfo">
    <p>三菱UFJ銀行 (0005)</p>
    <p>渋谷支店 (135)</p>
    <p>普) 1940647</p>
    <p>カブシキガイシャ ヌーン</p>
  </div>
)
