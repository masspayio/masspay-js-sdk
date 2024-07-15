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
 * TransactionHistory
 */
export type TransactionHistory = {
  /**
   * Id
   */
  id?: string;
  /**
   * Reference to the transaction this history belongs to
   */
  transaction?: string;
  /**
   * Transaction status
   */
  status?: TransactionHistory.status;
  /**
   * Transaction status reason
   */
  status_reason?: string;
  /**
   * The date and time when the transaction history item was first created
   */
  created_at?: string;
  /**
   * The date and time when the transaction history item was last updated
   */
  updated_at?: string;
};
export namespace TransactionHistory {
  /**
     *
    Transaction status
     */
  export enum status {
    INITIATED = 'INITIATED',
    IN_PROGRESS = 'IN_PROGRESS',
    PENDING = 'PENDING',
    AUTHORIZED = 'AUTHORIZED',
    SETTLEMENT_REQUESTED = 'SETTLEMENT_REQUESTED',
    SETTLEMENT_COMPLETED = 'SETTLEMENT_COMPLETED',
    DECLINED = 'DECLINED',
    FAILED = 'FAILED',
    UNKNOWN = 'UNKNOWN',
    ABANDONED = 'ABANDONED',
    CANCELLED = 'CANCELLED',
    AUTHORIZATION_VOIDED = 'AUTHORIZATION_VOIDED',
    HPP_OPEN = 'HPP_OPEN',
    HPP_POST = 'HPP_POST',
    HPP_BCMC_OPEN = 'HPP_BCMC_OPEN',
    HPP_BCMC_POST = 'HPP_BCMC_POST',
    HPP_CARD_POST = 'HPP_CARD_POST',
    HPP_CARD_OPEN = 'HPP_CARD_OPEN',
    HPP_GIROPAY_OPEN = 'HPP_GIROPAY_OPEN',
    HPP_GIROPAY_POST = 'HPP_GIROPAY_POST',
    HPP_IDEAL_OPEN = 'HPP_IDEAL_OPEN',
    HPP_IDEAL_POST = 'HPP_IDEAL_POST',
    HPP_SEPA_OPEN = 'HPP_SEPA_OPEN',
    HPP_SEPA_POST = 'HPP_SEPA_POST',
    _3D_AUTHORIZED = '3D_AUTHORIZED',
    _3D_AUTHORIZATION_FAILED = '3D_AUTHORIZATION_FAILED',
    _3D_ENROLLED = '3D_ENROLLED',
    _3D_ENROLLMENT_FAILED = '3D_ENROLLMENT_FAILED',
    _3D_CHALLENGE_FAILED = '3D_CHALLENGE_FAILED',
  }
}
