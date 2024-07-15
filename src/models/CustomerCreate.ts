/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Customer } from './Customer';
export type CustomerCreate = Customer & {
  /**
   * The email address of a person or an organisation, 100 characters or less
   */
  email_address: string;
};
