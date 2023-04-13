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
 * @interface GetUserAgreementsNames200ResponseInner
 */
export interface GetUserAgreementsNames200ResponseInner {
    /**
     * Name of user agreement
     * @type {string}
     * @memberof GetUserAgreementsNames200ResponseInner
     */
    'name': string;
    /**
     * Time when the agreement was last updated
     * @type {string}
     * @memberof GetUserAgreementsNames200ResponseInner
     */
    'last_modified': string;
    /**
     * Id representing the user agreement (to be used to retrieve it)
     * @type {number}
     * @memberof GetUserAgreementsNames200ResponseInner
     */
    'id': number;
    /**
     * Mime type of the user agreement (i.e application/pdf)
     * @type {string}
     * @memberof GetUserAgreementsNames200ResponseInner
     */
    'mime_type': string;
}

