/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoginDefault = {
  /**
   * Result of login. mfa, login or mfa_set_up_required
   */
  result?: LoginDefault.result;
  /**
   * User id
   */
  id?: string;
  /**
   * API Key last four digits
   */
  apikey_last_four?: string;
  /**
   * JWT token
   */
  token?: string;
  /**
   * User email
   */
  username?: string;
  /**
   * Reference to the organization this user belongs to
   */
  organisation?: string;
  /**
   * The user's name
   */
  name?: string;
  /**
   * Last time the user logged in
   */
  last_login?: string;
  /**
   * Amount of days since last login
   */
  last_login_days_ago?: number;
  /**
   * The amount of days in a row the user has logged in
   */
  login_streak?: number;
  /**
   * Is this user an psp user or not
   */
  psp?: boolean;
  /**
   * Array of roles this user has
   */
  roles?: Array<string>;
  /**
   * Does this user have MFA enabled or not
   */
  mfa?: boolean;
  /**
   * Does this user have MFA enabled or not
   */
  mfa_type?: string;
  /**
   * MFA cookie based on fingerprint
   */
  mfa_cookie?: string | null;
  /**
   * User language (ISO 639-1, Alpha-2 code)
   */
  language?: LoginDefault.language;
  /**
   * Date format locale
   */
  date_format?: LoginDefault.date_format;
  /**
   * Number format locale
   */
  number_format?: LoginDefault.number_format;
};
export namespace LoginDefault {
  /**
     *
    Result of login. mfa, login or mfa_set_up_required
     */
  export enum result {
    MFA = 'mfa',
    LOGIN = 'login',
    MFA_SET_UP_REQUIRED = 'mfa_set_up_required',
  } /**
     *
    User language (ISO 639-1, Alpha-2 code)
     */
  export enum language {
    EN = 'en',
    NL = 'nl',
  } /**
     *
    Date format locale
     */
  export enum date_format {
    EN_US = 'en_US',
    NL_NL = 'nl_NL',
  } /**
     *
    Number format locale
     */
  export enum number_format {
    EN_US = 'en_US',
    NL_NL = 'nl_NL',
  }
}
