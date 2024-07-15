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
 * Checkout
 */
export type Checkout = {
  /**
   * Checkout name
   */
  name?: string;
  /**
   * Short description
   */
  description?: string;
  /**
   * Logo url (https)
   */
  logo_url?: string;
  /**
   * Page background color. Hex code including hashtag. E.g. #FFF or #000000
   */
  background_color?: string;
  /**
   * Page background image url (https)
   */
  background_image_url?: string;
  /**
   * Header color. Hex code including hashtag. E.g. #FFF or #000000
   */
  header_color?: string;
  /**
   * Header text color. Hex code including hashtag. E.g. #FFF or #000000
   */
  header_text_color?: string;
  /**
   * Button color. Hex code including hashtag. E.g. #FFF or #000000
   */
  button_color?: string;
  /**
   * Button text color. Hex code including hashtag. E.g. #FFF or #000000
   */
  button_text_color?: string;
  /**
   * Comma separated list of payment products
   */
  payment_product_order?: string;
  /**
   * Show language switch in header
   */
  show_language_switch?: boolean;
  /**
   * Default language (ISO 639-1, Alpha-2 code)
   */
  default_language?: Checkout.default_language;
  /**
   * Number format locale
   */
  number_format?: Checkout.number_format;
  /**
   * Default checkout design
   */
  default_checkout?: boolean;
};
export namespace Checkout {
  /**
     *
    Default language (ISO 639-1, Alpha-2 code)
     */
  export enum default_language {
    DE = 'de',
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    NL = 'nl',
  } /**
     *
    Number format locale
     */
  export enum number_format {
    EN_US = 'en_US',
    NL_NL = 'nl_NL',
  }
}
