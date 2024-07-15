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
 * Subscription
 */
export type Subscription = {
  /**
   * Reference to the customer this subscription belongs to
   */
  customer?: string;
  /**
   * Reference to the card this subscription is linked to
   */
  card?: string;
  /**
   * The date by which customer has to pay the next bill
   */
  due_date?: string;
  /**
   * The maximum number of billing cycles in the subscription
   */
  max_billing_cycle?: number | null;
  /**
   * Payment product string
   */
  payment_product?: Subscription.payment_product;
};
export namespace Subscription {
  /**
     *
    Payment product string
     */
  export enum payment_product {
    EMPTY = '',
    CARD = 'card',
    PAYPAL = 'paypal',
  }
}
