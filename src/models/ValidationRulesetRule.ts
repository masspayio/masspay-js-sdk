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
 * ValidationRulesetRule
 */
export type ValidationRulesetRule = {
  /**
   * The rule key
   */
  name: ValidationRulesetRule.name;
  /**
   * The rule operator
   */
  operator: ValidationRulesetRule.operator;
  /**
   * The rule value. Type has to be array when the operator is IN or NOT_IN
   */
  value: string;
};
export namespace ValidationRulesetRule {
  /**
     *
    The rule key
     */
  export enum name {
    PAYMENT_PROFILE = 'payment_profile',
    AMOUNT = 'amount',
    CARD = 'card',
    COUNTRY_CODE = 'country_code',
    CURRENCY_CODE = 'currency_code',
    CUSTOMER = 'customer',
    CUSTOMER_STATUS = 'customer_status',
    CUSTOMER_IP = 'customer_ip',
    MCC = 'mcc',
    ORGANISATION = 'organisation',
    PAYMENT_PRODUCT_TYPE = 'payment_product_type',
  } /**
     *
    The rule operator
     */
  export enum operator {
    EQUALS = '==',
    NOT_EQUALS = '!=',
    GREATER_THAN = '>',
    LESS_THAN = '<',
    GREATER_THAN_OR_EQUALS = '>=',
    LESS_THAN_OR_EQUALS = '<=',
    IN = 'IN',
    NOT_IN = 'NOT_IN',
  }
}
