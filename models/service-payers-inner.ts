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
import { ServicePayersInnerExchangeRateInner } from './service-payers-inner-exchange-rate-inner';

/**
 * 
 * @export
 * @interface ServicePayersInner
 */
export interface ServicePayersInner {
    /**
     * Token that represents the payout destination. 36 characters long
     * @type {string}
     * @memberof ServicePayersInner
     */
    'destination_token': string;
    /**
     * base64 representation of the payer logo
     * @type {string}
     * @memberof ServicePayersInner
     */
    'payer_logo': string;
    /**
     * Name of payer
     * @type {string}
     * @memberof ServicePayersInner
     */
    'payer_name': string;
    /**
     * Lists all available currencies and their estimated rates
     * @type {Array<ServicePayersInnerExchangeRateInner>}
     * @memberof ServicePayersInner
     */
    'exchange_rate': Array<ServicePayersInnerExchangeRateInner>;
    /**
     * Service fee
     * @type {number}
     * @memberof ServicePayersInner
     */
    'fee': number;
    /**
     * The maximum amount the user can send with this service. 0 if no upper limit
     * @type {number}
     * @memberof ServicePayersInner
     */
    'max_limit': number;
    /**
     * The minimum amount the user can send with this service. 0 if no lower limit
     * @type {number}
     * @memberof ServicePayersInner
     */
    'min_limit': number;
    /**
     * Optional return field. Will only show if `limit` parameter is provided
     * @type {number}
     * @memberof ServicePayersInner
     */
    'source_amount'?: number;
    /**
     * Total number of locations. Mostly relevant for cash pickup services. 0 if unknown or irrelevant
     * @type {number}
     * @memberof ServicePayersInner
     */
    'number_of_locations'?: number;
    /**
     * Estimated availability of funds. When funds would be available to pickup/deposited
     * @type {string}
     * @memberof ServicePayersInner
     */
    'estimated_availability'?: string;
    /**
     * When available, additional description that explains the service offered or requirements for funds delivery.
     * @type {string}
     * @memberof ServicePayersInner
     */
    'additional_description'?: string;
}

