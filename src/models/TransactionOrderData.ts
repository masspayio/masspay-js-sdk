/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { TransactionOrderDataProductLines } from './TransactionOrderDataProductLines';
import type { TransactionOrderDataTotalLines } from './TransactionOrderDataTotalLines';
/**
 * Transaction - OrderData
 */
export type TransactionOrderData = {
  /**
   * Order lines for each product
   */
  product_lines: Array<TransactionOrderDataProductLines>;
  /**
   * For shipping costs, discounts, VAT and totals
   */
  total_lines: Array<TransactionOrderDataTotalLines>;
};
