import api from './base'

const baseApi = api('https://api.nasa.gov/neo/rest/v1')

const Api = {
  request (path, options) {
    return baseApi.request(path, options)
  }
}

export default Api