import axios from 'axios'

const baseUrls = {
  randomUsers: 'https://thingproxy.freeboard.io/fetch/http://randomuser.me/api'
}

const httpProvider = axios.create({
  withCredentials: false
})

class DataRequest {
  constructor (endPoint, baseService = 'randomUsers') {
    this.provider = httpProvider
    this.baseUrl = baseUrls[baseService]
    this.endPoint = endPoint
  }

  list (queryParams) {
    const queryParamsToUse = queryParams ? `?${queryParams}` : ''
    return this.provider({
      method: 'get',
      url: `${this.baseUrl}${this.endPoint}${queryParamsToUse}`
    })
  }
}

export default DataRequest
