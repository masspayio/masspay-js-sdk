/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TransactionDetailMDR = {
  /**
   * Card type
   */
  type?: TransactionDetailMDR.type;
  /**
   * Card region
   */
  region?: TransactionDetailMDR.region;
};
export namespace TransactionDetailMDR {
  /**
     *
    Card type
     */
  export enum type {
    EMPTY = '',
    PREPAID = 'prepaid',
    DEBIT = 'debit',
    CREDIT = 'credit',
    COMMERCIAL = 'commercial',
  } /**
     *
    Card region
     */
  export enum region {
    EMPTY = '',
    DOMESTIC = 'domestic',
    INTRA = 'intra',
    INTER = 'inter',
  }
}
