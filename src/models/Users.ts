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
 * MagniusUser
 */
export type Users = {
  /**
   * The name of the user
   */
  name?: string;
  /**
   * The user's email address
   */
  email?: string;
  /**
   * The telephone or mobile number of this user, ITU/E.123 format with international prefix (+PPNNNNNNNNN...)
   */
  phone_number?: string | null;
  /**
   * User language (ISO 639-1, Alpha-2 code)
   */
  language?: Users.language;
  /**
   * Number format locale
   */
  number_format?: Users.number_format;
  /**
   * Date format locale
   */
  date_format?: Users.date_format;
  /**
   * If set to true, multi factor authentication is enabled
   */
  mfa?: boolean;
  /**
   * Multi factor authentication type
   */
  mfa_type?: Users.mfa_type;
  /**
   * Reference to the welcome message linked to this user, can only be passed by a user with PSP role
   */
  welcome?: string;
};
export namespace Users {
  /**
     *
    User language (ISO 639-1, Alpha-2 code)
     */
  export enum language {
    EN = 'en',
    NL = 'nl',
  } /**
     *
    Number format locale
     */
  export enum number_format {
    EN_US = 'en_US',
    NL_NL = 'nl_NL',
  } /**
     *
    Date format locale
     */
  export enum date_format {
    EN_US = 'en_US',
    NL_NL = 'nl_NL',
  } /**
     *
    Multi factor authentication type
     */
  export enum mfa_type {
    EMPTY = '',
    GOOGLE = 'google',
    EMAIL = 'email',
    SMS = 'sms',
  }
}
