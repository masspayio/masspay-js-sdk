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
 * @interface StoredUser
 */
export interface StoredUser {
    /**
     * Token representing the user that was just created
     * @type {string}
     * @memberof StoredUser
     */
    'user_token': string;
    /**
     * The status of the user
     * @type {string}
     * @memberof StoredUser
     */
    'status': StoredUserStatusEnum;
    /**
     * The timestamp the user was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * @type {string}
     * @memberof StoredUser
     */
    'created_on': string;
    /**
     * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
     * @type {string}
     * @memberof StoredUser
     */
    'internal_user_id': string;
    /**
     * The user\'s street address.
     * @type {string}
     * @memberof StoredUser
     */
    'address1'?: string;
    /**
     * The user\'s street address, line 2.
     * @type {string}
     * @memberof StoredUser
     */
    'address2'?: string;
    /**
     * The user\'s city.
     * @type {string}
     * @memberof StoredUser
     */
    'city'?: string;
    /**
     * The user\'s state/province.
     * @type {string}
     * @memberof StoredUser
     */
    'state_province'?: string;
    /**
     * The user\'s postal code.
     * @type {string}
     * @memberof StoredUser
     */
    'postal_code'?: string;
    /**
     * The user\'s country code. ISO_3166-1_alpha-3 code
     * @type {string}
     * @memberof StoredUser
     */
    'country'?: string;
    /**
     * The user\'s first name. (If Business account, the first name of the representative)
     * @type {string}
     * @memberof StoredUser
     */
    'first_name': string;
    /**
     * The user\'s middle name. (If Business account, the middle name of the representative)
     * @type {string}
     * @memberof StoredUser
     */
    'middle_name'?: string;
    /**
     * The user\'s last name. (If Business account, the last name of the representative)
     * @type {string}
     * @memberof StoredUser
     */
    'last_name': string;
    /**
     * The user\'s e-mail address. Must be unique. Cannot have two users with the same e-mail address.
     * @type {string}
     * @memberof StoredUser
     */
    'email': string;
    /**
     * The user\'s preferred language of communication. If not provided, defaults to English (en)
     * @type {string}
     * @memberof StoredUser
     */
    'language'?: string;
    /**
     * (Optional) Mobile number of user. Allows for SMS notifications upon availability of funds
     * @type {string}
     * @memberof StoredUser
     */
    'mobile_number'?: string;
    /**
     * Company legal name (Only if Business account)
     * @type {string}
     * @memberof StoredUser
     */
    'business_name'?: string;
    /**
     * User\'s computed timezone
     * @type {string}
     * @memberof StoredUser
     */
    'timezone': string;
    /**
     * Date of birth. (optional). Minimum 18 years old
     * @type {string}
     * @memberof StoredUser
     */
    'date_of_birth'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this user. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof StoredUser
     */
    'metadata'?: object;
}

export const StoredUserStatusEnum = {
    Active: 'ACTIVE',
    Locked: 'LOCKED',
    Deactive: 'DEACTIVE'
} as const;

export type StoredUserStatusEnum = typeof StoredUserStatusEnum[keyof typeof StoredUserStatusEnum];


