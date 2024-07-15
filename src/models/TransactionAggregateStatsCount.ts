/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionAggregateStatsCount = {
  /**
   * Key value pairs of browser statistics
   */
  browsers?: Record<string, any>;
  /**
   * Key value pairs of day of the week statistics
   */
  dayOfWeek?: Record<string, any>;
  /**
   * Array of count per hour
   */
  timeOfDay?: Array<number>;
  /**
   * Key value pairs of platform statistics
   */
  platform?: Record<string, any>;
  /**
   * Key value pairs of issuer statistics
   */
  issuers?: Record<string, any>;
  /**
   * Key value pairs of payment scheme statistics
   */
  paymentSchemes?: Record<string, any>;
  /**
   * Key value pairs of transaction outcome statistics
   */
  transactionOutcomes?: Record<string, any>;
};
