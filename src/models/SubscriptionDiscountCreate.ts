/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { SubscriptionDiscount } from './SubscriptionDiscount';
export type SubscriptionDiscountCreate = SubscriptionDiscount & {
  /**
   * Amount <table> <tr><td>fixed_cents</td><td>amount in cents without a decimal place</td></tr> <tr><td>percentage</td><td>the range is 0.0 - 1.0. So 1.0 equals 100%</td></tr> </table>
   */
  amount: number;
  /**
   * Discount type
   */
  type: SubscriptionDiscountCreate.type;
  /**
   * Discount name
   */
  name: string;
};
export namespace SubscriptionDiscountCreate {
  /**
     *
    Discount type
     */
  export enum type {
    PERCENTAGE = 'percentage',
    FIXED_CENTS = 'fixed_cents',
  }
}
