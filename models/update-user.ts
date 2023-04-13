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
 * @interface UpdateUser
 */
export interface UpdateUser {
    /**
     * The status of the user, if set to ACTIVE when current status is DEACTIVE, reactivation fee will incur
     * @type {string}
     * @memberof UpdateUser
     */
    'status': UpdateUserStatusEnum;
    /**
     * The timestamp the user was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * @type {string}
     * @memberof UpdateUser
     */
    'created_on'?: string;
    /**
     * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
     * @type {string}
     * @memberof UpdateUser
     */
    'internal_user_id': string;
    /**
     * The user\'s street address.
     * @type {string}
     * @memberof UpdateUser
     */
    'address1': string;
    /**
     * The user\'s street address, line 2.
     * @type {string}
     * @memberof UpdateUser
     */
    'address2'?: string;
    /**
     * The user\'s city.
     * @type {string}
     * @memberof UpdateUser
     */
    'city': string;
    /**
     * The user\'s state/province.
     * @type {string}
     * @memberof UpdateUser
     */
    'state_province': string;
    /**
     * The user\'s postal code.
     * @type {string}
     * @memberof UpdateUser
     */
    'postal_code': string;
    /**
     * The user\'s country code. ISO_3166-1_alpha-3 code
     * @type {string}
     * @memberof UpdateUser
     */
    'country': string;
    /**
     * The user\'s first name.
     * @type {string}
     * @memberof UpdateUser
     */
    'first_name': string;
    /**
     * The user\'s middle name.
     * @type {string}
     * @memberof UpdateUser
     */
    'middle_name'?: string;
    /**
     * The user\'s last name.
     * @type {string}
     * @memberof UpdateUser
     */
    'last_name': string;
    /**
     * The user\'s e-mail address. Must be unique. Cannot have two users with the same e-mail address.
     * @type {string}
     * @memberof UpdateUser
     */
    'email': string;
    /**
     * The user\'s preferred language of communication. If not provided, defaults to English (en)
     * @type {string}
     * @memberof UpdateUser
     */
    'language'?: string;
    /**
     * (Optional) Mobile number of user. Allows for SMS notifications upon availability of funds
     * @type {string}
     * @memberof UpdateUser
     */
    'mobile_number'?: string;
    /**
     * Company legal name (Only if Business account)
     * @type {string}
     * @memberof UpdateUser
     */
    'business_name'?: string;
    /**
     * Date of birth. (optional). Minimum 18 years old
     * @type {string}
     * @memberof UpdateUser
     */
    'date_of_birth'?: string;
    /**
     * Optional JSON object with attributes that can later be searched to locate this user. Do not include PII as this object is not encrypted.
     * @type {object}
     * @memberof UpdateUser
     */
    'metadata'?: object;
}

export const UpdateUserStatusEnum = {
    Active: 'ACTIVE',
    Deactive: 'DEACTIVE'
} as const;

export type UpdateUserStatusEnum = typeof UpdateUserStatusEnum[keyof typeof UpdateUserStatusEnum];


