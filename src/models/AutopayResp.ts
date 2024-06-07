/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type AutopayResp = {
  /**
   * Autopay token
   */
  token: string;
  /**
   * The destination_token to autopay (send payout to)
   */
  destination_token: string;
  /**
   * The percent of incoming load that should be autopaid to the destination_token
   */
  percentage: number;
  /**
   * The token that represents a set of attributes for a specific payer. Optional, specify the value if you''re trying to update a value of a specific attributes set.
   */
  attr_set_token?: string;
};
