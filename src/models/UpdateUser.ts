/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type UpdateUser = {
  /**
   * The status of the user, if set to ACTIVE when current status is DEACTIVE, reactivation fee will incur
   */
  status: UpdateUser.status;
  /**
   * The timestamp the user was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   */
  created_on?: string;
  /**
   * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
   */
  internal_user_id: string;
  /**
   * The user's street address.
   */
  address1: string;
  /**
   * The user's street address, line 2.
   */
  address2?: string;
  /**
   * The user's city.
   */
  city: string;
  /**
   * The user's state/province.
   */
  state_province: string;
  /**
   * The user's postal code.
   */
  postal_code: string;
  /**
   * The user's country code. ISO_3166-1_alpha-3 code
   */
  country: string;
  /**
   * The user's first name.
   */
  first_name: string;
  /**
   * The user's middle name.
   */
  middle_name?: string;
  /**
   * The user's last name.
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
   * Date of birth. (optional). Minimum 18 years old
   */
  date_of_birth?: string;
  /**
   * Optional JSON object with attributes that can later be searched to locate this user. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
};
export namespace UpdateUser {
  /**
     *
    The status of the user, if set to ACTIVE when current status is DEACTIVE, reactivation fee will incur
     */
  export enum status {
    ACTIVE = 'ACTIVE',
    DEACTIVE = 'DEACTIVE',
  }
}
