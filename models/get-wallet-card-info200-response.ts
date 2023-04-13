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
 * MassPay Card Information
 * @export
 * @interface GetWalletCardInfo200Response
 */
export interface GetWalletCardInfo200Response {
    /**
     * 16 Digits card number
     * @type {number}
     * @memberof GetWalletCardInfo200Response
     */
    'card_number': number;
    /**
     * 3 Digits cvv code
     * @type {string}
     * @memberof GetWalletCardInfo200Response
     */
    'cvv': string;
    /**
     * Card expiration date
     * @type {string}
     * @memberof GetWalletCardInfo200Response
     */
    'expiration_date': string;
    /**
     * Card pin number (used in ATM machines)
     * @type {string}
     * @memberof GetWalletCardInfo200Response
     */
    'pin_number': string;
    /**
     * Available balance on the card
     * @type {number}
     * @memberof GetWalletCardInfo200Response
     */
    'balance': number;
    /**
     * Card type
     * @type {string}
     * @memberof GetWalletCardInfo200Response
     */
    'type': GetWalletCardInfo200ResponseTypeEnum;
    /**
     * Status of the card
     * @type {string}
     * @memberof GetWalletCardInfo200Response
     */
    'status': GetWalletCardInfo200ResponseStatusEnum;
}

export const GetWalletCardInfo200ResponseTypeEnum = {
    Visa: 'VISA',
    Mastercard: 'MASTERCARD',
    Discover: 'DISCOVER',
    Amex: 'AMEX',
    Unionpay: 'UNIONPAY'
} as const;

export type GetWalletCardInfo200ResponseTypeEnum = typeof GetWalletCardInfo200ResponseTypeEnum[keyof typeof GetWalletCardInfo200ResponseTypeEnum];
export const GetWalletCardInfo200ResponseStatusEnum = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Closed: 'CLOSED'
} as const;

export type GetWalletCardInfo200ResponseStatusEnum = typeof GetWalletCardInfo200ResponseStatusEnum[keyof typeof GetWalletCardInfo200ResponseStatusEnum];


