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
import type { AutopayResp } from '../models/AutopayResp';
import type { AutopayRule } from '../models/AutopayRule';
import type { WalletTxnResp } from '../models/WalletTxnResp';

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
      url: '/wallet/{user_token}',
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
   * Get all AutoPay rules
   * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @returns AutopayResp Succesful operation.
   * @throws ApiError
   */
  public getAutopayRules(userToken: string, walletToken: string): CancelablePromise<Array<AutopayResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/wallet/{user_token}/{wallet_token}/autopay',
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
   * Add AutoPay rule
   * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage. <br> Note: AutoPay can only be created on wallets that have the same currency as the `destination_token`. It cannot initiate transactions with  an exchange rate.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @param requestBody Autopay rule configuration.
   * @returns AutopayResp Succesfully created.
   * @throws ApiError
   */
  public createAutopayRule(userToken: string, walletToken: string, requestBody?: AutopayRule): CancelablePromise<AutopayResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/wallet/{user_token}/{wallet_token}/autopay',
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
   * Delete AutoPay rule
   * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @param token Autopay token to delete
   * @returns void
   * @throws ApiError
   */
  public deleteAutopayRule(userToken: string, walletToken: string, token: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/wallet/{user_token}/{wallet_token}/autopay',
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
