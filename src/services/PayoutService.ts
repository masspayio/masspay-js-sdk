/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { PayoutTxn } from '../models/PayoutTxn';
import type { PayoutTxnCommitResp } from '../models/PayoutTxnCommitResp';
import type { PayoutTxnResp } from '../models/PayoutTxnResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PayoutService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Initiate a payout transaction
   * This **POST** endpoint is used to initiate a payout transaction from your account to a user with a specified token. <br> You can use this endpoint to pay out funds to your users, such as payments for services rendered or rewards for completing tasks. To use this endpoint, you need to provide the user token of the recipient in the URL Path. <br> The request body should include the funding source (`source_token`), payout destination (`destination_token`) and specify in which currency the payout should be made (`destination_currency_code`). <br> As a response API will return all details about your payout transaction.
   * @param userToken Token representing the user to pay out
   * @param requestBody Payout parameters for a quote
   * @param limit Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any Successfully created.
   * @throws ApiError
   */
  public initiatePayout(
    userToken: string,
    requestBody: PayoutTxn,
    limit?: number,
    idempotencyKey?: string
  ): CancelablePromise<PayoutTxnResp | PayoutTxnCommitResp> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/payout/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        limit: limit,
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
   * Get history of payouts by user token
   * This **GET** endpoint is used to retrieve the payout history for a user with the specified token. <br> You can use this endpoint to view all payouts made to a user, including the `payout_token`, `destinantion_token` and `destination_amount`. <br> To use this endpoint, you need to provide the user token of the recipient in the URL Path. <br> The response will include a JSON object containing an array of payout transactions for the specified user, with each transaction including details such as the transaction ID, payout amount, currency, payout status, and date and time of the payout.
   * @param userToken The user token that needs to be fetched.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param includePayerLogos Whether to include the payers logo in base64 format.
   * @returns PayoutTxnResp successful operation
   * @throws ApiError
   */
  public getUserPayoutsByToken(
    userToken: string,
    idempotencyKey?: string,
    includePayerLogos: boolean = false
  ): CancelablePromise<Array<PayoutTxnResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        include_payer_logos: includePayerLogos,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Commit payout transaction
   * This **PUT** endpoint is used to commit a previously created payout transaction. <br> Once a payout transaction is created, you can use this endpoint to commit the transaction and initiate the actual payout. <br> To use this endpoint, you need to provide the `user_token` and `payout_token` of the payout transaction you want to commit in the URL Path. <br> The response will include a JSON object containing details about the committed payout transaction, including the `payout_token`, `payout_status`, `pickup_code` and possible errors.
   * @param userToken Token representing the user to pay out
   * @param payoutToken Token representing the trsanaction. Retrieved from `/payout/{user_token}`
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns PayoutTxnCommitResp successful operation
   * @throws ApiError
   */
  public commitPayoutTxn(userToken: string, payoutToken: string, idempotencyKey?: string): CancelablePromise<PayoutTxnCommitResp> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/payout/{user_token}/{payout_token}',
      path: {
        user_token: userToken,
        payout_token: payoutToken,
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
   * Get status of a payout by payout token
   * This **GET** endpoint is used to retrieve the status of a payout transaction for a user with the specified token and payout token. <br> You can use this endpoint to check the status of a specific payout transaction, including whether the payout has been successfully processed or if there was an error. <br> To use this endpoint, you need to provide the `user_token` and `payout_token` in the URL Path. <br> The response will include a JSON object containing details about the payout transaction.
   * @param userToken Token representing the user to pay out
   * @param payoutToken Token representing the trsanaction. Retrieved from `/payout/{user_token}`
   * @param includePayerLogo Whether to include the payer logo in base64 format.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param forceStatusUpdate Attempts to get an updated status update from the payout destination
   * @returns PayoutTxnResp OK
   * @throws ApiError
   */
  public getPayoutStatus(
    userToken: string,
    payoutToken: string,
    includePayerLogo?: boolean,
    idempotencyKey?: string,
    forceStatusUpdate: boolean = false
  ): CancelablePromise<PayoutTxnResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/{user_token}/{payout_token}',
      path: {
        user_token: userToken,
        payout_token: payoutToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        force_status_update: forceStatusUpdate,
        include_payer_logo: includePayerLogo,
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
   * Get transaction confirmation details
   * This **PATCH** endpoint is used to obtain a PDF document with all the details of a payout transaction for a user with the specified token and payout token. <br> You can use this endpoint to obtain confirmation details about a specific payout transaction. <br> To use this endpoint, you need to provide the `user_token` and `payout_token` in the URL Path. <br> The response will include a PDF document containing all the details of the payout transaction.
   * @param userToken Token representing the user to pay out
   * @param payoutToken Token representing the trsanaction. Retrieved from `/payout/{user_token}`
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns any OK
   * @throws ApiError
   */
  public getTransactionConfirmationDetails(
    userToken: string,
    payoutToken: string,
    idempotencyKey?: string
  ): CancelablePromise<{
    content?: string;
  }> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/payout/{user_token}/{payout_token}',
      path: {
        user_token: userToken,
        payout_token: payoutToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }
}
