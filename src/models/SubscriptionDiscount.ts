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
 * SubscriptionDiscount
 */
export type SubscriptionDiscount = {
  /**
   * Amount <table> <tr><td>fixed_cents</td><td>amount in cents without a decimal place</td></tr> <tr><td>percentage</td><td>the range is 0.0 - 1.0. So 1.0 equals 100%</td></tr> </table>
   */
  amount?: number;
  /**
   * Discount type
   */
  type?: SubscriptionDiscount.type;
  /**
   * Discount name
   */
  name?: string;
  /**
   * Minimum amount If set, the discount can only be applied to a subscription of a certain amount. Amount in cents without a decimal place.
   */
  minimum_amount?: number | null;
  /**
   * Duration If set it will be applied to this number of cycles. If not set it will be applied infinitely.
   */
  duration?: number | null;
  /**
   * Limit to first time order If true this discount can only be added to a subscription before the first payment has been executed.
   */
  limit_to_first_order?: boolean;
};
export namespace SubscriptionDiscount {
  /**
     *
    Discount type
     */
  export enum type {
    PERCENTAGE = 'percentage',
    FIXED_CENTS = 'fixed_cents',
  }
}
