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
 * Still in use.
 */
export type Error409 = {
  /**
   * Error title.
   */
  title?: Error409.title;
  /**
   * Error description.
   */
  message: Error409.message;
  /**
   * Error code.
   */
  code: Error409.code;
  /**
   * ID of object in use.
   */
  id?: string;
};
export namespace Error409 {
  /**
     *
    Error title.
     */
  export enum title {
    STILL_IN_USE_ = 'Still in use.',
  } /**
     *
    Error description.
     */
  export enum message {
    THE_ITEM_YOU_ARE_ATTEMPTING_TO_DELETE_IS_CURRENTLY_IN_USE_IT_IS_NOT_POSSIBLE_TO_PERFORM_A_DELETE_OPERATION_UNTIL_THE_ITEM_IS_REMOVED_FROM_ITS_CURRENT_STATE_OF_USE_ = 'The item you are attempting to delete is currently in use. It is not possible to perform a DELETE operation until the item is removed from its current state of use.',
  } /**
     *
    Error code.
     */
  export enum code {
    '_409' = 409,
  }
}
