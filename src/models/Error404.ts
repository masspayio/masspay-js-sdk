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
 * Not found.
 */
export type Error404 = {
  /**
   * Error title.
   */
  title?: Error404.title;
  /**
   * Error description.
   */
  message: Error404.message;
  /**
   * Error code.
   */
  code: Error404.code;
};
export namespace Error404 {
  /**
     *
    Error title.
     */
  export enum title {
    NOT_FOUND_ = 'Not found.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_REQUESTED_RESOURCE_WAS_NOT_FOUND_PLEASE_ENSURE_THAT_THE_URL_FOR_THE_REQUEST_IS_CORRECT_AND_THAT_THE_REQUESTED_RESOURCE_EXISTS_ = 'The requested resource was not found. Please ensure that the URL for the request is correct and that the requested resource exists.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_404' = 404,
  }
}
