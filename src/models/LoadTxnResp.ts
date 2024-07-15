/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoadTxnResp = {
  /**
   * Token that represents the load that was just created.
   */
  load_token: string;
  /**
   * Status that indicates whether the transaction was successfully processed. If `COMPLETED`, the load was successfully processed. `CANCELLED` indicates a generic error. and `SCHEDULED` means the load was successfully scheduled
   */
  status: LoadTxnResp.status;
  /**
   * The wallet token the load was deposited into
   */
  wallet_token: string;
};
export namespace LoadTxnResp {
  /**
     *
    Status that indicates whether the transaction was successfully processed. If `COMPLETED`, the load was successfully processed. `CANCELLED` indicates a generic error. and `SCHEDULED` means the load was successfully scheduled
     */
  export enum status {
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    SCHEDULED = 'SCHEDULED',
  }
}
