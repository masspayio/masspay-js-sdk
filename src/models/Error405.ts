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
 * Method not allowed.
 */
export type Error405 = {
  /**
   * Error title.
   */
  title?: Error405.title;
  /**
   * Error description.
   */
  message: Error405.message;
  /**
   * Error code.
   */
  code: Error405.code;
};
export namespace Error405 {
  /**
     *
    Error title.
     */
  export enum title {
    METHOD_NOT_ALLOWED_ = 'Method not allowed.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_HTTP_METHOD_USED_FOR_THE_REQUEST_IS_NOT_SUPPORTED_BY_THE_MASS_PAY_API_PLEASE_ENSURE_THAT_YOU_ARE_USING_THE_CORRECT_HTTP_METHOD_E_G_POST_FOR_THE_SPECIFIC_MASS_PAY_API_ENDPOINT_ = 'The HTTP method used for the request is not supported by the MassPay API. Please ensure that you are using the correct HTTP method (e.g., POST) for the specific MassPay API endpoint.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_405' = 405,
  }
}
