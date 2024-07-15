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
 * Organisation
 */
export type Organisation = {
  /**
   * External provider ID
   */
  provider_id?: string;
  /**
   * Country code
   */
  country_code?: string;
  /**
   * The organisation's email address
   */
  email?: string;
  /**
   * Address extension, e.g. apartment, floor or suite
   */
  extended_address?: string;
  /**
   * The organisation's locality / city
   */
  locality?: string;
  /**
   * The name of the organisation
   */
  name?: string;
  /**
   * The organisation's telephone number
   */
  phone?: string;
  /**
   * The organisation's postal code
   */
  postal_code?: string;
  /**
   * The organisation's country region
   */
  region?: string;
  /**
   * The organisation street address
   */
  street?: string;
  /**
   * The organisation street number
   */
  street_number?: number | null;
  /**
   * The organisation's legal structure
   */
  legal?: string;
  /**
   * The organisation's tax number
   */
  tax_number?: string | null;
  /**
   * The registration number of the organization at the (local) chamber of commerce
   */
  registration_number?: string | null;
  /**
   * Whitelist enabled setting
   * If set to true, prevents the Organisation's API keys to perform actions from non-whitelisted IPs
   */
  whitelist_enabled?: boolean;
  /**
   * Reference to the welcome
   */
  welcome?: string;
};
