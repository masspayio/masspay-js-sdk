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
 * Settlement
 */
export type Settlement = {
  /**
   * Id
   */
  id?: string;
  /**
   * Reference to the organisation this transaction belongs to
   */
  organisation?: string;
  /**
   * Reference to the payment profile this settlement belongs to
   */
  payment_profile?: string | null;
  /**
   * Reference to the settlement profile this settlement belongs to
   */
  settlement_profile?: string | null;
  /**
   * A short description of this settlement
   */
  description?: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount?: number;
  /**
   * Fees is charged without a decimal place.
   */
  fees?: number;
  /**
   * Total count of transactions connected to this settlement
   */
  transaction_count?: number | null;
  /**
   * Total volume of transaction amounts
   */
  transaction_volume?: number | null;
  /**
   * Total count of refunds connected to this settlement
   */
  refund_count?: number | null;
  /**
   * Total volume of refund amounts
   */
  refund_volume?: number | null;
  /**
   * Total count of chargebac connected to this settlement
   */
  chargeback_count?: number | null;
  /**
   * Total volume of refund amounts
   */
  chargeback_volume?: number | null;
  /**
   * The date and time when the report was first created
   */
  created_at?: string;
};
