/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type WalletTxnResp = {
  /**
   * Token representing the user
   */
  user_token: string;
  /**
   * Token representing the wallet
   */
  token: string;
  /**
   * The wallet's current balance in USD
   */
  balance: number;
  /**
   * The currency wallet balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD
   */
  currency_code: string;
  /**
   * Type of wallet
   */
  type: WalletTxnResp.type;
  /**
   * In case type of wallet is MASSPAY_CARD, card_type would be provided with the type of card it is
   */
  card_type?: WalletTxnResp.card_type;
  /**
   * In case type of wallet is MASSPAY_CARD, last_4 would be provided with the last four digits of the card
   */
  last_4?: string;
  /**
   * An indicator whether the wallet is active. If inactive, can still retrieve historical transactions history
   */
  active: boolean;
  /**
   * An indicator whether the fees for payouts using this wallet are paid by the client. If false, the user pays the fees
   */
  client_paying_fees?: boolean;
};
export namespace WalletTxnResp {
  /**
     *
    Type of wallet
     */
  export enum type {
    MASSPAY_CARD = 'MASSPAY_CARD',
    USER_FUNDS = 'USER_FUNDS',
  } /**
     *
    In case type of wallet is MASSPAY_CARD, card_type would be provided with the type of card it is
     */
  export enum card_type {
    MASTERCARD = 'MASTERCARD',
    VISA = 'VISA',
    AMEX = 'AMEX',
    DISCOVER = 'DISCOVER',
    UNIONPAY = 'UNIONPAY',
  }
}
