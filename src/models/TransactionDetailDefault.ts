/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
/**
 * Transaction - Details - Default
 */
export type TransactionDetailDefault = {
  /**
   * Optional reference to a checkout object
   */
  checkout_id?: string;
  /**
   * The URL where the customer will be redirected once the transaction completes, regardless of whether it succeeds or fails
   */
  redirect_url: string;
  /**
   * Additional merchant metadata. Key-value pairs with a maximum of 1024 characters
   */
  merchant_data?: Record<string, any>;
};
