/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type TaxYearUserResp = {
  /**
   * The user token that needs to be fetched.
   */
  user_token?: string;
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
  state_province?: string;
  /**
   * The user's postal code.
   */
  postal_code?: number;
  /**
   * The user's country code. [ISO_3166-1_alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code.
   */
  country: string;
  /**
   * The user's first name. If Business account, the first name of the representative.
   */
  first_name: string;
  /**
   * The user's middle name. If Business account, the middle name of the representative.
   */
  middle_name?: string;
  /**
   * The user's last name. If Business account, the last name of the representative.
   */
  last_name: string;
  /**
   * The user's e-mail address. Must be unique. Cannot have two users with the same e-mail address.
   */
  email?: string;
  /**
   * Mobile phone number in [international format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers#).
   */
  mobile_number?: string;
  /**
   * Name of business
   */
  business_name?: string;
  /**
   * Date of birth. Minimum 18 years old.
   */
  date_of_birth: string;
  /**
   * Current user balance
   */
  balance: number;
  /**
   * User Tax ID. This can be a Taxpayer Identification Number (TIN), Social Security Number (SSN), Individual Taxpayer Identification Number (ITIN) or Employer Identification Number (EIN).
   */
  tax_id?: string;
};
