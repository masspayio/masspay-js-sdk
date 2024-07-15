/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionAggregateDay = {
  /**
   * The date to which the count applies
   */
  date?: string;
  /**
   * The year to which the count applies
   */
  year?: number;
  /**
   * The month to which the count applies
   */
  month?: number;
  /**
   * The day to which the count applies
   */
  day?: number;
  /**
   * The number of transactions in a given period
   */
  count?: number;
  /**
   * The total volume of the transactions in a given period
   */
  amount?: number;
};
