/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
/**
 * Unauthorized.
 */
export type Error401 = {
  /**
   * Error title.
   */
  title?: Error401.title;
  /**
   * Error description.
   */
  message: Error401.message;
  /**
   * Error code.
   */
  code: Error401.code;
};
export namespace Error401 {
  /**
     *
    Error title.
     */
  export enum title {
    UNAUTHORIZED_ = 'Unauthorized.',
  } /**
     *
    Error description.
     */
  export enum message {
    AUTHENTICATION_FAILED_OR_CREDENTIALS_WERE_NOT_PROVIDED_PLEASE_ENSURE_THAT_YOU_HAVE_PROVIDED_VALID_API_CREDENTIALS_AND_THAT_THEY_ARE_AUTHORIZED_TO_ACCESS_THE_MASS_PAY_API_ = 'Authentication failed or credentials were not provided. Please ensure that you have provided valid API credentials and that they are authorized to access the MassPay API.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_401' = 401,
  }
}
