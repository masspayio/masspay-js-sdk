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
 * Customer
 */
export type Customer = {
  /**
   * A reference specified by the merchant to identify the customer
   */
  merchant_reference?: string | null;
  /**
   * The title / honorific prefix of a person, amongst {mr, ms}
   */
  title?: string | null;
  /**
   * Initials of a person
   */
  initials?: string | null;
  /**
   * The first name(s) of a person, 100 characters or less
   */
  first_name?: string;
  /**
   * The last name(s) of a person, 100 characters or less
   */
  last_name?: string;
  /**
   * The gender of a customer amongst {male, female}
   */
  gender?: Customer.gender | null;
  /**
   * The date of birth of a person, 10 characters, ISO-8601 (YYYY-MM-DD)
   */
  date_of_birth?: string | null;
  /**
   * The email address of a person or an organisation, 100 characters or less
   */
  email_address?: string;
  /**
   * The telephone or mobile number of a person / company, ITU/E.123 format with international prefix (+PPNNNNNNNNN...)
   */
  phone_number?: string | null;
  /**
   * The fax number, ITU/E.123 format with international prefix (+PPNNNNNNNNN...)
   */
  fax_number?: string | null;
  /**
   * A complete street name of a person's or company's address, 250 characters or less
   */
  street_address?: string | null;
  /**
   * Address house number
   */
  house_number?: string | null;
  /**
   * Address house extension
   */
  house_number_suffix?: string | null;
  /**
   * A postal code for the address, if any
   */
  postal_code?: string | null;
  /**
   * A city name for the address, 100 characters or less
   */
  city?: string | null;
  /**
   * A region / state / province for the address
   */
  region?: string | null;
  /**
   * A 2-letter ISO3166 alpha-2. country code for the address
   */
  country_code?: string | null;
  /**
   * The social security number of the customer. Only supported for DK, FI, NO & SE and required for dealing with Klarna
   */
  social_security_number?: string | null;
  /**
   * Customer verification status. Defaults to 'unverified'
   */
  status?: Customer.status;
  /**
   * Customer verification status reason
   */
  status_reason?: string;
  /**
   * Customer RFM (customer value) segment
   */
  segment?: Customer.segment | null;
  /**
   * Company information - Is sole proprietor
   */
  is_sole_proprietor?: boolean | null;
  /**
   * Company information - Name
   */
  corporation_name?: string | null;
  /**
   * Company information - Chamber of Commerce number
   */
  coc_number?: string | null;
};
export namespace Customer {
  /**
     *
    The gender of a customer amongst {male, female}
     */
  export enum gender {
    MALE = 'male',
    FEMALE = 'female',
    EMPTY = '',
  } /**
     *
    Customer verification status. Defaults to 'unverified'
     */
  export enum status {
    UNVERIFIED = 'unverified',
    AUTO_UNVERIFIED = 'auto-unverified',
    AUTO_VERIFIED = 'auto-verified',
    VERIFIED = 'verified',
  } /**
     *
    Customer RFM (customer value) segment
     */
  export enum segment {
    CHAMPION = 'Champion',
    LOYAL = 'Loyal',
    POTENTIAL_LOYALIST = 'Potential Loyalist',
    RECENT = 'Recent',
    PROMISING = 'Promising',
    NEEDING_ATTENTION = 'Needing Attention',
    ABOUT_TO_SLEEP = 'About To Sleep',
    CAN_T_LOSE_THEM = 'Can’t Lose Them',
    HIBERNATING = 'Hibernating',
    LOST = 'Lost',
    EMPTY = '',
  }
}
