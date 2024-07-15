/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { AutopayoutResp } from '../models/AutopayoutResp';
import type { AutopayRule } from '../models/AutopayRule';
import type { WalletTxnResp } from '../models/WalletTxnResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WalletService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Retrieve all available wallets for a user
   * This **GET** endpoint is used to retrieve all available wallets for a provided user token. <br> You can use this endpoint to obtain information about the wallets associated with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each wallet including `user_token`, `balance`, `currency_code`.
   * @param userToken Token representing the user who owns the wallet
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns WalletTxnResp Successful operation.
   * @throws ApiError
   */
  public getWallet(userToken: string, idempotencyKey?: string): CancelablePromise<Array<WalletTxnResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/wallet/{user_token}',
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
   * Get all AutoPayout rules
   * This **GET** endpoint is used to retrieve all autopayout rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopayout rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopayout rule, including the token, `destination_token` and percentage.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @returns AutopayoutResp Succesful operation.
   * @throws ApiError
   */
  public getAutopayoutRules(userToken: string, walletToken: string): CancelablePromise<Array<AutopayoutResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/wallet/{user_token}/{wallet_token}/autopayout',
      path: {
        user_token: userToken,
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
   * Add AutoPayout rule
   * This **POST** endpoint is used to add an autopayout rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopayout rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopayout rule, including the token, `destination_token` and percentage.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @param requestBody Autopayout rule configuration.
   * @returns AutopayoutResp Succesfully created.
   * @throws ApiError
   */
  public createAutopayoutRule(userToken: string, walletToken: string, requestBody?: AutopayRule): CancelablePromise<AutopayoutResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/wallet/{user_token}/{wallet_token}/autopayout',
      path: {
        user_token: userToken,
        wallet_token: walletToken,
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
   * Delete AutoPayout rule
   * This **DELETE** endpoint is used to delete an existing autopayout rule. <br> You can use this endpoint to remove an autopayout rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopayout rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @param token Autopayout token to delete
   * @returns void
   * @throws ApiError
   */
  public deleteAutopayoutRule(userToken: string, walletToken: string, token: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/payout/wallet/{user_token}/{wallet_token}/autopayout',
      path: {
        user_token: userToken,
        wallet_token: walletToken,
      },
      query: {
        token: token,
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
