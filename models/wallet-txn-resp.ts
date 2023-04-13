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
 * @interface WalletTxnResp
 */
export interface WalletTxnResp {
    /**
     * Token representing the user
     * @type {string}
     * @memberof WalletTxnResp
     */
    'user_token': string;
    /**
     * Token representing the wallet
     * @type {string}
     * @memberof WalletTxnResp
     */
    'token': string;
    /**
     * The wallet\'s current balance in USD
     * @type {number}
     * @memberof WalletTxnResp
     */
    'balance': number;
    /**
     * The currency wallet balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD
     * @type {string}
     * @memberof WalletTxnResp
     */
    'currency_code': string;
    /**
     * Type of wallet
     * @type {string}
     * @memberof WalletTxnResp
     */
    'type': WalletTxnRespTypeEnum;
    /**
     * In case type of wallet is MASSPAY_CARD, card_type would be provided with the type of card it is
     * @type {string}
     * @memberof WalletTxnResp
     */
    'card_type'?: WalletTxnRespCardTypeEnum;
    /**
     * In case type of wallet is MASSPAY_CARD, last_4 would be provided with the last four digits of the card
     * @type {string}
     * @memberof WalletTxnResp
     */
    'last_4'?: string;
    /**
     * An indicator whether the wallet is active. If inactive, can still retrieve historical transactions history
     * @type {boolean}
     * @memberof WalletTxnResp
     */
    'active': boolean;
    /**
     * An indicator whether the fees for payouts using this wallet are paid by the client. If false, the user pays the fees
     * @type {boolean}
     * @memberof WalletTxnResp
     */
    'client_paying_fees'?: boolean;
}

export const WalletTxnRespTypeEnum = {
    MasspayCard: 'MASSPAY_CARD',
    UserFunds: 'USER_FUNDS'
} as const;

export type WalletTxnRespTypeEnum = typeof WalletTxnRespTypeEnum[keyof typeof WalletTxnRespTypeEnum];
export const WalletTxnRespCardTypeEnum = {
    Mastercard: 'MASTERCARD',
    Visa: 'VISA',
    Amex: 'AMEX',
    Discover: 'DISCOVER',
    Unionpay: 'UNIONPAY'
} as const;

export type WalletTxnRespCardTypeEnum = typeof WalletTxnRespCardTypeEnum[keyof typeof WalletTxnRespCardTypeEnum];


