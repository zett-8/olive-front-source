export default () => {
  const ENV = process.env.NODE_ENV

  const PATH = {
    local: 'http://localhost:8008',
    development: '',
    production: '',
  }

  return PATH[ENV]
}
