/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
/**
 * Record that represents a transaction
 */
export type TxnHistoryResp = {
  /**
   * Token represnting the transaction
   */
  token: string;
  /**
   * Type of transaction
   */
  type: TxnHistoryResp.type;
  /**
   * Time the transaction was created. In UTC
   */
  time_of_txn: string;
  /**
   * Source amount
   */
  source_amount: number;
  /**
   * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
   */
  source_currency_code: string;
  /**
   * The amount that was received in `destination_currency_code`
   */
  destination_amount: number;
  /**
   * The currency of the funds received. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
   */
  destination_currency_code: string;
  /**
   * Fee of the transaction
   */
  fee: number;
  /**
   * Status of the transaction
   */
  status: TxnHistoryResp.status;
  /**
   * Notes of the transaction when load or spend back
   */
  notes?: string;
  /**
   * Name of the payer when payout transaction
   */
  payer_name?: string;
  /**
   * Code/pin that is required when collecting the money when payout transaction
   */
  pickup_code?: string;
  /**
   * Token that represents the funding source i.e. bank account, wallet. 36 characters long
   */
  source_token?: string;
  /**
   * Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
   */
  destination_token: string;
  /**
   * The type of service. I.e. cash pickup, home delivery, etc. Only provided for payouts
   */
  delivery_type?: TxnHistoryResp.delivery_type;
  /**
   * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
   */
  client_transfer_id?: string;
  /**
   * The reason for the status change. Usually would include reason for an ERROR or CANCEL status
   */
  status_reason?: string;
  /**
   * Optional client id
   */
  client_id?: number;
  /**
   * User token representing the user this transaction belongs to
   */
  user_token?: string;
};
export namespace TxnHistoryResp {
  /**
     *
    Type of transaction
     */
  export enum type {
    LOAD = 'load',
    PAYOUT = 'payout',
    SPEND_BACK = 'spend back',
    INFO = 'info',
  } /**
     *
    Status of the transaction
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
    The type of service. I.e. cash pickup, home delivery, etc. Only provided for payouts
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
