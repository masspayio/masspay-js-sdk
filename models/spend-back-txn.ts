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
 * @interface SpendBackTxn
 */
export interface SpendBackTxn {
    /**
     * A client defined spend back identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
     * @type {string}
     * @memberof SpendBackTxn
     */
    'client_spendback_id': string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof SpendBackTxn
     */
    'source_token': string;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof SpendBackTxn
     */
    'source_currency_code': string;
    /**
     * The amount to debit the user\'s wallet in source currency
     * @type {number}
     * @memberof SpendBackTxn
     */
    'amount': number;
    /**
     * A description for the spend back
     * @type {string}
     * @memberof SpendBackTxn
     */
    'notes'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this spendback. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof SpendBackTxn
     */
    'metadata'?: object;
}

