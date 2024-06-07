/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type SpendBackTxnResp = {
  /**
   * Token that represents the spend back that was just created.
   */
  spendback_token: string;
  /**
   * A client defined spend back identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
   */
  client_spendback_id: string;
  /**
   * Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error.
   */
  status: SpendBackTxnResp.status;
};
export namespace SpendBackTxnResp {
  /**
     *
    Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error.
     */
  export enum status {
    SUCCESS = 'success',
    FAILURE = 'failure',
  }
}
