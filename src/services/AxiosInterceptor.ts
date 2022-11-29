import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.request.use(async (config) => {
  if (config.headers && !config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_KEY}`
  }
  if (config.headers) config.headers['Content-Type'] = 'application/json'

  return config
})
