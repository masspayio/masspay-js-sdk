/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Subscription } from './Subscription';
export type SubscriptionCreate = Subscription & {
  /**
   * Reference to the customer this subscription belongs to
   */
  customer: string;
};
