/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type SpendBacks = {
  /**
   * Token representing the load token
   */
  spendback_token: string;
  /**
   * The timestamp the spend back was created in the system. Using UTC timestamp.[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   */
  time_of_spendback: string;
  /**
   * A client defined spend back identifier. This is the unique ID assigned to the spend back on your system. Max 50 characters.
   */
  client_spendback_id: string;
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
   * Optional JSON object with attributes that can later be searched to locate this spendback. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
};
