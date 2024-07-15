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
 * BankAccount
 */
export type BankAccount = {
  /**
   * Bank account number
   */
  bank_account_number?: string;
  /**
   * Bank account holder name
   */
  holder_name?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * Bank Identifier Code (BIC)
   */
  bic?: string;
  /**
   * The currency code associated to this bank account
   */
  currency_code?: BankAccount.currency_code;
};
export namespace BankAccount {
  /**
     *
    The currency code associated to this bank account
     */
  export enum currency_code {
    ALL = 'ALL',
    AMD = 'AMD',
    AUD = 'AUD',
    AZN = 'AZN',
    BAM = 'BAM',
    BGN = 'BGN',
    BYN = 'BYN',
    CAD = 'CAD',
    CHF = 'CHF',
    CZK = 'CZK',
    DKK = 'DKK',
    EUR = 'EUR',
    GBP = 'GBP',
    GEL = 'GEL',
    HUF = 'HUF',
    INR = 'INR',
    ISK = 'ISK',
    JPY = 'JPY',
    MDL = 'MDL',
    MKD = 'MKD',
    NOK = 'NOK',
    NZD = 'NZD',
    SAR = 'SAR',
    USD = 'USD',
    PHP = 'PHP',
    PLN = 'PLN',
    RON = 'RON',
    RUB = 'RUB',
    RSD = 'RSD',
    SEK = 'SEK',
    TRY = 'TRY',
    UAH = 'UAH',
    ZAR = 'ZAR',
  }
}
