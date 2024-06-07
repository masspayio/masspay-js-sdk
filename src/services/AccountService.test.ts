import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { AccountService } from './AccountService';

jest.mock('../core/request');

describe('AccountService', () => {
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

      const result = await service.getAccountStatement('2021-01-01', '2021-02-01');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
