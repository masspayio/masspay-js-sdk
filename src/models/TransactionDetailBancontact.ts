/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionDetailBancontact = {
  /**
   * Trigger URL for mobile payment options in the form
   */
  bep_url?: string;
  /**
   * BIN of the Bancontact card used (first six digits of the Bancontact card)
   */
  bin?: string;
  /**
   * Last four digits of the Bancontact card used
   */
  last_four?: string;
  /**
   * Unique token representing the Bancontact card
   */
  token?: string;
  /**
   * Payment flow of the last attempt, if any. Either ecommerce (card number entry and 3D-Secure), qrcode (payment app triggered through QR code) or urlintent (payment app triggered through URL intent)
   */
  transactionflow?: string;
};
