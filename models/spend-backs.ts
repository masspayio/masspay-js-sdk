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
 * @interface SpendBacks
 */
export interface SpendBacks {
    /**
     * Token representing the load token
     * @type {string}
     * @memberof SpendBacks
     */
    'spendback_token': string;
    /**
     * The timestamp the spend back was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * @type {string}
     * @memberof SpendBacks
     */
    'time_of_spendback': string;
    /**
     * A client defined spend back identifier. This is the unique ID assigned to the spend back on your system. Max 50 characters.
     * @type {string}
     * @memberof SpendBacks
     */
    'client_spendback_id': string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof SpendBacks
     */
    'source_token': string;
    /**
     * Token that represents the wallet that received the funds. 36 characters long
     * @type {string}
     * @memberof SpendBacks
     */
    'wallet_token': string;
    /**
     * The amount to credit the user\'s wallet in source currency
     * @type {number}
     * @memberof SpendBacks
     */
    'amount': number;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof SpendBacks
     */
    'source_currency_code': string;
    /**
     * A description for the load. Will be visible to the user receiving the load
     * @type {string}
     * @memberof SpendBacks
     */
    'notes': string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this spendback. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof SpendBacks
     */
    'metadata'?: object;
}

