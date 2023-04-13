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
 * @interface ServicePayersInnerExchangeRateInner
 */
export interface ServicePayersInnerExchangeRateInner {
    /**
     * Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.
     * @type {string}
     * @memberof ServicePayersInnerExchangeRateInner
     */
    'currency_symbol': string;
    /**
     * Estimated rate
     * @type {number}
     * @memberof ServicePayersInnerExchangeRateInner
     */
    'exchange_rate': number;
}

