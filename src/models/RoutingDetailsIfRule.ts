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
 * Routing - Details - If - Rule
 */
export type RoutingDetailsIfRule = {
  /**
   * The rule key
   */
  name: RoutingDetailsIfRule.name;
  /**
   * The rule operator. Most keys only have the options "==" and "!==".
   *
   * These rule keys can have all the operators mentioned:
   * amount, card_bin, random
   */
  operator: RoutingDetailsIfRule.operator;
  /**
   * The rule value
   */
  value: string;
};
export namespace RoutingDetailsIfRule {
  /**
     *
    The rule key
     */
  export enum name {
    _3DS = '3ds',
    AMOUNT = 'amount',
    CARD = 'card',
    CARD_BRAND = 'card_brand',
    CARD_BIN = 'card_bin',
    COUNTRY_CODE = 'country_code',
    CURRENCY_CODE = 'currency_code',
    CUSTOMER = 'customer',
    CUSTOMER_STATUS = 'customer_status',
    MCC = 'mcc',
    RANDOM = 'random',
    RECURRING = 'recurring',
  } /**
     *
    The rule operator. Most keys only have the options "==" and "!==".
     *
     * These rule keys can have all the operators mentioned:
     * amount, card_bin, random
     */
  export enum operator {
    EQUALS = '==',
    NOT_EQUALS = '!=',
    GREATER_THAN = '>',
    LESS_THAN = '<',
    GREATER_THAN_OR_EQUALS = '>=',
    LESS_THAN_OR_EQUALS = '<=',
  }
}
