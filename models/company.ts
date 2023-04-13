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
import { Service } from './service';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * base64 representation of the company logo
     * @type {string}
     * @memberof Company
     */
    'company_logo': string;
    /**
     * 
     * @type {Array<Service>}
     * @memberof Company
     */
    'services': Array<Service>;
    /**
     * Overall rating of provider calculated from feedback provided by users from previous trasnactions
     * @type {number}
     * @memberof Company
     */
    'rating': number;
    /**
     * A short description of the company
     * @type {string}
     * @memberof Company
     */
    'description': string;
    /**
     * The company name
     * @type {string}
     * @memberof Company
     */
    'company_name': string;
}

