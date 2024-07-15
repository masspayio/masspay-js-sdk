/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
/**
 * OrganisationContact
 */
export type OrganisationContact = {
  /**
   * The first name(s) of the contact, 100 characters or less
   */
  first_name?: string;
  /**
   * The last name(s) of the contact, 100 characters or less
   */
  last_name?: string;
  /**
   * The date of birth of a person, 10 characters, ISO-8601 (YYYY-MM-DD)
   */
  date_of_birth?: string | null;
  /**
   * A 2-letter ISO3166 alpha-2. Country code for country of birth
   */
  country_of_birth?: string | null;
  /**
   * A 2-letter ISO3166 alpha-2. Country code for nationality
   */
  country_nationality?: string | null;
  /**
   * A 2-letter ISO3166 alpha-2. Country code for country of residence
   */
  country_residence?: string | null;
  /**
   * Contact has public function
   */
  public_function?: boolean | null;
  /**
   * Contact is ultimate beneficial owner (UBO)
   */
  ubo?: boolean | null;
};
