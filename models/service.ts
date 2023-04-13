/* tslint:disable */
/* eslint-disable */
/**
 * MassPay API
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: support@masspay.io
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ServicePayersInner } from './service-payers-inner';

/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * Country code [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
     * @type {string}
     * @memberof Service
     */
    'country_code': string;
    /**
     * The type of service. I.e. cash pickup, home delivery, etc.
     * @type {string}
     * @memberof Service
     */
    'delivery_type': ServiceDeliveryTypeEnum;
    /**
     * 
     * @type {Array<ServicePayersInner>}
     * @memberof Service
     */
    'payers': Array<ServicePayersInner>;
}

export const ServiceDeliveryTypeEnum = {
    CashPickup: 'CASH_PICKUP',
    BankDeposit: 'BANK_DEPOSIT',
    HomeDelivery: 'HOME_DELIVERY',
    MobileWallet: 'MOBILE_WALLET',
    MasspayCard: 'MASSPAY_CARD',
    PaperCheck: 'PAPER_CHECK',
    Bill: 'BILL',
    Cryptocurrency: 'CRYPTOCURRENCY'
} as const;

export type ServiceDeliveryTypeEnum = typeof ServiceDeliveryTypeEnum[keyof typeof ServiceDeliveryTypeEnum];


