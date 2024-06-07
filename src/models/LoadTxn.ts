/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type LoadTxn = {
  /**
   * A client defined load identifier. This is the unique ID assigned to the load on your system. Max 50 characters.
   */
  client_load_id: string;
  /**
   * Token that represents the funding source i.e. bank account, wallet. 36 characters long
   */
  source_token: string;
  /**
   * The amount to credit the user's wallet in source currency
   */
  amount: number;
  /**
   * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided. There is a special currency case for PNTS - learn more [here] (#Points)
   */
  source_currency_code?: string;
  /**
   * A description for the load. Will be visible to the user receiving the load
   */
  notes?: string;
  /**
   * Should we notify the user via email that they've received a load? If the user has no existing account, they will receive instructions to establish such account.
   */
  notify_user?: boolean;
  /**
   * Future date/time to process the load on. If none is provided, it is processed right away. Time to be provided in UTC [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   */
  time_to_process?: string;
  /**
   * Optional JSON object with attributes that can later be searched to locate this load. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
};
