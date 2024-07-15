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
 * Organisation
 */
export type Terminal = {
  /**
   * Reference to the organization this terminal belongs to
   */
  organisation?: string;
  /**
   * The name of the terminal
   */
  name?: string;
  /**
   * Terminal model
   */
  model?: string | null;
  /**
   * Serial number
   */
  serial_number?: string | null;
  /**
   * Hardware revision
   */
  hardware_revision?: string | null;
  /**
   * The status of the terminal
   */
  status?: Terminal.status;
};
export namespace Terminal {
  /**
     *
    The status of the terminal
     */
  export enum status {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
  }
}
