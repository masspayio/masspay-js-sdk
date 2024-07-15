/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type OrganisationHierarchy = {
  /**
   * An organisation id representing the parent of this organisation
   */
  parent?: string;
  /**
   * Id
   */
  id?: string;
  /**
   * The name of the organisation
   */
  name?: string;
  /**
   * Child organisation(s)
   */
  children?: Array<OrganisationHierarchy>;
};
