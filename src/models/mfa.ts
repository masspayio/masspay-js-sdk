/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type mfa = {
  /**
   * Result of login. mfa, login or mfa_set_up_required
   */
  result?: mfa.result;
  /**
   * Type of MFA
   */
  mfa_type?: string;
  /**
   * Token used while submitting MFA info
   */
  mfa_token?: string;
};
export namespace mfa {
  /**
     *
    Result of login. mfa, login or mfa_set_up_required
     */
  export enum result {
    MFA = 'mfa',
    LOGIN = 'login',
    MFA_SET_UP_REQUIRED = 'mfa_set_up_required',
  }
}
