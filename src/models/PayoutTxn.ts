/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type PayoutTxn = {
  /**
   * A client defined transfer identifier. This is the unique ID assigned to the transfer on your system. Max 50 characters.
   */
  client_transfer_id?: string;
  /**
   * The currency originating balance is stored in. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. In most cases this value will be USD, and therefore the defaut value if none is provided
   */
  source_currency_code?: string;
  /**
   * The currency the funds will be deposited into. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format
   */
  destination_currency_code: string;
  /**
   * Token that represents the funding source i.e. bank account, wallet. 36 characters long
   */
  source_token: string;
  /**
   * Token that represents the payout destination i.e. Omnex->Brazil->Bank Deposit->Itau. To be retrieved from the #pricing callback. If not provided, the last destination that was used for this user will be used. 36 characters long
   */
  destination_token: string;
  /**
   * The amount to be sent for payout in source currency. i.e USD. Must be provided if source_amount is empty
   */
  destination_amount?: number;
  /**
   * The amount to be received by the payout in source currency. i.e USD. Must be provided if destination_amount is empty
   */
  source_amount?: number;
  /**
   * Token that represents set of attributes that associated with destination_token. For example, bank account, mobile account, wallet id, etc. If not provided, uses the last one used. 36 characters long
   */
  attr_set_token?: string;
  /**
   * Optional JSON object with attributes that can later be searched to locate this payout. Do not include PII as this object is not encrypted.
   */
  metadata?: Record<string, any>;
  /**
   * Should we notify the user via email/sms about status updates for this payout?
   */
  notify_user?: boolean;
  /**
   * Auto commit would commit the payout without requiring the API call to the commit payout endpoint. This option is only available when the `source_currency` and the `destination_currency` are the same. Whenever an exchange rate is applied to a transaction, a separate commit call is required.
   */
  auto_commit?: boolean;
};
