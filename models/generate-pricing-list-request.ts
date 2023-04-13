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
 * @interface GeneratePricingListRequest
 */
export interface GeneratePricingListRequest {
    /**
     * 
     * @type {number}
     * @memberof GeneratePricingListRequest
     */
    'amount': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof GeneratePricingListRequest
     */
    'countries'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof GeneratePricingListRequest
     */
    'source_currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratePricingListRequest
     */
    'requesting_employee_username'?: string;
}

