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


import { AccountApi } from './api/account-api';
import { AttributeApi } from './api/attribute-api';
import { CardApi } from './api/card-api';
import { CatalogApi } from './api/catalog-api';
import { InternalApi } from './api/internal-api';
import { KYCApi } from './api/kycapi';
import { LoadApi } from './api/load-api';
import { PayoutApi } from './api/payout-api';
import { SpendBackApi } from './api/spend-back-api';
import { UserApi } from './api/user-api';
import { WalletApi } from './api/wallet-api';

import { Configuration, ConfigurationParameters } from './configuration';

export class MassPayJsSdk {
    private configuration: Configuration;
    AccountApi: AccountApi;
    AttributeApi: AttributeApi;
    CardApi: CardApi;
    CatalogApi: CatalogApi;
    InternalApi: InternalApi;
    KYCApi: KYCApi;
    LoadApi: LoadApi;
    PayoutApi: PayoutApi;
    SpendBackApi: SpendBackApi;
    UserApi: UserApi;
    WalletApi: WalletApi;
    
    constructor(configurationParameters?: ConfigurationParameters) {
        this.configuration = new Configuration(configurationParameters);
        this.AccountApi = new AccountApi(this.configuration);
        this.AttributeApi = new AttributeApi(this.configuration);
        this.CardApi = new CardApi(this.configuration);
        this.CatalogApi = new CatalogApi(this.configuration);
        this.InternalApi = new InternalApi(this.configuration);
        this.KYCApi = new KYCApi(this.configuration);
        this.LoadApi = new LoadApi(this.configuration);
        this.PayoutApi = new PayoutApi(this.configuration);
        this.SpendBackApi = new SpendBackApi(this.configuration);
        this.UserApi = new UserApi(this.configuration);
        this.WalletApi = new WalletApi(this.configuration);
        
    }
}

export * from './api/account-api';
export * from './api/attribute-api';
export * from './api/card-api';
export * from './api/catalog-api';
export * from './api/internal-api';
export * from './api/kycapi';
export * from './api/load-api';
export * from './api/payout-api';
export * from './api/spend-back-api';
export * from './api/user-api';
export * from './api/wallet-api';

