import axios from 'axios'

axios.defaults.baseURL = 'http:/localhost:8001'

export function login(username, password) {
  let res = axios.post('/login', { username, password })
  return res
}