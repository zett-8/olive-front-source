import axios from 'axios'

// const ENV = process.env.NODE_ENV
//
// const PATH = {
//   local: 'http://localhost:8008/api',
//   development: '',
//   production: '',
// }

export default {
  login: async () => {
    const res = await axios.post('http://localhost:8008/api-token-auth/', { username: 'noon@gmail.com', password: 'noon-inc' })
    return res.data
  },
}
