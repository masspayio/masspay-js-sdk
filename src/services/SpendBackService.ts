/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { SpendBacks } from '../models/SpendBacks';
import type { SpendBackTxn } from '../models/SpendBackTxn';
import type { SpendBackTxnResp } from '../models/SpendBackTxnResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SpendBackService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get history of spend backs by user token
   * This **GET** endpoint is used to retrieve the history of spendbacks for a specific user token. <br> You can use this endpoint to help manage your payment operations and track the usage of funds by your users. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a list of all the historical spendbacks for the provided user token. The response will contain a JSON array with details for each spendback transaction.
   * @param userToken Token representing the user to fetch/initiate spend back
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns SpendBacks Succesful operation.
   * @throws ApiError
   */
  public getUserSpendbacksByToken(userToken: string, idempotencyKey?: string): CancelablePromise<Array<SpendBacks>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/spendback/{user_token}',
      path: {
        user_token: userToken,
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

  /**
   * Initiate a spend back transaction
   * This **POST** endpoint is used to initiate a spendback transaction to a provided user token. <br> You can use this endpoint to enable spendback transactions for your users and help them manage their funds more effectively. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, along with the required parameters in the request Body, including `client_spendback_id`, `source_token`, `source_currency_code` and `amount`. <br> The endpoint will then initiate the spendback transaction, transferring funds from the source token to the user token. The response will contain a JSON object indicating the status of the request and any relevant transaction details.
   * @param userToken Token representing the user to fetch/initiate spend back
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param requestBody Spend back information
   * @returns SpendBackTxnResp Succesfully created.
   * @throws ApiError
   */
  public initiateSpendback(userToken: string, idempotencyKey?: string, requestBody?: SpendBackTxn): CancelablePromise<SpendBackTxnResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/spendback/{user_token}',
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
}
