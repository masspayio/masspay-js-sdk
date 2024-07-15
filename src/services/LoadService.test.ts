import { LoadService } from './LoadService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { Loads } from '../models/Loads';
import { LoadTxn } from '../models/LoadTxn';
import { LoadTxnResp } from '../models/LoadTxnResp';

jest.mock('../core/request');

describe('LoadService', () => {
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

  describe('ResendBalanceNotification', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        success: true,
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new LoadService(httpRequest);

      const result = await service.resendBalanceNotification('', '', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('LoadUser', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        load_token: 'ld_ba4275f2-bae1-488d-9d6f-20af1cd83574',
        status: 'COMPLETED',
        wallet_token: 'usr_wlt_3ec2d3e7-0aae-47bb-bdb9-d3413c5434d1',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new LoadService(httpRequest);

      const result = await service.loadUser(
        '',
        {
          client_load_id: 'aEjn345',
          source_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
          amount: 100.5,
          source_currency_code: 'USD',
          notes: 'Commission payment for July',
          notify_user: true,
          time_to_process: 'The date/time to process the load. In UTC. 2021-02-25T23:00:00Z',
          metadata: {},
        } as LoadTxn,
        ''
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserLoadsByToken', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          load_token: 'ld_ba4275f2-bae1-488d-9d6f-20af1cd83574',
          time_of_load: '',
          client_load_id: 'aEjn345',
          source_token: '123e4567-e89b-12d3-a456-426614174000',
          wallet_token: '123e4567-e89b-12d3-a456-426614174000',
          amount: 100.5,
          source_currency_code: 'USD',
          notes: 'Commission payment for July',
          status: 'COMPLETED',
          metadata: {},
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new LoadService(httpRequest);

      const result = await service.getUserLoadsByToken('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('ResendLoadNotification', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        success: true,
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new LoadService(httpRequest);

      const result = await service.resendLoadNotification('', '', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('CancelUserLoad', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {};
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new LoadService(httpRequest);

      const result = await service.cancelUserLoad('', '', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
