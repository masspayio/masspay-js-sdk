/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type AddUBORequest = {
  /**
   * What is the percentage ownership of this individual in the corporation
   */
  ownership_percentage: number;
  /**
   * Phone number including country code prefix
   */
  phone: string;
  /**
   * First name
   */
  first_name: string;
  /**
   * Middle name (Optional)
   */
  middle_name?: string;
  /**
   * Last name
   */
  last_name: string;
  /**
   * Email address
   */
  email: string;
  /**
   * Date of birth
   */
  dob: string;
  /**
   * Tax ID. In the U.S, SSN
   */
  tax_id: string;
  /**
   * Address 1
   */
  address1: string;
  /**
   * Address 2
   */
  address2?: string;
  /**
   * City
   */
  city: string;
  /**
   * State
   */
  state: string;
  /**
   * Zip/Postal code
   */
  zip: string;
  /**
   * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   */
  country: string;
};
