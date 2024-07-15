/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type WebhookHistory = {
  /**
   * Created at
   */
  created_at?: string;
  /**
   * Response code when trygin to complete the webhook
   */
  status_code?: number;
  /**
   * Response content. Maximum of 255 characters
   */
  content?: string;
};
