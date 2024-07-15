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
 * PaymentLink
 */
export type PaymentLink = {
  /**
   * Reference to the organization this link belongs to
   */
  organisation?: string;
  /**
   * Reference to the payment profile this link belongs to
   */
  payment_profile?: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount?: number;
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
   * Reference to a specific payment product. This will bypass the hosted payment page
   */
  payment_product?: PaymentLink.payment_product;
  /**
   * The URL where the customer will be redirected once the transaction completes, regardless of whether it succeeds or fails
   */
  redirect_url?: string;
  /**
   * A webhook url that is called when a transaction is updated
   */
  webhook_transaction_update?: string;
  /**
   * Payment link is valid until. Defaults to 24 hours
   */
  valid_until?: string;
};
export namespace PaymentLink {
  /**
     *
    Reference to a specific payment product. This will bypass the hosted payment page
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
  }
}
