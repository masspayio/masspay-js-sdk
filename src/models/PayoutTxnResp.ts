/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type PayoutTxnResp = {
  /**
   * Token that represents the transaction that was just created. Need to be used to commit the transaction in `/payout/{user_token}/{payout_token}`. Value would be NSF if there are not enough funds in the `source_token`. Value would be `DUPLICATE` if there is a duplicate `client_transfer_id`.
   */
  payout_token: string;
  /**
   * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
   */
  client_transfer_id: string;
  /**
   * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
   */
  source_currency_code: string;
  /**
   * The currency the funds will be deposited into. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
   */
  destination_currency_code: string;
  /**
   * Token that represents the funding source i.e. your bank account, user's wallet. 36 characters long
   */
  source_token: string;
  /**
   * Token that represents the payout destination i.e. MassPay->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
   */
  destination_token: string;
  /**
   * The amount to be sent for payout in source currency. i.e USD. Must be provided if source_amount is empty
   */
  destination_amount: number;
  /**
   * The amount to be received by the payout in source currency. i.e USD. Must be provided if destination_amount is empty
   */
  source_amount: number;
  /**
   * Token that represents set of attributes that associated with destination_token. For example, bank account, mobile account, wallet id, etc. If not provided, uses the last one used. 36 characters long
   */
  attr_set_token: string;
  /**
   * The exchange rate to convert source_amount to destination_amount
   */
  exchange_rate: number;
  /**
   * Fee to be charged for the transaction
   */
  fee: number;
  /**
   * The time and date at which the transaction will expire. The transaction has to be finalized before this time. Transactions are valid for 2 minutes from creation time. If expired, a new transaction has to be created.
   */
  expiration: string;
  /**
   * Code/pin that is required when collecting the money. Should be provided to the recipient to present to payout location.
   */
  pickup_code: string;
  /**
   * The status of the transaction
   */
  status: PayoutTxnResp.status;
  /**
   * base64 representation of the payer logo
   */
  payer_logo?: string;
  /**
   * Name of payer
   */
  payer_name: string;
  /**
   * The type of delivery
   */
  delivery_type: PayoutTxnResp.delivery_type;
  /**
   * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   */
  country_code: string;
  /**
   * Optional JSON object with attributes that can later be searched to locate this payout. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
  /**
   * Estimated availability of funds. When funds would be available to pickup/deposited
   */
  estimated_availability: string;
  /**
   * Optional. Contains the reason for the status change. Most commonly used for CANCELLED status with the reason for cancellation
   */
  status_reason?: string;
  /**
   * The relevant attributes that were used to fulfill this payout
   */
  attrs?: Record<string, any>;
};
export namespace PayoutTxnResp {
  /**
     *
    The status of the transaction
     */
  export enum status {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    SCHEDULED = 'SCHEDULED',
    READY_FOR_PICKUP = 'READY_FOR_PICKUP',
    HOLD = 'HOLD',
    ERROR = 'ERROR',
  } /**
     *
    The type of delivery
     */
  export enum delivery_type {
    CASH_PICKUP = 'CASH_PICKUP',
    BANK_DEPOSIT = 'BANK_DEPOSIT',
    HOME_DELIVERY = 'HOME_DELIVERY',
    MOBILE_WALLET = 'MOBILE_WALLET',
    MASSPAY_CARD = 'MASSPAY_CARD',
    PAPER_CHECK = 'PAPER_CHECK',
    BILL = 'BILL',
    CRYPTOCURRENCY = 'CRYPTOCURRENCY',
  }
}
