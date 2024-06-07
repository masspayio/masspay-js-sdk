/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type AttrsRequirement = {
  /**
   * The token that represents the attribute.
   */
  token: string;
  /**
   * The token that represents the stored attributes for this payer. You would use this token in attr_set_token of `initiatePayout` if you have to specify an account number when paying a transaction out.
   */
  attr_set_token?: string;
  /**
   * The label that describes that required attribute
   */
  label: string;
  /**
   * RegEx that validates that input
   */
  validation: string;
  /**
   * Flag to indicate whether this field is required or not
   */
  is_optional: boolean;
  /**
   * The existing value that is stored. 'Null' if no existing value is stored.
   */
  value?: string;
  /**
   * Written explanation of the value that the regex validation requires
   */
  expected_value?: string;
  /**
   * The type of attribute
   */
  type: AttrsRequirement.type;
  /**
   * The type of input field that is suggested for this this attribute
   */
  input_type: AttrsRequirement.input_type;
  /**
   * If set to true, it means this was the last value that was used and if no attr_set_token is provided to init payout, this value will be used by default
   */
  last_attr_value_used?: boolean;
};
export namespace AttrsRequirement {
  /**
     *
    The type of attribute
     */
  export enum type {
    CARD_NUMBER = 'CardNumber',
    BANK_ACCOUNT_TYPE = 'BankAccountType',
    BANK_ACCOUNT_NUMBER = 'BankAccountNumber',
    BANK_ACCOUNT_BRANCH_NUMBER = 'BankAccountBranchNumber',
    BANK_NAME = 'BankName',
    PHONE_NUMBER = 'PhoneNumber',
    GENDER = 'Gender',
    IDENTIFICATION_NUMBER = 'IdentificationNumber',
    BILL_REFERENCE_NUMBER = 'BillReferenceNumber',
    BANK_ROUTING_NUMBER = 'BankRoutingNumber',
    BANK_ACCOUNT_NAME = 'BankAccountName',
    MAIDEN_NAME = 'MaidenName',
    SOCIAL_SECURITY = 'SocialSecurity',
    EMPLOYMENT_NAME = 'EmploymentName',
    EMPLOYMENT_ADDRESS = 'EmploymentAddress',
    EMPLOYMENT_PHONE = 'EmploymentPhone',
    EMPLOYMENT_OCCUPATION = 'EmploymentOccupation',
    EMPLOYMENT_SUPERVISOR = 'EmploymentSupervisor',
    REMITTANCE_REASON = 'RemittanceReason',
    RELATIONSHIP = 'Relationship',
    SECOND_LAST_NAME = 'SecondLastName',
    SWIFT = 'SWIFT',
    BIRTH_COUNTRY = 'BirthCountry',
    SOURCE_OF_FUNDS = 'SourceOfFunds',
    DATE_OF_BIRTH = 'DateOfBirth',
    CARD_EXPIRATION = 'CardExpiration',
    CARD_ZIP = 'CardZip',
    IDENTIFICATION_TYPE = 'IdentificationType',
    BANK_CITY = 'BankCity',
    BANK_STATE = 'BankState',
    IDSELFIE_COLLECTION = 'IDSelfieCollection',
    CITY = 'City',
    COUNTRY = 'Country',
    IDENTIFICATION_EXPIRATION = 'IdentificationExpiration',
    ADDRESS1 = 'Address1',
    IFRAME_PAYMENT_COLLECTION = 'IFramePaymentCollection',
    POSTAL_CODE = 'PostalCode',
  } /**
     *
    The type of input field that is suggested for this this attribute
     */
  export enum input_type {
    TEXT = 'text',
    OPTIONS = 'options',
    DATE = 'date',
  }
}
