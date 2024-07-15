/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionNotRefundable = {
  /**
   * 3-digit error identifier
   */
  code?: number;
  /**
   * A description of the error
   */
  message?: string;
  details?: Record<string, any>;
  /**
   * The time when the error occurred
   */
  timestamp?: number;
};
