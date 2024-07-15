import { CardService } from './CardService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { CardResp } from '../models/CardResp';

jest.mock('../core/request');

describe('CardService', () => {
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

  describe('GetWalletCardInfo', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        card_number: '4016483301928344',
        cvv: '123',
        expiration_date: '',
        pin_number: '1234',
        balance: 103,
        type: 'VISA',
        status: 'ACTIVE',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CardService(httpRequest);

      const result = await service.getWalletCardInfo('usr_62727c1f-38a3-4a98-b7c9-e84093a106cd', '123e4567-e89b-12d3-a456-426614174000');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('UpdateWalletCardInfo', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {};
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CardService(httpRequest);

      const result = await service.updateWalletCardInfo(
        'usr_62727c1f-38a3-4a98-b7c9-e84093a106cd',
        '123e4567-e89b-12d3-a456-426614174000',
        '0123',
        'CLOSE'
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
