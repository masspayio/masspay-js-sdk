/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type Service = {
  /**
   * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   */
  country_code: string;
  /**
   * The type of service. I.e. cash pickup, home delivery, etc.
   */
  delivery_type: Service.delivery_type;
  payers: Array<{
    /**
     * Token that represents the payout destination. 36 characters long
     */
    destination_token: string;
    /**
     * base64 representation of the payer logo
     */
    payer_logo: string;
    /**
     * Name of payer
     */
    payer_name: string;
    /**
     * Lists all available currencies and their estimated rates
     */
    exchange_rate: Array<{
      /**
       * Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.
       */
      currency_symbol: string;
      /**
       * Estimated rate
       */
      exchange_rate: number;
    }>;
    /**
     * Service fee
     */
    fee: number;
    /**
     * The maximum amount (inclusive) the user can send with this service. 0 if no upper limit
     */
    max_limit: number;
    /**
     * The minimum amount (inclusive) the user can send with this service. 0 if no lower limit
     */
    min_limit: number;
    /**
     * Optional return field. Will only show if `limit` parameter is provided
     */
    source_amount?: number;
    /**
     * Total number of locations. Mostly relevant for cash pickup services. 0 if unknown or irrelevant
     */
    number_of_locations?: number;
    /**
     * Estimated availability of funds. When funds would be available to pickup/deposited
     */
    estimated_availability?: string;
    /**
     * When available, additional description that explains the service offered or requirements for funds delivery.
     */
    additional_description?: string;
    /**
     * When set to true, it indicates that this destination_token will auto retry the transaction for a set time until it is successful or timesout. False value means the transaction will be processed by the payer in real-time with instant feedback on success/failure.
     */
    is_dynamic_token?: boolean;
  }>;
};
export namespace Service {
  /**
     *
    The type of service. I.e. cash pickup, home delivery, etc.
     */
  export enum delivery_type {
    CASH_PICKUP = 'CASH_PICKUP',
    BANK_DEPOSIT = 'BANK_DEPOSIT',
    HOME_DELIVERY = 'HOME_DELIVERY',
    MOBILE_WALLET = 'MOBILE_WALLET',
    MASSPAY_CARD = 'MASSPAY_CARD',
    PAPER_CHECK = 'PAPER_CHECK',
    BILL = 'BILL',
    CRYPTOCURRENCY = 'CRYPTOCURRENCY',
  }
}
