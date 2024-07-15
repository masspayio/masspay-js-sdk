/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionDetailFraud = {
  /**
   * Advised action by fraud provider
   */
  action?: TransactionDetailFraud.action;
  /**
   * Reason code for advised action
   */
  reason_code?: string;
  /**
   * Recommendation description
   */
  recommendation?: string;
  /**
   * Name of the fraud provider
   */
  provider?: string;
};
export namespace TransactionDetailFraud {
  /**
     *
    Advised action by fraud provider
     */
  export enum action {
    APPROVE = 'APPROVE',
    DECLINE = 'DECLINE',
    VERIFICATION_REQUIRED = 'VERIFICATION_REQUIRED',
    WATCH = 'WATCH',
    NOT_REVIEWED = 'NOT_REVIEWED',
  }
}
