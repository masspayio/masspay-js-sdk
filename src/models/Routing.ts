/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { RoutingDetails } from './RoutingDetails';
/**
 * Routing
 */
export type Routing = {
  /**
   * The name of the Routing
   */
  name?: string;
  /**
   * Payment product string
   */
  payment_product?: Routing.payment_product;
  details?: RoutingDetails;
};
export namespace Routing {
  /**
     *
    Payment product string
     */
  export enum payment_product {
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
