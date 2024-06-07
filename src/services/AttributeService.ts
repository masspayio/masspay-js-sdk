/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { AllAttributesResp } from '../models/AllAttributesResp';
import type { AttrsRequirement } from '../models/AttrsRequirement';
import type { AttrTxn } from '../models/AttrTxn';

export class AttributeService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all stored user attributes
   * This **GET** endpoint is used to retrieve all stored user attributes for all destination token. <br> You can use this endpoint to retrieve user attributes and provide personalized service to your users based on their preferences, demographic data, or other relevant information. <br> To use this endpoint, you need to provide the `user_token` as parameters in the URL Path. <br> The endpoint will then return all the stored attributes for the provided user in the context of the destination token. If multiple `attribute set tokens` are available, all the sets and their values will be returned.
   * @param userToken Token representing the user to retrieve attributes for
   * @returns AllAttributesResp successful operation
   * @throws ApiError
   */
  public getAllAttrs(userToken: string): CancelablePromise<Array<AllAttributesResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/attribute/{user_token}',
      path: {
        user_token: userToken,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Store user attributes
   * This **POST** endpoint is used to store user attributes, allowing you to associate additional data with a user token. <br> To use this endpoint, you need to provide the `user_token`, `destination_token`, and `currency` as parameters in the URL Path. You also need to provide the attribute values as JSON parameters in the Request body. <br> If existing attributes are already stored for the user, this call will override their values.
   * @param userToken Token representing the user to store attributes for
   * @param destinationToken Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback.
   * @param currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.
   * @param requestBody Attr parameters to store
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any Succesfully created.
   * @throws ApiError
   */
  public storeAttrs(
    userToken: string,
    destinationToken: string,
    currency: string,
    requestBody: AttrTxn,
    idempotencyKey?: string
  ): CancelablePromise<{
    /**
     * `attr_set_token` associated with the stored attributes
     */
    attr_set_token: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/attribute/{user_token}/{destination_token}/{currency}',
      path: {
        user_token: userToken,
        destination_token: destinationToken,
        currency: currency,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Get user attributes for destination_token
   * This **GET** endpoint is used to retrieve user attributes for a specific destination token. <br> You can use this endpoint to retrieve user attributes and provide personalized service to your users based on their preferences, demographic data, or other relevant information. <br> To use this endpoint, you need to provide the `user_token`, `destination_token`, and `currency` as parameters in the URL Path. <br> The endpoint will then return all the required attributes for the provided user for the specified destination token. If any of the attributes already have a stored value, it will be returned as well.
   * @param userToken Token representing the user to retrieve attributes for
   * @param destinationToken Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback.
   * @param currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns AttrsRequirement successful operation
   * @throws ApiError
   */
  public getAttrs(
    userToken: string,
    destinationToken: string,
    currency: string,
    idempotencyKey?: string
  ): CancelablePromise<Array<AttrsRequirement>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/attribute/{user_token}/{destination_token}/{currency}',
      path: {
        user_token: userToken,
        destination_token: destinationToken,
        currency: currency,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }
}
