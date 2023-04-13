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
 * Record that represents a transaction
 * @export
 * @interface TxnHistoryResp
 */
export interface TxnHistoryResp {
    /**
     * Token represnting the transaction
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'token': string;
    /**
     * Type of transaction
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'type': TxnHistoryRespTypeEnum;
    /**
     * Time the transaction was created. In UTC
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'time_of_txn': string;
    /**
     * Source amount
     * @type {number}
     * @memberof TxnHistoryResp
     */
    'source_amount': number;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'source_currency_code': string;
    /**
     * The amount that was received in `destination_currency_code`
     * @type {number}
     * @memberof TxnHistoryResp
     */
    'destination_amount': number;
    /**
     * The currency of the funds received. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'destination_currency_code': string;
    /**
     * Fee of the transaction
     * @type {number}
     * @memberof TxnHistoryResp
     */
    'fee': number;
    /**
     * Status of the transaction
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'status': TxnHistoryRespStatusEnum;
    /**
     * Notes of the transaction when load or spend back
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'notes'?: string;
    /**
     * Name of the payer when payout transaction
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'payer_name'?: string;
    /**
     * Code/pin that is required when collecting the money when payout transaction
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'pickup_code'?: string;
    /**
     * Token that represents the funding source i.e. bank account, wallet. 36 characters long
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'source_token'?: string;
    /**
     * Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'destination_token': string;
    /**
     * The type of service. I.e. cash pickup, home delivery, etc. Only provided for payouts
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'delivery_type'?: TxnHistoryRespDeliveryTypeEnum;
    /**
     * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'client_transfer_id'?: string;
    /**
     * The reason for the status change. Usually would include reason for an ERROR or CANCEL status
     * @type {string}
     * @memberof TxnHistoryResp
     */
    'status_reason'?: string;
    /**
     * Optional client id
     * @type {number}
     * @memberof TxnHistoryResp
     */
    'client_id'?: number;
}

export const TxnHistoryRespTypeEnum = {
    Load: 'load',
    Payout: 'payout',
    SpendBack: 'spend back',
    Info: 'info'
} as const;

export type TxnHistoryRespTypeEnum = typeof TxnHistoryRespTypeEnum[keyof typeof TxnHistoryRespTypeEnum];
export const TxnHistoryRespStatusEnum = {
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
    Scheduled: 'SCHEDULED',
    ReadyForPickup: 'READY_FOR_PICKUP',
    Hold: 'HOLD',
    Error: 'ERROR'
} as const;

export type TxnHistoryRespStatusEnum = typeof TxnHistoryRespStatusEnum[keyof typeof TxnHistoryRespStatusEnum];
export const TxnHistoryRespDeliveryTypeEnum = {
    CashPickup: 'CASH_PICKUP',
    BankDeposit: 'BANK_DEPOSIT',
    HomeDelivery: 'HOME_DELIVERY',
    MobileWallet: 'MOBILE_WALLET',
    MasspayCard: 'MASSPAY_CARD',
    PaperCheck: 'PAPER_CHECK',
    Bill: 'BILL',
    Cryptocurrency: 'CRYPTOCURRENCY'
} as const;

export type TxnHistoryRespDeliveryTypeEnum = typeof TxnHistoryRespDeliveryTypeEnum[keyof typeof TxnHistoryRespDeliveryTypeEnum];


