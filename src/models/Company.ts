/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Service } from './Service';
export type Company = {
  /**
   * base64 representation of the company logo
   */
  company_logo: string;
  services: Array<Service>;
  /**
   * Overall rating of provider calculated from feedback provided by users from previous trasnactions
   */
  rating: number;
  /**
   * A short description of the company
   */
  description: string;
  /**
   * The company name
   */
  company_name: string;
};
