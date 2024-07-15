/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoginMFASetUp = {
  /**
   * MFA set-up one time token received during login step
   */
  token: string;
  /**
   * Type of MFA
   */
  mfa_type: LoginMFASetUp.mfa_type;
  /**
   * Optional MFA code (for Google MFA)
   */
  mfa_code?: string;
};
export namespace LoginMFASetUp {
  /**
     *
    Type of MFA
     */
  export enum mfa_type {
    GOOGLE = 'google',
    EMAIL = 'email',
    SMS = 'sms',
  }
}
