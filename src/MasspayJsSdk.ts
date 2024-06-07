/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AccountService } from './services/AccountService';
import { AttributeService } from './services/AttributeService';
import { CardService } from './services/CardService';
import { CatalogService } from './services/CatalogService';
import { KycService } from './services/KycService';
import { LoadService } from './services/LoadService';
import { PayoutService } from './services/PayoutService';
import { SpendBackService } from './services/SpendBackService';
import { TaxService } from './services/TaxService';
import { UserService } from './services/UserService';
import { WalletService } from './services/WalletService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class MasspayJsSdk {
  public readonly AccountService: AccountService;
  public readonly AttributeService: AttributeService;
  public readonly CardService: CardService;
  public readonly CatalogService: CatalogService;
  public readonly KycService: KycService;
  public readonly LoadService: LoadService;
  public readonly PayoutService: PayoutService;
  public readonly SpendBackService: SpendBackService;
  public readonly TaxService: TaxService;
  public readonly UserService: UserService;
  public readonly WalletService: WalletService;
  public readonly request: BaseHttpRequest;
  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://api.masspay.io/v0.1.4',
      VERSION: config?.VERSION ?? '0.1.4',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      AUTHORIZER_NAME_API_KEY: config?.AUTHORIZER_NAME_API_KEY,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });
    this.AccountService = new AccountService(this.request);
    this.AttributeService = new AttributeService(this.request);
    this.CardService = new CardService(this.request);
    this.CatalogService = new CatalogService(this.request);
    this.KycService = new KycService(this.request);
    this.LoadService = new LoadService(this.request);
    this.PayoutService = new PayoutService(this.request);
    this.SpendBackService = new SpendBackService(this.request);
    this.TaxService = new TaxService(this.request);
    this.UserService = new UserService(this.request);
    this.WalletService = new WalletService(this.request);
  }
}
