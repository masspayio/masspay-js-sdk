import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { AutopayRule } from '../models/AutopayRule';
import { WalletService } from './WalletService';

jest.mock('../core/request');

describe('WalletService', () => {
  let httpRequest: FetchHttpRequest;

  beforeEach(() => {
    httpRequest = new FetchHttpRequest({
      BASE: 'https://api.masspay.io/v0.1.4',
      VERSION: '0.1.4',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('GetWallet', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          user_token: 'usr_ba4275f2-bae1-488d-9d6f-20af1cd83574',
          token: '123e4567-e89b-12d3-a456-426614174000',
          balance: 100.5,
          currency_code: 'USD',
          type: 'USER_FUNDS',
          card_type: 'VISA',
          last_4: '1234',
          active: true,
          client_paying_fees: true,
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new WalletService(httpRequest);

      const result = await service.getWallet('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAutopayRules', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          token: 'autopay_3684cc43-fe3b-4994-8ca1-7dc0db94430f',
          destination_token: 'dest_d2138fd0-00be-45a8-985f-4f5bde500962',
          percentage: 50,
          attr_set_token: '',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new WalletService(httpRequest);

      const result = await service.getAutopayRules('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('CreateAutopayRule', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        token: 'autopay_3684cc43-fe3b-4994-8ca1-7dc0db94430f',
        destination_token: 'dest_d2138fd0-00be-45a8-985f-4f5bde500962',
        percentage: 50,
        attr_set_token: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new WalletService(httpRequest);

      const result = await service.createAutopayRule('', '', {
        destination_token: 'dest_d2138fd0-00be-45a8-985f-4f5bde500962',
        percentage: 50,
        attr_set_token: '',
      } as AutopayRule);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('DeleteAutopayRule', () => {
    it('should call API with correct parameters', async () => {
      const service = new WalletService(httpRequest);

      await service.deleteAutopayRule('', '', 'autopay_3684cc43-fe3b-4994-8ca1-7dc0db94430f');
    });
  });
});
