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
 * Not found
 */
export type NotFound = {
  /**
   * 3-digit error identifier
   */
  code?: number;
  /**
   * A description of the error
   */
  message?: string;
  /**
   * Resource details
   */
  details?: {
    /**
     * Resource name
     */
    resource?: string;
    /**
     * Resource Id
     */
    id?: string;
  };
  /**
   * The time when the error occurred
   */
  timestamp?: number;
};
