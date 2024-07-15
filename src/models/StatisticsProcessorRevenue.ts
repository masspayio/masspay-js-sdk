/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type StatisticsProcessorRevenue = {
  /**
   * The ID of the processor object
   */
  id?: string;
  /**
   * Name of the processor
   */
  name?: string;
  /**
   * Payment product string
   */
  payment_product?: StatisticsProcessorRevenue.payment_product;
  /**
   * Payment gateway used
   */
  gateway?: string;
  /**
   * Reference to the organisation this processor belongs to
   */
  organisation?: string;
  /**
   * Revenue of the last 24 hours
   */
  last24hours?: number;
  /**
   * Revenue of the previous 24 hours
   */
  previous24hours?: number;
};
export namespace StatisticsProcessorRevenue {
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
  }
}
