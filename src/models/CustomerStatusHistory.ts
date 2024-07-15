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
 * CustomerStatusHistory
 */
export type CustomerStatusHistory = {
  /**
   * Customer ID.
   */
  id?: string;
  /**
   * Reference to the customer this history belongs to
   */
  customer?: string;
  /**
   * Customer status
   */
  status?: CustomerStatusHistory.status;
  /**
   * Customer status reason
   */
  status_reason?: string;
  /**
   * The date and time when the transaction history item was first created
   */
  created_at?: string;
};
export namespace CustomerStatusHistory {
  /**
     *
    Customer status
     */
  export enum status {
    UNVERIFIED = 'unverified',
    AUTO_UNVERIFIED = 'auto-unverified',
    AUTO_VERIFIED = 'auto-verified',
    VERIFIED = 'verified',
  }
}
