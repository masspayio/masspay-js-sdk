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
 * Bad request.
 */
export type Error400 = {
  /**
   * Error title.
   */
  title?: Error400.title;
  /**
   * Error description.
   */
  message: Error400.message;
  /**
   * Error code.
   */
  code: Error400.code;
  error?: {
    /**
     * Reason for error
     */
    reason?: string;
    /**
     * Specific details of the cause of the error
     */
    details?: Array<string>;
  };
};
export namespace Error400 {
  /**
     *
    Error title.
     */
  export enum title {
    BAD_REQUEST_ = 'Bad request.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_REQUEST_WAS_INVALID_OR_MALFORMED_PLEASE_ENSURE_THAT_THE_REQUEST_BODY_CONFORMS_TO_THE_REQUIRED_FORMAT_AND_THAT_ALL_REQUIRED_PARAMETERS_ARE_INCLUDED_ = 'The request was invalid or malformed. Please ensure that the request body conforms to the required format and that all required parameters are included.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_400' = 400,
  }
}
