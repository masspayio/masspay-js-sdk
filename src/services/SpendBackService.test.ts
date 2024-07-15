import { SpendBackService } from './SpendBackService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { SpendBacks } from '../models/SpendBacks';
import { SpendBackTxn } from '../models/SpendBackTxn';
import { SpendBackTxnResp } from '../models/SpendBackTxnResp';

jest.mock('../core/request');

describe('SpendBackService', () => {
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

  describe('GetUserSpendbacksByToken', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          spendback_token: 'spnd_bk_4275f2-bae1-488d-9d6f-20af1cd83574',
          time_of_spendback: '',
          client_spendback_id: 'aEjn345',
          source_token: '123e4567-e89b-12d3-a456-426614174000',
          wallet_token: '123e4567-e89b-12d3-a456-426614174000',
          amount: 100.5,
          source_currency_code: 'USD',
          notes: 'Commission payment for July',
          metadata: {},
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new SpendBackService(httpRequest);

      const result = await service.getUserSpendbacksByToken('usr_3f5d3fe8-a9c0-48c7-90ad-a72948730f56', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('InitiateSpendback', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        spendback_token: '123e4567-e89b-12d3-a456-426614174000',
        client_spendback_id: 'aEjn345',
        status: 'success',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new SpendBackService(httpRequest);

      const result = await service.initiateSpendback('usr_3f5d3fe8-a9c0-48c7-90ad-a72948730f56', '', {
        client_spendback_id: 'aEjn345',
        source_token: '123e4567-e89b-12d3-a456-426614174000',
        source_currency_code: 'USD',
        amount: 100.5,
        notes: 'Purchase of Candles. Order #14930',
        metadata: {},
      } as SpendBackTxn);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
