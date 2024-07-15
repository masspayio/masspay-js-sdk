/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type CreateSubaccountTxn = {
  /**
   * Legal name of the corporation
   */
  company_name: string;
  /**
   * Name the corporation conducts a business under or DBA
   */
  company_dba?: string;
  /**
   * Corporate phone number
   */
  phone: string;
  /**
   * Incorporation date
   */
  inc_date: string;
  /**
   * Corporate registration number. In the U.S, EIN
   */
  registration_number: string;
  /**
   * Website the corporation conducts business under
   */
  website: string;
  /**
   * NAICS code
   */
  naics?: string;
  /**
   * What is the minimum allowed age for payees under this organization. Default value is 18
   */
  min_payee_age?: number;
  /**
   * Legal structure of the corporation
   */
  legal_structure: CreateSubaccountTxn.legal_structure;
  /**
   * Business mailing address
   */
  address1: string;
  /**
   * Business mailing address #2
   */
  address2?: string;
  /**
   * State
   */
  state: string;
  /**
   * City
   */
  city: string;
  /**
   * Postal code
   */
  zip: string;
  /**
   * 3 letters ISO country code
   */
  country: string;
  /**
   * Signer on the account
   */
  signer?: {
    /**
     * First name of signer on the account
     */
    first_name: string;
    /**
     * Last name of signer on the account
     */
    last_name: string;
    /**
     * E-mail of signer on the account
     */
    email: string;
    /**
     * Date of birth of signer on the account
     */
    dob: string;
  };
  /**
   * What industry does the corporation operate in
   */
  industry: CreateSubaccountTxn.industry;
};
export namespace CreateSubaccountTxn {
  /**
     *
    Legal structure of the corporation
     */
  export enum legal_structure {
    CCORP = 'Ccorp',
    LLC = 'LLC',
    PARTNERSHIP = 'Partnership',
    NONPROFIT = 'Nonprofit',
    SCORP = 'Scorp',
    SOLEPROP = 'Soleprop',
    OTHER = 'Other',
  } /**
     *
    What industry does the corporation operate in
     */
  export enum industry {
    MLM = 'MLM',
    CRYPTO = 'Crypto',
    ADULT = 'Adult',
    GENERAL = 'General',
  }
}
