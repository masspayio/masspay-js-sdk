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
 * @interface AvailableBalanceTxnResp
 */
export interface AvailableBalanceTxnResp {
    /**
     * Token representing your funding account. You should use this as source_token when paying out transactions.
     * @type {string}
     * @memberof AvailableBalanceTxnResp
     */
    'token': string;
    /**
     * Your account\'s current available balance in USD
     * @type {number}
     * @memberof AvailableBalanceTxnResp
     */
    'balance': number;
    /**
     * The currency the balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD
     * @type {string}
     * @memberof AvailableBalanceTxnResp
     */
    'currency_code': string;
}

