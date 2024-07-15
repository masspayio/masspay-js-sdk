/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoginMFA = {
  /**
   * The user's email address
   */
  username: string;
  /**
   * MFA code supplied by the user
   */
  code: string;
  /**
   * MFA token received during login step
   */
  token?: string;
  /**
   * Remember MFA for current device for 30 days (fingerprint required)
   */
  remember?: boolean;
  /**
   * Browser fingerprint
   */
  fingerprint?: string;
};
