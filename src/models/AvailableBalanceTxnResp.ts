/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type AvailableBalanceTxnResp = {
  /**
   * Token representing your funding account. You should use this as source_token when paying out transactions.
   */
  token: string;
  /**
   * Your account's current available balance in USD
   */
  balance: number;
  /**
   * The currency the balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD
   */
  currency_code: string;
};
