/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { TaxYearUserResp } from '../models/TaxYearUserResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaxService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get list of users' annual balance
   * This **GET**  endpoint is used to get tax information for a specific user identified by their `user_token`. It provides access to historical tax attribute values as well as the ability to perform attribute velocity checks. <br>  To use this endpoint, replace `user_token` in the URL path with the actual user token of the user whose tax information you want to retrieve. This endpoint's purpose is to aid in the identification of users with matching attribute values and to prevent fraudulent activities by monitoring unusual attribute value changes over time. It compares the provided attribute value to the historical attribute values for the same user to see if it meets the velocity check criteria.
   * @param amountThreshold If specified, only show users whose total balance exceeds the provided amount
   * @param taxYear The year for which we would like to obtain tax information for. If none provided, defaults to previous year.
   * @returns TaxYearUserResp Succesful operation.
   * @throws ApiError
   */
  public getTaxUsers(amountThreshold?: number, taxYear?: number): CancelablePromise<Array<TaxYearUserResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/tax',
      query: {
        amount_threshold: amountThreshold,
        tax_year: taxYear,
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

  /**
   * Get link for tax interview
   * This **GET**  endpoint is used to get a W8/W9 tax interview link for a specific user identified by their `user_token`. The user should be directed to link that is obtained by this endpoint.<br>To use this endpoint, replace `user_token` in the URL path with the actual user token of the user whose tax information you want to collect.
   * @param userToken
   * @param returnUrl If specified, the user will be redirected to this URL upon submission of the interview process
   * @returns any OK
   * @throws ApiError
   */
  public getTaxInterviewLink(
    userToken: string,
    returnUrl?: string
  ): CancelablePromise<{
    /**
     * URL for W8/W9 tax inteview
     */
    interview_url: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/{user_token}/tax',
      path: {
        user_token: userToken,
      },
      query: {
        return_url: returnUrl,
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
