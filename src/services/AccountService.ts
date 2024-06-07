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
import type { AvailableBalanceTxnResp } from '../models/AvailableBalanceTxnResp';

export class AccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get current available balance
   * This **GET** endpoint is used to retrieve the current available balance for the MassPay account. <br> You can use this endpoint to obtain information about the current balance in your account. <br> There are no required parameters needed to access this endpoint. <br> The response will include a JSON objects containing details for the current available balance, including the token, balance and `currency_code`.
   * @returns AvailableBalanceTxnResp successful operation
   * @throws ApiError
   */
  public getAccountBalance(): CancelablePromise<Array<AvailableBalanceTxnResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/account/balance',
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
   * Get certified account statement
   * This **GET** endpoint is used to retrieve a certified PDF ledger statement for a provided timeframe. <br> You can use this endpoint to obtain a ledger statement for your MassPay account for a specific time period. <br> To use this endpoint, you need to provide the `start_date` and `ending_date` as required parameters in the Query string of the URL. <br> The response will include a certified PDF ledger statement containing transaction details for the specified timeframe.
   * @param startDate Starting date of the statement
   * @param endingDate Ending date of the statement (not more than 31 days than `start_date`)
   * @returns any Successful operation.
   * @throws ApiError
   */
  public getAccountStatement(
    startDate: string,
    endingDate: string
  ): CancelablePromise<{
    /**
     * Base64 encoded byte representing the content of the file
     */
    readonly content: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/account/statement',
      query: {
        start_date: startDate,
        ending_date: endingDate,
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
