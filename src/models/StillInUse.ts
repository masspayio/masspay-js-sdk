/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type StillInUse = {
  /**
   * 3-digit error identifier
   */
  code?: number;
  /**
   * A description of the error
   */
  message?: string;
  details?: {
    /**
     * Object type that is still in use
     */
    item?: string;
    /**
     * Object type that is using the object
     */
    object?: string;
    /**
     * Array of object ids still using the object
     */
    ids?: Array<string>;
  };
  /**
   * The time when the error occurred
   */
  timestamp?: string;
};
