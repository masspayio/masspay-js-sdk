/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { OrganisationContact } from './OrganisationContact';
export type OrganisationContactCreate = OrganisationContact & {
  /**
   * The first name(s) of the contact, 100 characters or less
   */
  first_name: string;
  /**
   * The last name(s) of the contact, 100 characters or less
   */
  last_name: string;
};
