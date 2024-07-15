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
 * Refund
 */
export type Refund = {
  /**
   * Amount is charged without a decimal place. Currencies can have different decimals/exponentials.
   */
  amount?: number;
  /**
   * Refund reason
   */
  reason?: string;
  /**
   * A webhook url that is called when a refund is updated
   */
  webhook_refund_update?: string | null;
};
