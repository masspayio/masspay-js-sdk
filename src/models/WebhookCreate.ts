/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Webhook } from './Webhook';
export type WebhookCreate = Webhook & {
  /**
   * Type of item this webhook is connected to
   */
  type: WebhookCreate.type;
  /**
   * URL of the webhook
   */
  url: string;
};
export namespace WebhookCreate {
  /**
     *
    Type of item this webhook is connected to
     */
  export enum type {
    TRANSACTION = 'transaction',
    REFUND = 'refund',
    CHARGEBACK = 'chargeback',
    CARDLINK = 'cardlink',
    VALIDATIONRULESET = 'validationruleset',
    REPORT_GENERATED = 'report_generated',
    SUBSCRIPTION = 'subscription',
  }
}
