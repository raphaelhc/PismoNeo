import Api from './api/neows-api'

const pathFeed = '/feed'
const { REACT_APP_NASA_API_KEY } = process.env

const neows = {
  neoListByRange (startDate, endDate, ) {
    return Api.request(`${pathFeed}`, {params: { start_date: startDate, end_date: endDate, api_key: REACT_APP_NASA_API_KEY, detailed: false }})
  }
}

export default neows