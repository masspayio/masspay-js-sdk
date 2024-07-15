/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { AddUBORequest } from '../models/AddUBORequest';
import type { CreateSubaccountTxn } from '../models/CreateSubaccountTxn';
import type { IDUpload } from '../models/IDUpload';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubaccountService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a subaccount
   * This **POST** endpoint is used to initiate create a subaccount under your organization. <br> You can use this endpoint to establish subaccounts which you can use to transact through the MassPay platform. <br> To use this endpoint, you need to provide the required parameters in the request Body, including `company_name`, `company_dba`, `incorporation_date`,  and other corporate related details. <br> The endpoint will then return a successful subaccount token for the newly created entity. The response will contain a JSON object indicating the status of the request and any relevant subaccount details.
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public createSubaccount(requestBody?: CreateSubaccountTxn): CancelablePromise<{
    /**
     * Token representing the subaccount
     */
    subaccount_token: string;
    /**
     * API key
     */
    api_key: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subaccount',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        504: `Gateway Timeout`,
      },
    });
  }

  /**
   * Add UBOs to subaccount
   * This **POST** endpoint is used to add UBOs to a subaccount under your organization. <br> To use this endpoint, you need to provide the required parameters in the request Body, including `first_name`, `last_name`, `tax_id`,  and other UBO details. <br> The endpoint will then return a successful subaccount UBO token for the newly added UBO. The response will contain a JSON object indicating the status of the request and any relevant subaccount UBO details.
   * @param subaccountToken
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public getSubaccountSubaccountTokenUbo(
    subaccountToken: string,
    requestBody?: AddUBORequest
  ): CancelablePromise<{
    /**
     * Token representing the subaccount UBO
     */
    subaccount_ubo_token: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subaccount/{subaccount_token}/ubo',
      path: {
        subaccount_token: subaccountToken,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        504: `Gateway Timeout`,
      },
    });
  }

  /**
   * Upload UBO ID photos
   * This **POST** endpoint is used to upload UBOs IDs. <br> Upload IDs for the provided UBO.
   * @param subaccountToken
   * @param uboToken
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public uploadSubaccountUboId(
    subaccountToken: string,
    uboToken: string,
    requestBody?: Array<IDUpload>
  ): CancelablePromise<Record<string, any> | null> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/subaccount/{subaccount_token}/ubo/{ubo_token}/id',
      path: {
        subaccount_token: subaccountToken,
        ubo_token: uboToken,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        504: `Gateway Timeout`,
      },
    });
  }
}
