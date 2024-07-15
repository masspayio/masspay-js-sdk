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
 * Merchant category code
 */
export type Mcc = {
  /**
   * Merchant category code
   */
  number?: string;
  /**
   * MCC title
   */
  title?: string;
  /**
   * Description of the MCC
   */
  description?: string;
  /**
   * Groups included in this MCC
   */
  includes?: string;
  /**
   * Similar to this MCC
   */
  similar?: string;
};
