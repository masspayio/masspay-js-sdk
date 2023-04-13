/* tslint:disable */
/* eslint-disable */
/**
 * MassPay API
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: support@masspay.io
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 * @interface PayoutTxnCommitResp
 */
export interface PayoutTxnCommitResp {
    /**
     * Token that represents the transaction that was just created.
     * @type {string}
     * @memberof PayoutTxnCommitResp
     */
    'payout_token': string;
    /**
     * Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error. `addtl_attr_req` indicates that in order to process this transaction, additional attributes are required to be updated for this customer. `ex_rate_expired` indicates that the transaction exchange rate has expired and a new transaction has to be created.
     * @type {string}
     * @memberof PayoutTxnCommitResp
     */
    'status': PayoutTxnCommitRespStatusEnum;
    /**
     * Code/pin that is required when collecting the money. Should be provided to the recipient to present to payout location.
     * @type {string}
     * @memberof PayoutTxnCommitResp
     */
    'pickup_code'?: string;
    /**
     * Description of errors preventing transfer from being injected.
     * @type {string}
     * @memberof PayoutTxnCommitResp
     */
    'errors'?: string;
}

export const PayoutTxnCommitRespStatusEnum = {
    Success: 'success',
    Failure: 'failure',
    AddtlAttrReq: 'addtl_attr_req',
    ExRateExpired: 'ex_rate_expired',
    Nsf: 'nsf'
} as const;

export type PayoutTxnCommitRespStatusEnum = typeof PayoutTxnCommitRespStatusEnum[keyof typeof PayoutTxnCommitRespStatusEnum];


