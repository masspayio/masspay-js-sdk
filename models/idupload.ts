/* tslint:disable */
/* eslint-disable */
/**
 * MassPay API
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: support@masspay.io
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 * @interface IDUpload
 */
export interface IDUpload {
    /**
     * The type of image being uploaded
     * @type {string}
     * @memberof IDUpload
     */
    'type': IDUploadTypeEnum;
    /**
     * Base64 encoded image (png|jpg|jpeg). Maximum total images size is 10MB
     * @type {string}
     * @memberof IDUpload
     */
    'content': string;
}

export const IDUploadTypeEnum = {
    Face: 'face',
    DocumentFront: 'document-front',
    DocumentBack: 'document-back'
} as const;

export type IDUploadTypeEnum = typeof IDUploadTypeEnum[keyof typeof IDUploadTypeEnum];


