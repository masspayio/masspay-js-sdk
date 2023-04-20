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
 * @interface PayoutTxnResp
 */
export interface PayoutTxnResp {
    /**
     * Token that represents the transaction that was just created. Need to be used to commit the transaction in `/payout/{user_token}/{payout_token}`. Value would be NSF if there are not enough funds in the `source_token`. Value would be `DUPLICATE` if there is a duplicate `client_transfer_id`.
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'payout_token': string;
    /**
     * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'client_transfer_id': string;
    /**
     * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'source_currency_code': string;
    /**
     * The currency the funds will be deposited into. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'destination_currency_code': string;
    /**
     * Token that represents the funding source i.e. your bank account, user\'s wallet. 36 characters long
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'source_token': string;
    /**
     * Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'destination_token': string;
    /**
     * The amount to be sent for payout in source currency. i.e USD. Must be provided if source_amount is empty
     * @type {number}
     * @memberof PayoutTxnResp
     */
    'destination_amount': number;
    /**
     * The amount to be received by the payout in source currency. i.e USD. Must be provided if destination_amount is empty
     * @type {number}
     * @memberof PayoutTxnResp
     */
    'source_amount': number;
    /**
     * Token that represents set of attributes that associated with destination_token. For example, bank account, mobile account, wallet id, etc. If not provided, uses the last one used. 36 characters long
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'attr_set_token': string;
    /**
     * The exchange rate to convert source_amount to destination_amount
     * @type {number}
     * @memberof PayoutTxnResp
     */
    'exchange_rate': number;
    /**
     * Fee to be charged for the transaction
     * @type {number}
     * @memberof PayoutTxnResp
     */
    'fee': number;
    /**
     * The time and date at which the transaction will expire. The transaction has to be finalized before this time. Transactions are valid for 2 minutes from creation time. If expired, a new transaction has to be created.
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'expiration': string;
    /**
     * Code/pin that is required when collecting the money. Should be provided to the recipient to present to payout location.
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'pickup_code': string;
    /**
     * The status of the transaction
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'status': PayoutTxnRespStatusEnum;
    /**
     * base64 representation of the payer logo
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'payer_logo'?: string;
    /**
     * Name of payer
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'payer_name': string;
    /**
     * The type of delivery
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'delivery_type': PayoutTxnRespDeliveryTypeEnum;
    /**
     * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'country_code': string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this payout. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof PayoutTxnResp
     */
    'metadata'?: object;
    /**
     * Estimated availability of funds. When funds would be available to pickup/deposited
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'estimated_availability': string;
    /**
     * Optional. Contains the reason for the status change. Most commonly used for CANCELLED status with the reason for cancellation
     * @type {string}
     * @memberof PayoutTxnResp
     */
    'status_reason'?: string;
    /**
     * The relevant attributes that were used to fulfill this payout
     * @type {object}
     * @memberof PayoutTxnResp
     */
    'attrs'?: object;
}

export const PayoutTxnRespStatusEnum = {
    Pending: 'PENDING',
    Processing: 'PROCESSING',
    Completed: 'COMPLETED',
    Cancelled: 'CANCELLED',
    Scheduled: 'SCHEDULED',
    ReadyForPickup: 'READY_FOR_PICKUP',
    Hold: 'HOLD',
    Error: 'ERROR'
} as const;

export type PayoutTxnRespStatusEnum = typeof PayoutTxnRespStatusEnum[keyof typeof PayoutTxnRespStatusEnum];
export const PayoutTxnRespDeliveryTypeEnum = {
    CashPickup: 'CASH_PICKUP',
    BankDeposit: 'BANK_DEPOSIT',
    HomeDelivery: 'HOME_DELIVERY',
    MobileWallet: 'MOBILE_WALLET',
    MasspayCard: 'MASSPAY_CARD',
    PaperCheck: 'PAPER_CHECK',
    Bill: 'BILL',
    Cryptocurrency: 'CRYPTOCURRENCY'
} as const;

export type PayoutTxnRespDeliveryTypeEnum = typeof PayoutTxnRespDeliveryTypeEnum[keyof typeof PayoutTxnRespDeliveryTypeEnum];


