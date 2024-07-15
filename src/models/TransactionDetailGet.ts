/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { TransactionDetailBancontact } from './TransactionDetailBancontact';
import type { TransactionDetailDiscount } from './TransactionDetailDiscount';
import type { TransactionDetailFraud } from './TransactionDetailFraud';
import type { TransactionDetailMDR } from './TransactionDetailMDR';
import type { TransactionDetailSender } from './TransactionDetailSender';
export type TransactionDetailGet = {
  /**
   * The return url to which the customer is redirected after an approval
   */
  redirect_url?: string;
  /**
   * The url the customer needs to be redirected to
   */
  approval_url?: string;
  /**
   * CVV Present
   */
  cvv_present?: boolean;
  /**
   * 3D Secure Enrolled
   */
  threed_enrolled?: boolean;
  /**
   * 3D Secure Authenticated
   */
  threed_authenticated?: boolean;
  /**
   * 3D Secure ECI code
   */
  threed_eci?: string;
  sender?: TransactionDetailSender;
  /**
   * Ideal issuer
   */
  issuer?: string;
  bancontact?: TransactionDetailBancontact;
  /**
   * Paypal description
   */
  description?: string;
  fraud?: TransactionDetailFraud;
  mdr?: TransactionDetailMDR;
  discount?: TransactionDetailDiscount;
  /**
   * Additional merchant data as key value pair
   */
  merchant_data?: Record<string, any>;
};
