/* tslint:disable */
/* eslint-disable */
/**
 * MassPay API
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: support@masspay.io
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 * @interface AttrVelocityRequestInner
 */
export interface AttrVelocityRequestInner {
    /**
     * The type of attribute to look for
     * @type {string}
     * @memberof AttrVelocityRequestInner
     */
    'type': AttrVelocityRequestInnerTypeEnum;
    /**
     * The value to search for
     * @type {string}
     * @memberof AttrVelocityRequestInner
     */
    'value': string;
}

export const AttrVelocityRequestInnerTypeEnum = {
    CardNumber: 'CardNumber',
    BankAccountType: 'BankAccountType',
    BankAccountNumber: 'BankAccountNumber',
    BankAccountBranchNumber: 'BankAccountBranchNumber',
    BankName: 'BankName',
    PhoneNumber: 'PhoneNumber',
    Gender: 'Gender',
    IdentificationNumber: 'IdentificationNumber',
    BillReferenceNumber: 'BillReferenceNumber',
    BankRoutingNumber: 'BankRoutingNumber',
    BankAccountName: 'BankAccountName',
    MaidenName: 'MaidenName',
    SocialSecurity: 'SocialSecurity',
    EmploymentName: 'EmploymentName',
    EmploymentAddress: 'EmploymentAddress',
    EmploymentPhone: 'EmploymentPhone',
    EmploymentOccupation: 'EmploymentOccupation',
    EmploymentSupervisor: 'EmploymentSupervisor',
    RemittanceReason: 'RemittanceReason',
    Relationship: 'Relationship',
    SecondLastName: 'SecondLastName',
    Swift: 'SWIFT',
    BirthCountry: 'BirthCountry',
    SourceOfFunds: 'SourceOfFunds',
    DateOfBirth: 'DateOfBirth',
    CardExpiration: 'CardExpiration',
    CardZip: 'CardZip',
    IdentificationType: 'IdentificationType',
    BankCity: 'BankCity',
    BankState: 'BankState',
    IdSelfieCollection: 'IDSelfieCollection'
} as const;

export type AttrVelocityRequestInnerTypeEnum = typeof AttrVelocityRequestInnerTypeEnum[keyof typeof AttrVelocityRequestInnerTypeEnum];


