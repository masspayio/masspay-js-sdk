/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionAggregate = {
  /**
   * String that represents the period
   */
  period?: string;
  /**
   * The year to which the result applies
   */
  year?: number;
  /**
   * The number of transactions in a given period
   */
  count?: number;
  /**
   * The total volume of the transactions in a given period
   */
  volume?: number;
};
