/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { CustomerGet } from './CustomerGet';
export type CustomerAggregateBestDetails = {
  customer?: CustomerGet;
  /**
   * Customer transaction count
   */
  count?: number;
  /**
   * Customer transaction volume
   */
  volume?: number;
};
