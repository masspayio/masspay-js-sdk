/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { Plan } from './Plan';
export type PlanCreate = Plan & {
  /**
   * Plan name
   */
  name: string;
  /**
   * Amount is charged without a decimal place.
   */
  amount: number;
  /**
   * Specifies cycle frequency
   */
  interval: PlanCreate.interval;
};
export namespace PlanCreate {
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
