import React from 'react'

const ENV = process.env.NODE_ENV

const PATHS = {
  local: 'http://localhost:8008',
  development: 'http://ec2co-ecsel-ldr54y7zto1q-1944992330.ap-northeast-1.elb.amazonaws.com:8008',
  production: 'http://alb-olive-prod-1218439794.ap-northeast-1.elb.amazonaws.com:8008',
}

const stripeApiKey = {
  local: 'pk_test_ReCanV8j6r2cNQgScUgSfTJV00GG2wEOWg',
  development: 'pk_test_ReCanV8j6r2cNQgScUgSfTJV00GG2wEOWg',
  production: 'pk_live_OHA1RGAlHpkVGFelM5ctt0a0003yTibExk'
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
