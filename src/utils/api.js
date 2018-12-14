import axios from 'axios'

const ENV = process.env.NODE_ENV

const PATH = {
  local: 'http://localhost:8008/api',
  development: '',
  production: '',
}

export default {
  login: (username, password) => axios.post(`${PATH[ENV]}-token-auth/`, { username, password })
}
