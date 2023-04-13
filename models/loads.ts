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
 * @interface Loads
 */
export interface Loads {
    /**
     * Token representing the load token
     * @type {string}
     * @memberof Loads
     */
    'load_token': string;
    /**
     * The timestamp the load was processed. If not processed yet, a future date will be returned. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * @type {string}
     * @memberof Loads
     */
    'time_of_load': string;
    /**
     * A client defined load identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
     * @type {string}
     * @memberof Loads
     */
    'client_load_id': string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof Loads
     */
    'source_token': string;
    /**
     * Token that represents the wallet that received the funds. 36 characters long
     * @type {string}
     * @memberof Loads
     */
    'wallet_token': string;
    /**
     * The amount to credit the user\'s wallet in source currency
     * @type {number}
     * @memberof Loads
     */
    'amount': number;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof Loads
     */
    'source_currency_code': string;
    /**
     * A description for the load. Will be visible to the user receiving the load
     * @type {string}
     * @memberof Loads
     */
    'notes': string;
    /**
     * Status of the load
     * @type {string}
     * @memberof Loads
     */
    'status': LoadsStatusEnum;
    /**
     * Optional JSON object with attributes that can later be searched to locate this load. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof Loads
     */
    'metadata'?: object;
}

export const LoadsStatusEnum = {
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
    Scheduled: 'SCHEDULED'
} as const;

export type LoadsStatusEnum = typeof LoadsStatusEnum[keyof typeof LoadsStatusEnum];


