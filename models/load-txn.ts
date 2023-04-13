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
 * @interface LoadTxn
 */
export interface LoadTxn {
    /**
     * A client defined load identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
     * @type {string}
     * @memberof LoadTxn
     */
    'client_load_id': string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof LoadTxn
     */
    'source_token': string;
    /**
     * The amount to credit the user\'s wallet in source currency
     * @type {number}
     * @memberof LoadTxn
     */
    'amount': number;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof LoadTxn
     */
    'source_currency_code'?: string;
    /**
     * A description for the load. Will be visible to the user receiving the load
     * @type {string}
     * @memberof LoadTxn
     */
    'notes'?: string;
    /**
     * Should we notify the user via email that they\'ve received a load? If the user has no existing account, they will receive instructions to establish such account.
     * @type {boolean}
     * @memberof LoadTxn
     */
    'notify_user'?: boolean;
    /**
     * Future date/time to process the load on. If none is provided, it is processed right away. Time to be provided in UTC [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * @type {string}
     * @memberof LoadTxn
     */
    'time_to_process'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this load. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof LoadTxn
     */
    'metadata'?: object;
}

