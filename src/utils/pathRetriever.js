export default () => {
  const ENV = process.env.NODE_ENV

  const PATH = {
    local: 'http://localhost:8008',
    development: 'http://ec2co-ecsel-ldr54y7zto1q-1944992330.ap-northeast-1.elb.amazonaws.com:8008',
    production: '',
  }

  return PATH[ENV]
}
