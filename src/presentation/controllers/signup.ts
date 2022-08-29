import { HttpResponse, httpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  public handle (httpRequest: httpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
