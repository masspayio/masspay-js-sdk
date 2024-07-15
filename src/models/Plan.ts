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
 * Plan
 */
export type Plan = {
  /**
   * Reference to the checkout used for this plan
   */
  checkout?: string | null;
  /**
   * Plan name
   */
  name?: string;
  /**
   * Description
   */
  description?: string;
  /**
   * A short reference / descriptor that will show up on the customers bank statement
   */
  dynamic_descriptor?: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount?: number;
  /**
   * Specifies cycle frequency
   */
  interval?: Plan.interval;
  /**
   * The number of intervals between billing. For example, interval=month and interval_count=3 bills every 3 months Maximum of one-year total interval allowed
   */
  interval_count?: number;
  /**
   * The maximum number of billing cycles in the subscription
   */
  max_billing_cycle?: number | null;
  /**
   * A webhook url that is called with subscription updates.
   */
  webhook_subscription_update?: string | null;
  /**
   * An email address that receives subscription updates.
   */
  email_subscription_update?: string | null;
  /**
   * Array of subscription statuses. When a subscription status is set to one of those a notification is sent.
   */
  statuses_subscription_update?: Array<'CREATED' | 'ACTIVE' | 'PAST_DUE' | 'EXPIRED' | 'CANCELLED' | 'COMPLETED'>;
};
export namespace Plan {
  /**
     *
    Specifies cycle frequency
     */
  export enum interval {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
  }
}
