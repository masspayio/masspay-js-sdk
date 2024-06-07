import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { PayoutTxn } from '../models/PayoutTxn';
import { PayoutService } from './PayoutService';

jest.mock('../core/request');

describe('PayoutService', () => {
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

  describe('InitiatePayout', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        payout_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
        client_transfer_id: 'aEjn345',
        source_currency_code: 'USD',
        destination_currency_code: 'MXN',
        source_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
        destination_token: 'd2138fd0-00be-45a8-985f-4f5bde500962',
        destination_amount: 100.5,
        source_amount: 100.5,
        attr_set_token: 'b1a867c1-6e36-4525-b6d5-a20bac80e3b0',
        exchange_rate: 18.55,
        fee: 2.99,
        expiration: '2019-06-26T22:32:05',
        pickup_code: '54238173',
        status: 'PENDING',
        payer_logo: 'U3dhZ2dlciByb2Nrcw==',
        payer_name: 'Elektra',
        delivery_type: 'CASH_PICKUP',
        country_code: 'MEX',
        metadata: {},
        estimated_availability: '2020-07-21T17:32:28Z',
        status_reason: '',
        attrs: {},
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new PayoutService(httpRequest);

      const result = await service.initiatePayout(
        '',
        {
          client_transfer_id: 'aEjn345',
          source_currency_code: 'USD',
          destination_currency_code: 'MXN',
          source_token: '123e4567-e89b-12d3-a456-426614174000',
          destination_token: '123e4567-e89b-12d3-a456-426614174000',
          destination_amount: 100.5,
          source_amount: 100.5,
          attr_set_token: '123e4567-e89b-12d3-a456-426614174000',
          metadata: {},
          notify_user: true,
          auto_commit: true,
        } as PayoutTxn,
        0.12,
        ''
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserPayoutsByToken', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          payout_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
          client_transfer_id: 'aEjn345',
          source_currency_code: 'USD',
          destination_currency_code: 'MXN',
          source_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
          destination_token: 'd2138fd0-00be-45a8-985f-4f5bde500962',
          destination_amount: 100.5,
          source_amount: 100.5,
          attr_set_token: 'b1a867c1-6e36-4525-b6d5-a20bac80e3b0',
          exchange_rate: 18.55,
          fee: 2.99,
          expiration: '2019-06-26T22:32:05',
          pickup_code: '54238173',
          status: 'PENDING',
          payer_logo: 'U3dhZ2dlciByb2Nrcw==',
          payer_name: 'Elektra',
          delivery_type: 'CASH_PICKUP',
          country_code: 'MEX',
          metadata: {},
          estimated_availability: '2020-07-21T17:32:28Z',
          status_reason: '',
          attrs: {},
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new PayoutService(httpRequest);

      const result = await service.getUserPayoutsByToken('', '', true);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('CommitPayoutTxn', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        payout_token: '123e4567-e89b-12d3-a456-426614174000',
        status: 'success',
        pickup_code: '54238173',
        errors: 'Duplicate transfer',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new PayoutService(httpRequest);

      const result = await service.commitPayoutTxn('', '', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetPayoutStatus', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        payout_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
        client_transfer_id: 'aEjn345',
        source_currency_code: 'USD',
        destination_currency_code: 'MXN',
        source_token: 'ba4275f2-bae1-488d-9d6f-20af1cd83574',
        destination_token: 'd2138fd0-00be-45a8-985f-4f5bde500962',
        destination_amount: 100.5,
        source_amount: 100.5,
        attr_set_token: 'b1a867c1-6e36-4525-b6d5-a20bac80e3b0',
        exchange_rate: 18.55,
        fee: 2.99,
        expiration: '2019-06-26T22:32:05',
        pickup_code: '54238173',
        status: 'PENDING',
        payer_logo: 'U3dhZ2dlciByb2Nrcw==',
        payer_name: 'Elektra',
        delivery_type: 'CASH_PICKUP',
        country_code: 'MEX',
        metadata: {},
        estimated_availability: '2020-07-21T17:32:28Z',
        status_reason: '',
        attrs: {},
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new PayoutService(httpRequest);

      const result = await service.getPayoutStatus('', 'payout_ed75acf2-1c35-4073-9adc-389084d1e96b', true, '', true);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetTransactionConfirmationDetails', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        content: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new PayoutService(httpRequest);

      const result = await service.getTransactionConfirmationDetails('', 'payout_ed75acf2-1c35-4073-9adc-389084d1e96b', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
