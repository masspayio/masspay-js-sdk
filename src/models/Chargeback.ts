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
 * Chargeback
 */
export type Chargeback = {
  /**
   * Reference to the transaction this chargeback belongs to
   */
  transaction?: string;
  /**
   * The amount of the Chargeback, without decimal
   */
  amount?: number;
  /**
   * A description of the reason of the chargeback
   */
  reason?: string | null;
  /**
   * The current state of the chargeback
   */
  status?: Chargeback.status;
  /**
   * The source of chargeback
   */
  source_type?: Chargeback.source_type;
  /**
   * The date by which the merchant must fight the chargeback in a dispute, AKA representment
   */
  work_by_date?: string;
};
export namespace Chargeback {
  /**
     *
    The current state of the chargeback
     */
  export enum status {
    OPEN = 'OPEN',
    IN_DISPUTE = 'IN_DISPUTE',
    WON = 'WON',
    LOST = 'LOST',
    CANCELLED = 'CANCELLED',
  } /**
     *
    The source of chargeback
     */
  export enum source_type {
    PROCESSOR_CB = 'PROCESSOR_CB',
    AMEX = 'AMEX',
    PAYPAL = 'PAYPAL',
    PROCESSOR_INQUIRY = 'PROCESSOR_INQUIRY',
    CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
    SHIPPING_CARRIER = 'SHIPPING_CARRIER',
    THIRD_PARTY = 'THIRD_PARTY',
    OTHER = 'OTHER',
  }
}
