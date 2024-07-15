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
 * Report - Filters - Rule
 */
export type ReportFilterRules = {
  /**
   * The rule key
   */
  name: ReportFilterRules.name;
  /**
   * The rule operator. Most keys only have the options "==" and "!==".
   *
   *
   * These rule keys can have all the operators mentioned:
   * amount, created_at, last_status_update, latitude, longitude,
   * customer.date_of_birth, customer.house_number, customer.created_at, customer.last_status_update
   */
  operator: ReportFilterRules.operator;
  /**
   * The rule value
   */
  value: string;
};
export namespace ReportFilterRules {
  /**
     *
    The rule key
     */
  export enum name {
    AMOUNT = 'amount',
    BLOCKED = 'blocked',
    BROWSER = 'browser',
    BROWSER_VERSION = 'browser_version',
    CITY = 'city',
    COUNTRY_CODE = 'country_code',
    CREATED_AT = 'created_at',
    CUSTOMER_IP = 'customer_ip',
    CUSTOMER_STATUS_0 = 'customer_status',
    DYNAMIC_DESCRIPTOR = 'dynamic_descriptor',
    ID = 'id',
    LAST_STATUS_UPDATE = 'last_status_update',
    LATITUDE = 'latitude',
    LONGITUDE = 'longitude',
    MERCHANT_REFERENCE = 'merchant_reference',
    PAYMENT_PRODUCT = 'payment_product',
    PAYMENT_PRODUCT_TYPE = 'payment_product_type',
    PLATFORM = 'platform',
    RECURRING_TYPE = 'recurring_type',
    STATUS = 'status',
    STATUS_REASON = 'status_reason',
    TAGGED = 'tagged',
    USER_AGENT = 'user_agent',
    CUSTOMER_ID = 'customer.id',
    CUSTOMER_TITLE = 'customer.title',
    CUSTOMER_INITIALS = 'customer.initials',
    CUSTOMER_FIRST_NAME = 'customer.first_name',
    CUSTOMER_LAST_NAME = 'customer.last_name',
    CUSTOMER_DATE_OF_BIRTH = 'customer.date_of_birth',
    CUSTOMER_EMAIL_ADDRESS = 'customer.email_address',
    CUSTOMER_PHONE_NUMBER = 'customer.phone_number',
    CUSTOMER_FAX_NUMBER = 'customer.fax_number',
    CUSTOMER_STREET_ADDRESS = 'customer.street_address',
    CUSTOMER_HOUSE_NUMBER = 'customer.house_number',
    CUSTOMER_HOUSE_NUMBER_SUFFIX = 'customer.house_number_suffix',
    CUSTOMER_POSTAL_CODE = 'customer.postal_code',
    CUSTOMER_CITY = 'customer.city',
    CUSTOMER_REGION = 'customer.region',
    CUSTOMER_COUNTRY_CODE = 'customer.country_code',
    CUSTOMER_STATUS_1 = 'customer.status',
    CUSTOMER_STATUS_REASON = 'customer.status_reason',
    CUSTOMER_SEGMENT = 'customer.segment',
    CUSTOMER_CREATED_AT = 'customer.created_at',
    CUSTOMER_LAST_STATUS_UPDATE = 'customer.last_status_update',
    ORGANISATION_ID = 'organisation.id',
    ORGANISATION_COUNTRY_CODE = 'organisation.country_code',
    ORGANISATION_NAME = 'organisation.name',
    PAYMENT_PROFILE_ID = 'payment_profile.id',
    PAYMENT_PROFILE_CURRENCY_CODE = 'payment_profile.currency_code',
    PAYMENT_PROFILE_NAME = 'payment_profile.name',
    PAYMENT_PROFILE_DESCRIPTION = 'payment_profile.description',
    PAYMENT_PROFILE_WEBSITE = 'payment_profile.website',
    PROCESSOR_ID = 'processor.id',
    PROCESSOR_NAME = 'processor.name',
    PROCESSOR_GATEWAY = 'processor.gateway',
    TERMINAL_ID = 'terminal.id',
    TERMINAL_NAME = 'terminal.name',
    TERMINAL_PROVIDER_ID = 'terminal.provider_id',
  } /**
     *
    The rule operator. Most keys only have the options "==" and "!==".
     *
     *
     * These rule keys can have all the operators mentioned:
     * amount, created_at, last_status_update, latitude, longitude,
     * customer.date_of_birth, customer.house_number, customer.created_at, customer.last_status_update
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
