/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionLifecycle = {
  /**
   * Transaction status name
   */
  name?: TransactionLifecycle.name;
  /**
   * Count of transactions with this transaction status
   */
  count?: number;
  /**
   * Percentage of the total count of transactions
   */
  count_percentage?: number;
  /**
   * Total volume
   */
  volume?: number;
  /**
   * Percentage of the total volume of all transactions
   */
  volume_percentage?: number;
};
export namespace TransactionLifecycle {
  /**
     *
    Transaction status name
     */
  export enum name {
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
  }
}
