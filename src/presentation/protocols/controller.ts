import { HttpResponse, HttpRequest } from './http'

export interface Controller {
  handle: (httprequest: HttpRequest) => HttpResponse
}
