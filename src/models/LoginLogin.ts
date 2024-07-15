/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoginLogin = {
  /**
   * The user's email address
   */
  username?: string;
  /**
   * The user's password
   */
  password: string;
  /**
   * Browser fingerprint
   */
  fingerprint?: string;
  /**
   * Remember MFA cookie
   */
  mfa_cookie?: string;
};
