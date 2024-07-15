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
 * Webhook
 */
export type Webhook = {
  /**
   * Type of item this webhook is connected to
   */
  type?: Webhook.type;
  /**
   * Item id of the item this webhook is connected to
   */
  item_id?: string;
  /**
   * The status change this webhook communicates
   */
  status?: Webhook.status | null;
  /**
   * Status reason
   */
  status_reason?: string | null;
  /**
   * URL of the webhook
   */
  url?: string;
};
export namespace Webhook {
  /**
     *
    Type of item this webhook is connected to
     */
  export enum type {
    TRANSACTION = 'transaction',
    REFUND = 'refund',
    CHARGEBACK = 'chargeback',
    CARDLINK = 'cardlink',
    VALIDATIONRULESET = 'validationruleset',
    REPORT_GENERATED = 'report_generated',
    SUBSCRIPTION = 'subscription',
  } /**
     *
    The status change this webhook communicates
     */
  export enum status {
    INITIATED = 'INITIATED',
    IN_PROGRESS = 'IN_PROGRESS',
    PENDING = 'PENDING',
    AUTHORIZED = 'AUTHORIZED',
    PROCESSED = 'PROCESSED',
    SETTLEMENT_REQUESTED = 'SETTLEMENT_REQUESTED',
    SETTLEMENT_COMPLETED = 'SETTLEMENT_COMPLETED',
    DECLINED = 'DECLINED',
    FAILED = 'FAILED',
    UNKNOWN = 'UNKNOWN',
    ABANDONED = 'ABANDONED',
    HOLD = 'HOLD',
    CANCELLED = 'CANCELLED',
    AUTHORIZATION_VOIDED = 'AUTHORIZATION_VOIDED',
    OPEN = 'OPEN',
    IN_DISPUTE = 'IN_DISPUTE',
    WON = 'WON',
    LOST = 'LOST',
    CREATED = 'CREATED',
    DONE = 'DONE',
    EXPIRED = 'EXPIRED',
  }
}
