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
import { DistributorsBalances200ResponseInnerBalancesInner } from './distributors-balances200-response-inner-balances-inner';

/**
 * 
 * @export
 * @interface DistributorsBalances200ResponseInner
 */
export interface DistributorsBalances200ResponseInner {
    /**
     * Distributor Name
     * @type {string}
     * @memberof DistributorsBalances200ResponseInner
     */
    'name': string;
    /**
     * Available balances
     * @type {Array<DistributorsBalances200ResponseInnerBalancesInner>}
     * @memberof DistributorsBalances200ResponseInner
     */
    'balances'?: Array<DistributorsBalances200ResponseInnerBalancesInner>;
}

