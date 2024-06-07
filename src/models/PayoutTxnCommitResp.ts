/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type PayoutTxnCommitResp = {
  /**
   * Token that represents the transaction that was just created.
   */
  payout_token: string;
  /**
   * Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error. `addtl_attr_req` indicates that in order to process this transaction, additional attributes are required to be updated for this customer. `ex_rate_expired` indicates that the transaction exchange rate has expired and a new transaction has to be created.
   */
  status: PayoutTxnCommitResp.status;
  /**
   * Code/pin that is required when collecting the money. Should be provided to the recipient to present to payout location.
   */
  pickup_code?: string;
  /**
   * Description of errors preventing transfer from being injected.
   */
  errors?: string;
};
export namespace PayoutTxnCommitResp {
  /**
     *
    Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error. `addtl_attr_req` indicates that in order to process this transaction, additional attributes are required to be updated for this customer. `ex_rate_expired` indicates that the transaction exchange rate has expired and a new transaction has to be created.
     */
  export enum status {
    SUCCESS = 'success',
    FAILURE = 'failure',
    ADDTL_ATTR_REQ = 'addtl_attr_req',
    EX_RATE_EXPIRED = 'ex_rate_expired',
    NSF = 'nsf',
  }
}
