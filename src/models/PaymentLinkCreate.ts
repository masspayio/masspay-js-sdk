/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { PaymentLink } from './PaymentLink';
export type PaymentLinkCreate = PaymentLink & {
  /**
   * Reference to the payment profile this link belongs to
   */
  payment_profile: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount: number;
  /**
   * A reference specified by the merchant to identify the transaction
   */
  merchant_reference: string;
};
