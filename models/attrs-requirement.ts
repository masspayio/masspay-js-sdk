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
 * @interface AttrsRequirement
 */
export interface AttrsRequirement {
    /**
     * The token that represents the attribute.
     * @type {string}
     * @memberof AttrsRequirement
     */
    'token': string;
    /**
     * The token that represents the stored attributes for this payer. You would use this token in attr_set_token of `initiatePayout` if you have to specify an account number when paying a transaction out.
     * @type {string}
     * @memberof AttrsRequirement
     */
    'attr_set_token'?: string;
    /**
     * The label that describes that required attribute
     * @type {string}
     * @memberof AttrsRequirement
     */
    'label'?: string;
    /**
     * RegEx that validates that input
     * @type {string}
     * @memberof AttrsRequirement
     */
    'validation'?: string;
    /**
     * Flag to indicate whether this field is required or not
     * @type {boolean}
     * @memberof AttrsRequirement
     */
    'is_optional'?: boolean;
    /**
     * The existing value that is stored. \'Null\' if no existing value is stored.
     * @type {string}
     * @memberof AttrsRequirement
     */
    'value': string;
    /**
     * Written explanation of the value that the regex validation requires
     * @type {string}
     * @memberof AttrsRequirement
     */
    'expected_value'?: string;
    /**
     * The type of attribute
     * @type {string}
     * @memberof AttrsRequirement
     */
    'type'?: AttrsRequirementTypeEnum;
    /**
     * The type of input field that is suggested for this this attribute
     * @type {string}
     * @memberof AttrsRequirement
     */
    'input_type': AttrsRequirementInputTypeEnum;
    /**
     * If set to true, it means this was the last value that was used and if no attr_set_token is provided to init payout, this value will be used by default
     * @type {boolean}
     * @memberof AttrsRequirement
     */
    'last_attr_value_used'?: boolean;
}

export const AttrsRequirementTypeEnum = {
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
    IdSelfieCollection: 'IDSelfieCollection',
    City: 'City',
    Country: 'Country',
    IdentificationExpiration: 'IdentificationExpiration',
    Address1: 'Address1'
} as const;

export type AttrsRequirementTypeEnum = typeof AttrsRequirementTypeEnum[keyof typeof AttrsRequirementTypeEnum];
export const AttrsRequirementInputTypeEnum = {
    Text: 'text',
    Options: 'options',
    Date: 'date'
} as const;

export type AttrsRequirementInputTypeEnum = typeof AttrsRequirementInputTypeEnum[keyof typeof AttrsRequirementInputTypeEnum];


