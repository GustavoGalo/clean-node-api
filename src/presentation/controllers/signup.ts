import { HttpResponse, httpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'

export class SignUpController {
  public handle (httpRequest: httpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
