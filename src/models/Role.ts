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
 * Role
 */
export type Role = {
  /**
   * Name of the role
   */
  name?: string;
  /**
   * Roles are grouped in role categories
   */
  category?: string;
  /**
   * Description of the role
   */
  description?: string;
  /**
   * True if the role is a psp rule
   */
  psp?: boolean;
};
