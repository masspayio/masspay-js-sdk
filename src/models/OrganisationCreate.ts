/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Organisation } from './Organisation';
export type OrganisationCreate = Organisation & {
  /**
   * Country code
   */
  country_code: string;
  /**
   * The name of the organisation
   */
  name: string;
};
