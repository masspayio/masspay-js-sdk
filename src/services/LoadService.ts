/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Loads } from '../models/Loads';
import type { LoadTxn } from '../models/LoadTxn';
import type { LoadTxnResp } from '../models/LoadTxnResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoadService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Resend balance notification
   * This **PUT** endpoint is used to resend a balance notification to a user with the specified `user_token`. The balance notification informs the user about the current balance in their account. <br> To use this endpoint, you need to provide the required parameter `user_token` in the URL Path. Additionally, you have the option to include an optional parameter `wallet_token` in the query parameters. The `wallet_token` can be used to specify a particular wallet associated with the user, if applicable. <br> Upon a successful request, the API will return a boolean response indicating the success of the balance notification resend operation.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Optional wallet token. If none is provided, select the first wallet available
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any OK
   * @throws ApiError
   */
  public resendBalanceNotification(
    userToken: string,
    walletToken?: string,
    idempotencyKey?: string
  ): CancelablePromise<{
    /**
     * True if notifcation was sent succesfully. False otherwise
     */
    success: boolean;
  }> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/payout/wallet/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        wallet_token: walletToken,
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
   * Initiate a load transaction
   * This **POST** endpoint is used to initiate a load transaction, allowing you to add funds to a user token's wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. You also need to provide the `client_load_id`, `source_token`, and amount as JSON parameters in the Request Body. The `client_load_id` is a unique identifier for the transaction that you can use to track it, while the `source_token` is the token or account from which the funds will be loaded. The amount parameter specifies the amount of funds to be loaded into the user's wallet. <br> The response will contain a JSON object indicating the status of the load transaction and any relevant details.
   * @param userToken Token representing the user to load
   * @param requestBody Load information
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns LoadTxnResp Successfully created.
   * @throws ApiError
   */
  public loadUser(userToken: string, requestBody: LoadTxn, idempotencyKey?: string): CancelablePromise<LoadTxnResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/load/{user_token}',
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
   * Get history of loads by user token
   * This **GET** endpoint is used to retrieve a transaction history of all loads that were made to the provided user token, including scheduled loads. <br> You can use this endpoint to obtain a comprehensive history of loads for the user token, allowing you to track and analyze their incoming payments over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a JSON array of load transactions, each including transactions details.
   * @param userToken The user token that needs to be fetched.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns Loads Successful operation.
   * @throws ApiError
   */
  public getUserLoadsByToken(userToken: string, idempotencyKey?: string): CancelablePromise<Array<Loads>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/load/{user_token}',
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
   * Resend load notification
   * This **PUT** endpoint is used to resend a load notification to the user associated with the provided `user_token` for a specific load transaction. <br> You can use this endpoint to help ensure that users are notified promptly and accurately of any incoming funds or other important payment events. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the `load_token` as a parameter in the Query string. The endpoint will then resend a notification to the user for the specified load transaction. <br> The response will contain a JSON object indicating the status of the request.
   * @param userToken Token representing the user to load/fetch loads for
   * @param loadToken Load token
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any Succesful operation.
   * @throws ApiError
   */
  public resendLoadNotification(
    userToken: string,
    loadToken: string,
    idempotencyKey?: string
  ): CancelablePromise<{
    /**
     * True if notifcation was sent succesfully. False otherwise
     */
    success: boolean;
  }> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/payout/load/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        load_token: loadToken,
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
   * Reverse a user load
   * This **DELETE** endpoint is used to reverse a load transaction that was already processed, allowing you to remove funds from a user's wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the load_token as a parameter in the Query string. <br> The endpoint will then attempt to reverse the specified load transaction. If the load is still in scheduled status, it will be marked as cancelled.
   * @param userToken Token representing the user to load/fetch loads for
   * @param loadToken Load token
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any Succesfully deleted.
   * @throws ApiError
   */
  public cancelUserLoad(userToken: string, loadToken: string, idempotencyKey?: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/payout/load/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        load_token: loadToken,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }
}
