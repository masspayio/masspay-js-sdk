import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { AttrTxn } from '../models/AttrTxn';
import { AttributeService } from './AttributeService';

jest.mock('../core/request');

describe('AttributeService', () => {
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

  describe('GetAllAttrs', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          destination_token: '123e4567-e89b-12d3-a456-426614174000',
          payer_logo: 'U3dhZ2dlciByb2Nrcw==',
          payer_name: 'Elektra',
          exchange_rate: [
            {
              currency_symbol: 'MXN',
              exchange_rate: 18.37,
            },
          ],
          max_limit: 10000,
          min_limit: 0,
          number_of_locations: 13007,
          estimated_availability: '2020-07-21T17:32:28Z',
          additional_description: 'Requires drivers license to pickup funds',
          is_dynamic_token: true,
          attributes: [
            {
              token: 'attr_e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
              attr_set_token: 'attr_set_e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
              label: 'Checking Account Number',
              validation: '[0-9]{50}',
              is_optional: true,
              value: '432532532',
              expected_value: 'Date format MM/DD/YYYY',
              type: 'BankAccountNumber',
              input_type: 'text',
              last_attr_value_used: true,
            },
          ],
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new AttributeService(httpRequest);

      const result = await service.getAllAttrs('');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('StoreAttrs', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        attr_set_token: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new AttributeService(httpRequest);

      const result = await service.storeAttrs(
        '',
        '',
        'BRL',
        {
          values: [
            {
              token: 'e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
              value: '432532532',
            },
          ],
          attr_set_token: 'attr_set_e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
        } as AttrTxn,
        ''
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAttrs', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          token: 'attr_e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
          attr_set_token: 'attr_set_e2ca24e9-c546-4c64-90d2-cb8e70e7c9ba',
          label: 'Checking Account Number',
          validation: '[0-9]{50}',
          is_optional: true,
          value: '432532532',
          expected_value: 'Date format MM/DD/YYYY',
          type: 'BankAccountNumber',
          input_type: 'text',
          last_attr_value_used: true,
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new AttributeService(httpRequest);

      const result = await service.getAttrs('', '', 'BRL', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
