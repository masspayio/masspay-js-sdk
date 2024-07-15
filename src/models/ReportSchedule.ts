/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { ReportFilterRules } from './ReportFilterRules';
/**
 * ReportSchedule
 */
export type ReportSchedule = {
  /**
   * The name of the report
   */
  name?: string;
  /**
   * Array of fields
   */
  fields?: Array<
    | 'amount'
    | 'blocked'
    | 'browser'
    | 'browser_version'
    | 'city'
    | 'country_code'
    | 'created_at'
    | 'customer_ip'
    | 'customer_status'
    | 'dynamic_descriptor'
    | 'id'
    | 'last_status_update'
    | 'latitude'
    | 'longitude'
    | 'merchant_reference'
    | 'payment_product'
    | 'payment_product_type'
    | 'platform'
    | 'processor_id_external'
    | 'processor_id_external_second'
    | 'recurring_type'
    | 'status'
    | 'status_reason'
    | 'tagged'
    | 'user_agent'
    | 'card.id'
    | 'card.bin'
    | 'card.brand'
    | 'card.expiry_month'
    | 'card.expiry_year'
    | 'card.holder_name'
    | 'card.last_four'
    | 'customer.id'
    | 'customer.title'
    | 'customer.initials'
    | 'customer.first_name'
    | 'customer.last_name'
    | 'customer.date_of_birth'
    | 'customer.email_address'
    | 'customer.phone_number'
    | 'customer.fax_number'
    | 'customer.street_address'
    | 'customer.house_number'
    | 'customer.house_number_suffix'
    | 'customer.postal_code'
    | 'customer.city'
    | 'customer.region'
    | 'customer.country_code'
    | 'customer.status'
    | 'customer.status_reason'
    | 'customer.segment'
    | 'customer.created_at'
    | 'customer.last_status_update'
    | 'details.cvv_present'
    | 'details.threed_enrolled'
    | 'details.threed_authenticated'
    | 'organisation.id'
    | 'organisation.country_code'
    | 'organisation.name'
    | 'payment_profile.id'
    | 'payment_profile.currency_code'
    | 'payment_profile.name'
    | 'payment_profile.description'
    | 'payment_profile.website'
    | 'processor.id'
    | 'processor.name'
    | 'processor.payment_product'
    | 'processor.gateway'
    | 'terminal.id'
    | 'terminal.name'
    | 'terminal.provider_id'
  >;
  /**
   * Array of organisations
   */
  organisations?: Array<string>;
  /**
   * Report filter
   */
  filter?: Array<ReportFilterRules> | null;
  /**
   * Report export type
   */
  export?: ReportSchedule._export;
  /**
   * Defines when a report will be generated, e.g. everyday, every week/couple of weeks at a certain day, every x of the month at a certain day
   */
  interval_type?: ReportSchedule.interval_type;
  /**
   * Day of the month if the interval type equals to x-th-of-the-month
   */
  day_of_the_month?: number;
  /**
   * Report schedule day of the week if intervalType is weekly/bi-weekly
   */
  day_of_the_week?: ReportSchedule.day_of_the_week | null;
  /**
   * Defines a date or a date range from which transactions will be included to a report, e.g. yesterday, last week (from last mon till last sun), last 7 days (from yesterday to 7 days back)
   */
  include_transactions_for?: ReportSchedule.include_transactions_for;
  /**
   * A specific email address to receive a notification about this kind of report
   */
  email_address?: string | null;
  /**
   * A webhook url to receive a notification about this kind of report
   */
  webhook_url?: string | null;
  /**
   * Created at
   */
  readonly created_at?: string;
  /**
   * Date when the next time will be sent to generation
   */
  readonly next_date_to_generate?: string | null;
};
export namespace ReportSchedule {
  /**
     *
    Report export type
     */
  export enum _export {
    CSV = 'csv',
    XLSX = 'xlsx',
  } /**
     *
    Defines when a report will be generated, e.g. everyday, every week/couple of weeks at a certain day, every x of the month at a certain day
     */
  export enum interval_type {
    DAILY = 'daily',
    WEEKLY = 'weekly',
    BI_WEEKLY = 'bi-weekly',
    X_TH_OF_THE_MONTH = 'x-th-of-the-month',
  } /**
     *
    Report schedule day of the week if intervalType is weekly/bi-weekly
     */
  export enum day_of_the_week {
    MON = 'mon',
    TUE = 'tue',
    WED = 'wed',
    THU = 'thu',
    FRI = 'fri',
    SAT = 'sat',
    SUN = 'sun',
  } /**
     *
    Defines a date or a date range from which transactions will be included to a report, e.g. yesterday, last week (from last mon till last sun), last 7 days (from yesterday to 7 days back)
     */
  export enum include_transactions_for {
    YESTERDAY = 'yesterday',
    LAST_7_DAYS = 'last-7-days',
    LAST_14_DAYS = 'last-14-days',
    LAST_28_DAYS = 'last-28-days',
    PREVIOUS_MONTH = 'previous-month',
    PREVIOUS_WEEK = 'previous-week',
    PREVIOUS_2_WEEKS = 'previous-2-weeks',
  }
}
