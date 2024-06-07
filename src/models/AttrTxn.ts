/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { AttrValue } from './AttrValue';
export type AttrTxn = {
  values: Array<AttrValue>;
  /**
   * The token that represents a set of attributes for a specific payer. Optional, specify the value if you're trying to update a value of a specific attributes set.
   */
  attr_set_token?: string;
};
