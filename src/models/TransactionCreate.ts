/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Transaction } from './Transaction';
export type TransactionCreate = Transaction & {
  /**
   * Reference to the payment profile this transaction belongs to
   */
  payment_profile: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount: number;
  /**
   * A short reference / descriptor that will show up on the customers bank statement
   */
  dynamic_descriptor: string;
  /**
   * A reference specified by the merchant to identify the transaction
   */
  merchant_reference: string;
  /**
   * The IP address of the customer
   */
  customer_ip: string;
  /**
   * The full user agent string of the device the customer used to submit the transaction
   */
  user_agent: string;
  /**
   * Transaction details
   */
  details: Record<string, any>;
};
