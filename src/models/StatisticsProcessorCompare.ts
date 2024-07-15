/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type StatisticsProcessorCompare = {
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
  payment_product?: StatisticsProcessorCompare.payment_product;
  /**
   * Payment gateway used
   */
  gateway?: string;
  /**
   * Transaction statistics
   */
  transaction?: {
    /**
     * Transaction status statistics
     */
    status?: {
      /**
       * Transaction status
       */
      INITIATED?: {
        /**
         * Amount of transactions with this status
         */
        count?: number;
        /**
         * Amount of transactions with this status
         */
        amount?: number;
      };
    };
    /**
     * Conversion percentage
     */
    conversion?: number;
    /**
     * Transaction statistics total
     */
    total?: {
      /**
       * Sum of transactions
       */
      count?: number;
      /**
       * Sum of transaction amounts
       */
      amount?: number;
    };
    /**
     * Transaction statistics total success. Transactions with one of the following statuses: SETTLEMENT_REQUESTED, SETTLEMENT_COMPLETED
     */
    total_success?: {
      /**
       * Sum of transactions
       */
      count?: number;
      /**
       * Sum of transaction amounts
       */
      amount?: number;
    };
  };
};
export namespace StatisticsProcessorCompare {
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
