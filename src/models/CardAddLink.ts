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
 * CardAddLink
 */
export type CardAddLink = {
  /**
   * Reference to the organization this link belongs to
   */
  organisation?: string;
  /**
   * Reference to the customer this card add link belongs to
   */
  customer?: string;
  /**
   * Reference to the checkout this card add link belongs to
   */
  checkout?: string | null;
  /**
   * If the card object should be stored with the processor too, this field is required
   */
  payment_profile?: string | null;
  /**
   * A short reference / descriptor that will show up on the card add link page
   */
  dynamic_descriptor?: string;
  /**
   * A reference specified by the merchant to identify the transaction
   */
  merchant_reference?: string | null;
  /**
   * The URL where the customer will be redirected once the card add completes, regardless of whether it succeeds or fails
   */
  redirect_url?: string;
  /**
   * Origin (necessary when card add link will be in an iFrame)
   * The fully qualified Origin of your application
   */
  origin?: string | null;
  /**
   * Redirect parent window function name(optional when card add link will be in an iFrame). Must be alphanumeric.
   * This function will be called on the iFrame result page
   */
  redirect_parent_function?: string | null;
  /**
   * A webhook url that is called when a card add link is updated
   */
  webhook_card_link_update?: string;
  /**
   * Card add link is valid until. Defaults to 24 hours
   */
  valid_until?: string;
};
