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
 * Forbidden.
 */
export type Error403 = {
  /**
   * Error title.
   */
  title?: Error403.title;
  /**
   * Error description.
   */
  message: Error403.message;
  /**
   * Error code.
   */
  code: Error403.code;
};
export namespace Error403 {
  /**
     *
    Error title.
     */
  export enum title {
    FORBIDDEN_ = 'Forbidden.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_REQUESTED_ACTION_IS_NOT_ALLOWED_OR_THE_API_CREDENTIALS_DO_NOT_HAVE_SUFFICIENT_PERMISSIONS_PLEASE_ENSURE_THAT_THE_API_CREDENTIALS_USED_FOR_THE_REQUEST_HAVE_THE_NECESSARY_PERMISSIONS_TO_PERFORM_THE_REQUESTED_ACTION_ = 'The requested action is not allowed or the API credentials do not have sufficient permissions. Please ensure that the API credentials used for the request have the necessary permissions to perform the requested action.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_403' = 403,
  }
}
