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
 * List of conditions to search for. Multiple conditions would be treated as AND
 */
export type AttrVelocityRequest = Array<{
  /**
   * The type of attribute to look for
   */
  type:
    | 'CardNumber'
    | 'BankAccountType'
    | 'BankAccountNumber'
    | 'BankAccountBranchNumber'
    | 'BankName'
    | 'PhoneNumber'
    | 'Gender'
    | 'IdentificationNumber'
    | 'BillReferenceNumber'
    | 'BankRoutingNumber'
    | 'BankAccountName'
    | 'MaidenName'
    | 'SocialSecurity'
    | 'EmploymentName'
    | 'EmploymentAddress'
    | 'EmploymentPhone'
    | 'EmploymentOccupation'
    | 'EmploymentSupervisor'
    | 'RemittanceReason'
    | 'Relationship'
    | 'SecondLastName'
    | 'SWIFT'
    | 'BirthCountry'
    | 'SourceOfFunds'
    | 'DateOfBirth'
    | 'CardExpiration'
    | 'CardZip'
    | 'IdentificationType'
    | 'BankCity'
    | 'BankState'
    | 'IDSelfieCollection'
    | 'City'
    | 'Country'
    | 'IdentificationExpiration'
    | 'Address1'
    | 'IFramePaymentCollection';
  /**
   * The value to search for
   */
  value: string;
}>;
