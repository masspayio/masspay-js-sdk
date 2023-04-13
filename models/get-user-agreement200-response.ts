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
 * User Agreement
 * @export
 * @interface GetUserAgreement200Response
 */
export interface GetUserAgreement200Response {
    /**
     * Name of user agreement
     * @type {string}
     * @memberof GetUserAgreement200Response
     */
    'name': string;
    /**
     * Base64 encoded byte representing the content of the file
     * @type {string}
     * @memberof GetUserAgreement200Response
     */
    'content': string;
    /**
     * Time when the agreement was last updated
     * @type {string}
     * @memberof GetUserAgreement200Response
     */
    'last_modified': string;
    /**
     * Id representing the user agreement
     * @type {number}
     * @memberof GetUserAgreement200Response
     */
    'id': number;
    /**
     * Mime type of the user agreement (i.e application/pdf)
     * @type {string}
     * @memberof GetUserAgreement200Response
     */
    'mime_type'?: string;
}

