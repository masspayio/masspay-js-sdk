/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionAggregateLocation = {
  /**
   * Location, either country code or city name
   */
  location?: string;
  /**
   * The number of transactions
   */
  count?: number;
  /**
   * The total volume of the transactions
   */
  volume?: number;
};
