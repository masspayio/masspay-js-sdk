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
 * @interface SpendBackTxnResp
 */
export interface SpendBackTxnResp {
    /**
     * Token that represents the spend back that was just created.
     * @type {string}
     * @memberof SpendBackTxnResp
     */
    'spendback_token': string;
    /**
     * A client defined spend back identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
     * @type {string}
     * @memberof SpendBackTxnResp
     */
    'client_spendback_id': string;
    /**
     * Status that indicates whether the transaction was successfully processed. If `success`, everything was processed correctly. `failure` indicates a generic error.
     * @type {string}
     * @memberof SpendBackTxnResp
     */
    'status': SpendBackTxnRespStatusEnum;
}

export const SpendBackTxnRespStatusEnum = {
    Success: 'success',
    Failure: 'failure'
} as const;

export type SpendBackTxnRespStatusEnum = typeof SpendBackTxnRespStatusEnum[keyof typeof SpendBackTxnRespStatusEnum];


