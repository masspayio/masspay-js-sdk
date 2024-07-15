/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type ProcessorList = {
  /**
   * Processor Id
   */
  id?: string;
  /**
   * Name of the processor
   */
  name?: string;
  /**
   * Type of payment method this processor is used for
   */
  payment_product?: string;
  /**
   * Payment gateway used
   */
  gateway?: string;
};
