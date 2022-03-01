import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'

const getConfig = () => ({
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

const api = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config
  })

  axiosApi.request = (path, options) => {
    const mergedOptions = defaultsDeep(options, getConfig())

    return axiosApi(path, mergedOptions).then(resp => resp.data)
  }

  axiosApi.interceptors.response.use(null, onResponseError)

  return axiosApi
}

const onResponseError = error => {
    console.log(error.response.data);
    return Promise.reject(error)
}

export default api