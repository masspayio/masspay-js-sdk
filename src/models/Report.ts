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
 * Report
 */
export type Report = {
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
  export?: Report._export;
};
export namespace Report {
  /**
     *
    Report export type
     */
  export enum _export {
    CSV = 'csv',
    XLSX = 'xlsx',
  }
}
