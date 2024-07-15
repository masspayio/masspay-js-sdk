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
 * Response object when a user is found
 */
export type FoundUser = {
  /**
   * The token of the found user
   */
  user_token: string;
  /**
   * First name of the user
   */
  first_name: string;
  /**
   * Last name of the user
   */
  last_name: string;
  /**
   * A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |
   */
  internal_user_id: string;
};
