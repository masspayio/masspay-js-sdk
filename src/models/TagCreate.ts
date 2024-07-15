/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Tag } from './Tag';
export type TagCreate = Tag & {
  /**
   * Tag description text
   */
  text: string;
  /**
   * Tag color
   */
  color: string;
};
