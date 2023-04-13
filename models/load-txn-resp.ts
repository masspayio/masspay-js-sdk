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
 * @interface LoadTxnResp
 */
export interface LoadTxnResp {
    /**
     * Token that represents the load that was just created.
     * @type {string}
     * @memberof LoadTxnResp
     */
    'load_token': string;
    /**
     * Status that indicates whether the transaction was successfully processed. If `COMPLETED`, the load was successfully processed. `CANCELLED` indicates a generic error. and `SCHEDULED` means the load was successfully scheduled
     * @type {string}
     * @memberof LoadTxnResp
     */
    'status': LoadTxnRespStatusEnum;
}

export const LoadTxnRespStatusEnum = {
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
    Scheduled: 'SCHEDULED'
} as const;

export type LoadTxnRespStatusEnum = typeof LoadTxnRespStatusEnum[keyof typeof LoadTxnRespStatusEnum];


