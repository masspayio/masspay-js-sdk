/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionDetailDiscount = {
  /**
   * The ID of the subscription discount object
   */
  id?: string;
  /**
   * Discount type
   */
  type?: TransactionDetailDiscount.type;
  /**
   * Discount amount, should be amount in cents without decimal place if type is equal to fixed_cents. If type is equal to percentage, then it's a range 0.0 - 1.0
   */
  amount?: number;
  /**
   * Original transaction amount
   */
  original_transaction_amount?: number;
};
export namespace TransactionDetailDiscount {
  /**
     *
    Discount type
     */
  export enum type {
    PERCENTAGE = 'percentage',
    FIXED_CENTS = 'fixed_cents',
  }
}
