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
 * ValidationRuleset
 */
export type ValidationRuleset = {
  /**
   * The name of the Validation ruleset
   */
  name?: string;
  /**
   * Action to take
   */
  action?: ValidationRuleset.action;
  /**
   * Reference to the tag connected to this ruleset
   */
  tag?: string;
  /**
   * The email address attached to the ruleset When set, tries to send an e-mail to the address whenever the rule gets triggered
   */
  email?: string | null;
  /**
   * The webhook URL attached to the ruleset When set, tries to send a webhook to the url whenever the rule gets triggered
   */
  webhook_url?: string | null;
};
export namespace ValidationRuleset {
  /**
     *
    Action to take
     */
  export enum action {
    BLOCK = 'block',
    TAG = 'tag',
    _3D_SECURE = '3dSecure',
  }
}
