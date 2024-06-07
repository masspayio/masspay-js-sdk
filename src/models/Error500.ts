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
 * Internal server error
 */
export type Error500 = {
  /**
   * Error title.
   */
  title?: Error500.title;
  /**
   * Error description.
   */
  message: Error500.message;
  /**
   * Error code.
   */
  code: Error500.code;
};
export namespace Error500 {
  /**
     *
    Error title.
     */
  export enum title {
    INTERNAL_SERVER_ERROR_ = 'Internal server error.',
  } /**
     *
    Error description.
     */
  export enum message {
    AN_UNEXPECTED_ERROR_OCCURRED_ON_THE_SERVER_SIDE_WHILE_PROCESSING_THE_REQUEST_PLEASE_TRY_AGAIN_LATER_OR_CONTACT_SUPPORT_IF_THE_ISSUE_PERSISTS_ = 'An unexpected error occurred on the server-side while processing the request. Please try again later or contact support if the issue persists.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_500' = 500,
  }
}
