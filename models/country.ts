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
 * @interface Country
 */
export interface Country {
    /**
     * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     * @type {string}
     * @memberof Country
     */
    'code': string;
    /**
     * Name of country
     * @type {string}
     * @memberof Country
     */
    'name': string;
    /**
     * The user\'s country code. ISO_3166-1_alpha-3 code
     * @type {string}
     * @memberof Country
     */
    'three_letter_code': string;
}

