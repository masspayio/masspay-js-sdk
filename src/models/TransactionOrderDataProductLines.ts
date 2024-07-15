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
 * Transaction - OrderData - Product lines
 */
export type TransactionOrderDataProductLines = {
  /**
   * Product id
   */
  id: string;
  /**
   * Product name
   */
  name: string;
  /**
   * If physical item: tangible, if any other product: non_tangible
   */
  type?: TransactionOrderDataProductLines.type;
  /**
   * Category this product is part of
   */
  category?: string;
  /**
   * A text description of the product the invoice line refers to
   */
  description?: string;
  /**
   * Universal Product Code
   */
  upc?: string;
  /**
   * Stock Keeping Unit
   */
  sku?: string;
  /**
   * Quantity
   */
  quantity: number;
  /**
   * The price of one product excluding VAT, without a decimal place.
   */
  price: number;
  /**
   * The price of one product including VAT, without a decimal place.
   */
  price_incl: number;
  /**
   * The VAT percentage, represented in minor units.
   */
  vat_percentage: number;
};
export namespace TransactionOrderDataProductLines {
  /**
     *
    If physical item: tangible, if any other product: non_tangible
     */
  export enum type {
    TANGIBLE = 'tangible',
    NON_TANGIBLE = 'non_tangible',
  }
}
