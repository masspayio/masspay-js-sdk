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
 * Response object when a user is found
 * @export
 * @interface FoundUser
 */
export interface FoundUser {
    /**
     * The token of the found user
     * @type {string}
     * @memberof FoundUser
     */
    'user_token': string;
    /**
     * First name of the user
     * @type {string}
     * @memberof FoundUser
     */
    'first_name': string;
    /**
     * Last name of the user
     * @type {string}
     * @memberof FoundUser
     */
    'last_name': string;
    /**
     * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
     * @type {string}
     * @memberof FoundUser
     */
    'internal_user_id': string;
}

