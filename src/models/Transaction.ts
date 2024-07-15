/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { TransactionOrderData } from './TransactionOrderData';
/**
 * Transaction
 */
export type Transaction = {
  /**
   * Reference to the organization this transaction belongs to
   */
  organisation?: string;
  /**
   * Reference to the payment profile this transaction belongs to
   */
  payment_profile?: string;
  /**
   * Reference to the terminal this transaction belongs to
   */
  terminal?: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount?: number;
  /**
   * The date when a possible reserve from this transaction released
   */
  reserve_release_date?: string | null;
  /**
   * A short reference / descriptor that will show up on the customers bank statement
   */
  dynamic_descriptor?: string;
  /**
   * A reference specified by the merchant to identify the transaction
   */
  merchant_reference?: string;
  /**
   * Reference to the customer this transaction belongs to
   */
  customer?: string;
  /**
   * The IP address of the customer
   */
  customer_ip?: string;
  /**
   * Two-letter ISO country code
   */
  country_code?: string;
  /**
   * The full user agent string of the device the customer used to submit the transaction
   */
  user_agent?: string;
  /**
   * Transaction details
   */
  details?: Record<string, any>;
  order_data?: TransactionOrderData;
  /**
   * The Id of the card object. Required for recurring_type=repeat
   */
  card?: string;
  /**
   * Payment product string
   */
  payment_product?: Transaction.payment_product;
  /**
   * This field is to be used only when a transaction is part of a series of recurring transactions. If it's the initial transaction, set the value to 'first', and if it's not, set it to 'repeat'. This field must not be included in transactions that will not be part of a series of repeated transactions. ('first' and 'repeat' are written in all lowercase letters).
   */
  recurring_type?: Transaction.recurring_type;
  /**
   * A webhook url that is called when a transaction is updated
   */
  webhook_transaction_update?: string;
};
export namespace Transaction {
  /**
     *
    Payment product string
     */
  export enum payment_product {
    EMPTY = '',
    ALIPAY = 'alipay',
    APPLEPAY = 'applepay',
    BCMC = 'bcmc',
    BELFIUS = 'belfius',
    BITPAY = 'bitpay',
    BPWALLET = 'bpwallet',
    CARD = 'card',
    CARDEXTERNAL = 'cardexternal',
    CREDITCLICK = 'creditclick',
    DIRECTDEBIT = 'directdebit',
    DIRECTDEBITPLUS = 'directdebitplus',
    DUMMY = 'dummy',
    EPS = 'eps',
    ETRANSFER = 'etransfer',
    EZEEWALLET = 'ezeewallet',
    FINSHARK = 'finshark',
    GCASH = 'gcash',
    GIROPAY = 'giropay',
    GOOGLEPAY = 'googlepay',
    IDEAL = 'ideal',
    IMPS = 'imps',
    INTERAC = 'interac',
    MULTIBANCO = 'multibanco',
    MYBANK = 'mybank',
    OPENNODE = 'opennode',
    P24 = 'p24',
    PAYPAL = 'paypal',
    PAYTM = 'paytm',
    PAYU = 'payu',
    PAYSAFECARD = 'paysafecard',
    POS = 'pos',
    SEPA = 'sepa',
    SKRILL = 'skrill',
    SOFORT = 'sofort',
    TRIPLEA = 'triplea',
    TRUSTPAY = 'trustpay',
    TRUSTLY = 'trustly',
    UNIONPAY = 'unionpay',
    UPI = 'upi',
    VOLT = 'volt',
    WECHATPAY = 'wechatpay',
  } /**
     *
    This field is to be used only when a transaction is part of a series of recurring transactions. If it's the initial transaction, set the value to 'first', and if it's not, set it to 'repeat'. This field must not be included in transactions that will not be part of a series of repeated transactions. ('first' and 'repeat' are written in all lowercase letters).
     */
  export enum recurring_type {
    EMPTY = '',
    FIRST = 'first',
    REPEAT = 'repeat',
  }
}
