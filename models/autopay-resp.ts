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
 * @interface AutopayResp
 */
export interface AutopayResp {
    /**
     * Autopay token
     * @type {string}
     * @memberof AutopayResp
     */
    'token': string;
    /**
     * The destination_token to autopay (send payout to)
     * @type {string}
     * @memberof AutopayResp
     */
    'destination_token': string;
    /**
     * The percent of incoming load that should be autopaid to the destination_token
     * @type {number}
     * @memberof AutopayResp
     */
    'percentage': number;
}

