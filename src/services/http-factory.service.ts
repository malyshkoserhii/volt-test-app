import axios from 'axios'

import { HttpService } from './http.service'

export class HttpFactoryService {
  createHttpService(): HttpService {
    return new HttpService(axios)
  }
}
