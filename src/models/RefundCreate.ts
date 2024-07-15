/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Refund } from './Refund';
export type RefundCreate = Refund & {
  /**
   * Amount is charged without a decimal place. Currencies can have different decimals/exponentials.
   */
  amount: number;
};
