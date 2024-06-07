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
 * Gateway Time-out.
 */
export type Error504 = {
  /**
   * Error title.
   */
  title?: Error504.title;
  /**
   * Error description.
   */
  message: Error504.message;
  /**
   * Error code.
   */
  code: Error504.code;
};
export namespace Error504 {
  /**
     *
    Error title.
     */
  export enum title {
    GATEWAY_TIME_OUT_ = 'Gateway Time-out.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_REQUEST_TIMED_OUT_WHILE_WAITING_FOR_A_RESPONSE_FROM_THE_SERVER_PLEASE_TRY_AGAIN_LATER_OR_CONTACT_SUPPORT_IF_THE_ISSUE_PERSISTS_ = 'The request timed out while waiting for a response from the server. Please try again later or contact support if the issue persists.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_500' = 500,
  }
}
