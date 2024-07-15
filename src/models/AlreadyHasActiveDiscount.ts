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
 * Subscription already has an active discount, no more can't be added
 */
export type AlreadyHasActiveDiscount = {
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
     * Discount id attached to a subscription
     */
    id?: string;
  };
  /**
   * The time when the error occurred
   */
  timestamp?: number;
};
