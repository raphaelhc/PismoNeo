import Api from './api/pismoneo-api'

const feedPath = '/feed'
// eslint-disable-next-line no-undef
const { REACT_APP_NASA_API_KEY } = process.env

const PismoNEO = {
  getNeoByRange (startDate, endDate) {
    return Api.request(feedPath, {params: { start_date: startDate, end_date: endDate, api_key: REACT_APP_NASA_API_KEY, detailed: false }})
  }
}

export default PismoNEO