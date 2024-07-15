import { AccountService } from './AccountService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { AvailableBalanceTxnResp } from '../models/AvailableBalanceTxnResp';

jest.mock('../core/request');

describe('AccountService', () => {
  let httpRequest: FetchHttpRequest;

  beforeEach(() => {
    httpRequest = new FetchHttpRequest({
      BASE: 'https://api.masspay.io/v1.0.0',
      VERSION: '1.0.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('GetAccountBalance', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          token: '8bb3693f-2f98-43dd-a990-615b6a21596d',
          balance: 100.5,
          currency_code: 'USD',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new AccountService(httpRequest);

      const result = await service.getAccountBalance();

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAccountStatement', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        content: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new AccountService(httpRequest);

      const result = await service.getAccountStatement('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
