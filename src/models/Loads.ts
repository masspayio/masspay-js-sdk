/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type Loads = {
  /**
   * Token representing the load token
   */
  load_token: string;
  /**
   * The timestamp the load was processed. If not processed yet, a future date will be returned. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   */
  time_of_load: string;
  /**
   * A client defined load identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
   */
  client_load_id: string;
  /**
   * Token that represents the funding source i.e. bank account, wallet. 36 characters long
   */
  source_token: string;
  /**
   * Token that represents the wallet that received the funds. 36 characters long
   */
  wallet_token: string;
  /**
   * The amount to credit the user's wallet in source currency
   */
  amount: number;
  /**
   * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
   */
  source_currency_code: string;
  /**
   * A description for the load. Will be visible to the user receiving the load
   */
  notes: string;
  /**
   * Status of the load
   */
  status: Loads.status;
  /**
   * Optional JSON object with attributes that can later be searched to locate this load. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
};
export namespace Loads {
  /**
     *
    Status of the load
     */
  export enum status {
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',
    SCHEDULED = 'SCHEDULED',
  }
}
