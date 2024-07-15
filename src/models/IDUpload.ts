/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type IDUpload = {
  /**
   * The type of image being uploaded
   */
  type: IDUpload.type;
  /**
   * Base64 encoded image (png|jpg|jpeg). Maximum total images size is 10MB
   */
  content: string;
};
export namespace IDUpload {
  /**
     *
    The type of image being uploaded
     */
  export enum type {
    FACE = 'face',
    DOCUMENT_FRONT = 'document-front',
    DOCUMENT_BACK = 'document-back',
  }
}
