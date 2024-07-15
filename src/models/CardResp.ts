/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
/**
 * MassPay Card Information
 */
export type CardResp = {
  /**
   * 16 Digits card number
   */
  card_number: string;
  /**
   * 3 Digits cvv code
   */
  cvv: string;
  /**
   * Card expiration date
   */
  expiration_date: string;
  /**
   * Card pin number (used in ATM machines)
   */
  pin_number: string;
  /**
   * Available balance on the card
   */
  balance: number;
  /**
   * Card type
   */
  type: CardResp.type;
  /**
   * Status of the card
   */
  status: CardResp.status;
};
export namespace CardResp {
  /**
     *
    Card type
     */
  export enum type {
    VISA = 'VISA',
    MASTERCARD = 'MASTERCARD',
    DISCOVER = 'DISCOVER',
    AMEX = 'AMEX',
    UNIONPAY = 'UNIONPAY',
  } /**
     *
    Status of the card
     */
  export enum status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    CLOSED = 'CLOSED',
  }
}
