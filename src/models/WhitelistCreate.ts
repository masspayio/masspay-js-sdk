/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Whitelist } from './Whitelist';
export type WhitelistCreate = Whitelist & {
  /**
   * Item description
   */
  description: string;
  /**
   * Ip address
   */
  ip: string;
};
