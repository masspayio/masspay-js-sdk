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
 * Payment Link - Details
 */
export type PaymentLinkDetailCreate = {
  /**
   * Id of checkout item
   */
  checkout_id?: string | null;
  /**
   * Allow the customer to change the amount
   */
  change_amount?: boolean;
  /**
   * Minimum allowed amount.
   */
  change_amount_min?: number;
  /**
   * Maximum allowed amount.
   */
  change_amount_max?: number;
};
