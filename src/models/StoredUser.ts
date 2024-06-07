/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type StoredUser = {
  /**
   * Token representing the user that was just created
   */
  user_token: string;
  /**
   * The status of the user
   */
  status: StoredUser.status;
  /**
   * The timestamp the user was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   */
  created_on: string;
  /**
   * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
   */
  internal_user_id: string;
  /**
   * The user's street address.
   */
  address1?: string;
  /**
   * The user's street address, line 2.
   */
  address2?: string;
  /**
   * The user's city.
   */
  city?: string;
  /**
   * The user's state/province.
   */
  state_province?: string;
  /**
   * The user's postal code.
   */
  postal_code?: string;
  /**
   * The user's country code. ISO_3166-1_alpha-3 code
   */
  country?: string;
  /**
   * The user's first name. (If Business account, the first name of the representative)
   */
  first_name: string;
  /**
   * The user's middle name. (If Business account, the middle name of the representative)
   */
  middle_name?: string;
  /**
   * The user's last name. (If Business account, the last name of the representative)
   */
  last_name: string;
  /**
   * The user's e-mail address. Must be unique. Cannot have two users with the same e-mail address.
   */
  email: string;
  /**
   * The user's preferred language of communication. If not provided, defaults to English (en)
   */
  language?: string;
  /**
   * (Optional) Mobile number of user. Allows for SMS notifications upon availability of funds
   */
  mobile_number?: string;
  /**
   * Company legal name (Only if Business account)
   */
  business_name?: string;
  /**
   * User's computed timezone
   */
  timezone: string;
  /**
   * Date of birth. (optional). Minimum 18 years old
   */
  date_of_birth?: string;
  /**
   * Optional JSON object with attributes that can later be searched to locate this user. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
  /**
   * If the user does not have an activated account yet, an activation URL will be provided.
   */
  activation_url?: string;
};
export namespace StoredUser {
  /**
     *
    The status of the user
     */
  export enum status {
    ACTIVE = 'ACTIVE',
    LOCKED = 'LOCKED',
    DEACTIVE = 'DEACTIVE',
  }
}
