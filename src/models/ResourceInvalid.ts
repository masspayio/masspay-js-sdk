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
 * Resource invalid
 */
export type ResourceInvalid = {
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
     * Key/value array of invalid fields
     */
    invalid_fields?: {
      /**
       * Error
       */
      field?: string;
    };
  };
  /**
   * The time when the error occurred
   */
  timestamp?: number;
};
