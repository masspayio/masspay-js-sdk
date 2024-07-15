/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { AttrVelocityRequest } from '../models/AttrVelocityRequest';
import type { IDUpload } from '../models/IDUpload';
import type { KYCSession } from '../models/KYCSession';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class KycService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Attributes velocity check
   * This **POST** endpoint is used to perform an attributes velocity check to identify users with matching attribute values. <br> You can use this endpoint to help prevent fraudulent activities by monitoring for unusual attribute value changes over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL path and the required parameters in the request Body. <br> The endpoint will then compare the provided attribute value with the historical attribute values for the same user and determine if it meets the velocity check criteria.
   * @param userToken Token representing the user to retrieve attributes for
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param requestBody
   * @returns string Succesfully created.
   * @throws ApiError
   */
  public findAttributesVelocity(
    userToken: string,
    idempotencyKey?: string,
    requestBody?: AttrVelocityRequest
  ): CancelablePromise<Array<string>> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/attribute/{user_token}/velocity',
      path: {
        user_token: userToken,
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
   * Get an Au10tix session link
   * This **GET** endpoint is used to obtain a link to an Au10tix session for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Au10tix platform. <br> The response will contain the session link as a URL in a JSON format.
   * @param userToken Token representing the user to retrieve attributes for
   * @returns any Succesful operation.
   * @throws ApiError
   */
  public getUserUserTokenKycAu10Tix(userToken: string): CancelablePromise<{
    /**
     * URL for Au10tix session that can be used by redirecting the payee to the URL.
     */
    session_url: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/user/{user_token}/kyc/au10tix',
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
   * Upload ID photos
   * Upload IDs for the provided user. This is an optional endpoint if the images are captured through means other than the link that is generated in the attributes.
   * @param userToken Token representing the user to retrieve attributes for
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public uploadIdPhotos(userToken: string, requestBody?: Array<IDUpload>): CancelablePromise<Record<string, any> | null> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/user/{user_token}/kyc/id',
      path: {
        user_token: userToken,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        504: `Gateway Timeout`,
      },
    });
  }

  /**
   * Get all KYC sessions
   * This **GET** endpoint is used to obtain all previous KYC sessions for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path.
   * @param userToken Token representing the user to retrieve attributes for
   * @returns KYCSession Succesful operation.
   * @throws ApiError
   */
  public getUserUserTokenKycAttempts(userToken: string): CancelablePromise<Array<KYCSession>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/user/{user_token}/kyc/id',
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
   * Get a Veriff session link
   * This **GET** endpoint is used to obtain a link to a Veriff session for the user with the provided user token. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Veriff platform. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain the session link as a URL in a JSON format.
   * @param userToken Token representing the user to retrieve attributes for
   * @returns any Succesful operation.
   * @throws ApiError
   */
  public getUserUserTokenKycVeriff(userToken: string): CancelablePromise<{
    /**
     * URL for Veriff session that can be used by the SDKs (https://developers.veriff.com/#integrations) or by redirecting the payee to the URL.
     */
    session_url: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/user/{user_token}/kyc/veriff',
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
}
