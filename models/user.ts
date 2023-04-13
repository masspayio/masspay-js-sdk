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
 * @interface User
 */
export interface User {
    /**
     * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
     * @type {string}
     * @memberof User
     */
    'internal_user_id': string;
    /**
     * The user\'s street address. Required in order to process a payout.
     * @type {string}
     * @memberof User
     */
    'address1'?: string;
    /**
     * The user\'s street address, line 2.
     * @type {string}
     * @memberof User
     */
    'address2'?: string;
    /**
     * The user\'s city. Required in order to process a payout.
     * @type {string}
     * @memberof User
     */
    'city'?: string;
    /**
     * The user\'s state/province.
     * @type {string}
     * @memberof User
     */
    'state_province'?: string;
    /**
     * The user\'s postal code.
     * @type {string}
     * @memberof User
     */
    'postal_code'?: string;
    /**
     * The user\'s country code. [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code. Required in order to process a payout.
     * @type {string}
     * @memberof User
     */
    'country': string;
    /**
     * The user\'s first name. (If Business account, the first name of the representative)
     * @type {string}
     * @memberof User
     */
    'first_name': string;
    /**
     * The user\'s middle name. (If Business account, the middle name of the representative)
     * @type {string}
     * @memberof User
     */
    'middle_name'?: string;
    /**
     * The user\'s last name. (If Business account, the last name of the representative)
     * @type {string}
     * @memberof User
     */
    'last_name': string;
    /**
     * The user\'s e-mail address. Must be unique. Cannot have two users with the same e-mail address.
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * The user\'s preferred language of communication. If not provided, defaults to English (en)
     * @type {string}
     * @memberof User
     */
    'language'?: string;
    /**
     * (Optional) Mobile number of user. Allows for SMS notifications upon availability of funds
     * @type {string}
     * @memberof User
     */
    'mobile_number'?: string;
    /**
     * Company legal name (Only if Business account)
     * @type {string}
     * @memberof User
     */
    'business_name'?: string;
    /**
     * Date of birth. (optional). Minimum 18 years old
     * @type {string}
     * @memberof User
     */
    'date_of_birth'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this user. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof User
     */
    'metadata'?: object;
    /**
     * Should we notify the user via email that their user has been created in the system? They will receive instructions to establish such account.
     * @type {boolean}
     * @memberof User
     */
    'notify_user'?: boolean;
}

