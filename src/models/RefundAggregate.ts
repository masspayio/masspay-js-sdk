/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type RefundAggregate = {
  /**
   * String that represents the period
   */
  period?: string;
  /**
   * The year to which the result applies
   */
  year?: number;
  /**
   * The number of refunds in a given period
   */
  count?: number;
  /**
   * The total amount of the refunds in a given period
   */
  amount?: number;
};
