/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { login } from './login';
import type { mfa } from './mfa';
export type LoginResponse =
  | login
  | mfa
  | {
      /**
       * Result of login. Either mfa or login
       */
      result?: LoginResponse.result;
    };
export namespace LoginResponse {
  /**
     *
    Result of login. Either mfa or login
     */
  export enum result {
    MFA = 'mfa',
    LOGIN = 'login',
  }
}
