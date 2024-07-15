/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { ValidationRuleset } from './ValidationRuleset';
export type ValidationRulesetCreate = ValidationRuleset & {
  /**
   * The name of the Validation ruleset
   */
  name: string;
  /**
   * Action to take
   */
  action: ValidationRulesetCreate.action;
};
export namespace ValidationRulesetCreate {
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
