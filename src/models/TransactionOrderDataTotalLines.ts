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
 * Transaction - OrderData - Total lines
 */
export type TransactionOrderDataTotalLines = {
  /**
   * Name of total line
   */
  name: string;
  /**
   * Type of total line. E.g. shipping/discount/vat/total/other
   */
  type: string;
  /**
   * Value of total line
   */
  value: number;
};
