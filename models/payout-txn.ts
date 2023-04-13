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
 * @interface PayoutTxn
 */
export interface PayoutTxn {
    /**
     * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
     * @type {string}
     * @memberof PayoutTxn
     */
    'client_transfer_id'?: string;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof PayoutTxn
     */
    'source_currency_code'?: string;
    /**
     * The currency the funds will be deposited into. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
     * @type {string}
     * @memberof PayoutTxn
     */
    'destination_currency_code': string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof PayoutTxn
     */
    'source_token': string;
    /**
     * Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
     * @type {string}
     * @memberof PayoutTxn
     */
    'destination_token': string;
    /**
     * The amount to be sent for payout in source currency. i.e USD. Must be provided if source_amount is empty
     * @type {number}
     * @memberof PayoutTxn
     */
    'destination_amount'?: number;
    /**
     * The amount to be received by the payout in source currency. i.e USD. Must be provided if destination_amount is empty
     * @type {number}
     * @memberof PayoutTxn
     */
    'source_amount'?: number;
    /**
     * Token that represents set of attributes that associated with destination_token. For example, bank account, mobile account, wallet id, etc. If not provided, uses the last one used. 36 characters long
     * @type {string}
     * @memberof PayoutTxn
     */
    'attr_set_token'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this payout. Do not include PII as this object is not encrypted.
     * @type {string}
     * @memberof PayoutTxn
     */
    'metadata'?: string;
    /**
     * Should we notify the user via email/sms about status updates for this payout?
     * @type {boolean}
     * @memberof PayoutTxn
     */
    'notify_user'?: boolean;
}

