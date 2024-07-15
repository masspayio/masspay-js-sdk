/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type ChargebackAggregate = {
  /**
   * String that represents the period
   */
  period?: string;
  /**
   * The year to which the result applies
   */
  year?: string;
  /**
   * The number of chargebacks in a given period
   */
  count?: string;
  /**
   * The total amount of the chargebacks in a given period
   */
  amount?: string;
};
