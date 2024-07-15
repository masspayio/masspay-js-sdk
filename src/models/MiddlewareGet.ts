/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type MiddlewareGet = {
  /**
   * The ID of the middleware object
   */
  id?: string;
  /**
   * Name of the middleware
   */
  name?: string;
  /**
   * Middleware type
   */
  type?: MiddlewareGet.type;
  /**
   * Provider used
   */
  provider?: MiddlewareGet.provider;
};
export namespace MiddlewareGet {
  /**
     *
    Middleware type
     */
  export enum type {
    FRAUD = 'fraud',
    THREEDS = 'threeds',
  } /**
     *
    Provider used
     */
  export enum provider {
    ENDEAVOUR = 'endeavour',
    FORTER = 'forter',
    SIFT = 'sift',
  }
}
