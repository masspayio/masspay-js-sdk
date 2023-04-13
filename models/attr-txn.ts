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

// May contain unused imports in some cases
// @ts-ignore
import { AttrValue } from './attr-value';

/**
 * 
 * @export
 * @interface AttrTxn
 */
export interface AttrTxn {
    /**
     * 
     * @type {Array<AttrValue>}
     * @memberof AttrTxn
     */
    'values': Array<AttrValue>;
    /**
     * The token that represents a set of attributes for a specific payer. Optional, specify the value if you\'re trying to update a value of a specific attributes set.
     * @type {string}
     * @memberof AttrTxn
     */
    'attr_set_token'?: string;
}

