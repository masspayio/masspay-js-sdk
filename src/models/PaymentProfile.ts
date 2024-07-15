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
 * Payment profile
 */
export type PaymentProfile = {
  /**
   * Reference to the bank account linked to this payment profile
   */
  bank_account?: string;
  /**
   * A description of the payment profile
   */
  description?: string;
  /**
   * Website
   */
  website?: string;
  /**
   * If set to true, it prevents the user from performing any actions on this payment profile
   */
  disabled?: boolean;
  /**
   * The name of the payment profile
   */
  name?: string;
  /**
   * The display name of the payment profile; used for hosted payment pages
   */
  display_name?: string;
  /**
   * A list of processor ids attached to this payment profile
   */
  processors?: string;
  /**
   * A list of middleware ids attached to this payment profile
   */
  middleware?: string;
  /**
   * A webhook url that is called when a chargeback is updated
   */
  webhook_chargeback_update?: string;
  /**
   * A webhook url that is called when a refund is updated
   */
  webhook_refund_update?: string;
  /**
   * A webhook url that is called when a transaction is updated
   */
  webhook_transaction_update?: string;
  /**
   * We’ll try to deliver a webhook multiple times. When this fails we’ll send an email with the details to this email address
   */
  webhook_failed_email?: string;
  /**
   * Routing per payment product
   */
  routing?: Record<string, any>;
};
