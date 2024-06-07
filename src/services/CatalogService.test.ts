import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { CatalogService } from './CatalogService';

jest.mock('../core/request');

describe('CatalogService', () => {
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

  describe('GetCountryList', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          code: 'MX',
          name: 'Mexico',
          three_letter_code: 'MEX',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getCountryList();

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetCountryServices', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        companies: [
          {
            company_logo: 'U3dhZ2dlciByb2Nrcw==',
            services: [
              {
                country_code: 'MEX',
                delivery_type: 'CASH_PICKUP',
                payers: [
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
                    fee: 8,
                    max_limit: 10000,
                    min_limit: 0,
                    source_amount: 104.3,
                    number_of_locations: 13007,
                    estimated_availability: '2020-07-21T17:32:28Z',
                    additional_description: 'Requires drivers license to pickup funds',
                    is_dynamic_token: true,
                  },
                ],
              },
            ],
            rating: 4.5,
            description: 'Pontual is a top leading provider with over 10 years of industry experience',
            company_name: 'Pontual',
          },
        ],
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getCountryServices('', 0.12, '', '', '', '', '', '', '200', true);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetCheapestCountryServices', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        companies: [
          {
            company_logo: 'U3dhZ2dlciByb2Nrcw==',
            services: [
              {
                country_code: 'MEX',
                delivery_type: 'CASH_PICKUP',
                payers: [
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
                    fee: 8,
                    max_limit: 10000,
                    min_limit: 0,
                    source_amount: 104.3,
                    number_of_locations: 13007,
                    estimated_availability: '2020-07-21T17:32:28Z',
                    additional_description: 'Requires drivers license to pickup funds',
                    is_dynamic_token: true,
                  },
                ],
              },
            ],
            rating: 4.5,
            description: 'Pontual is a top leading provider with over 10 years of industry experience',
            company_name: 'Pontual',
          },
        ],
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getCheapestCountryServices('', 0.12, '', '', '', '', '', '', '200', true);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetDestinationTokenAlternatives', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        country_code: 'MEX',
        delivery_type: 'CASH_PICKUP',
        payers: [
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
            fee: 8,
            max_limit: 10000,
            min_limit: 0,
            source_amount: 104.3,
            number_of_locations: 13007,
            estimated_availability: '2020-07-21T17:32:28Z',
            additional_description: 'Requires drivers license to pickup funds',
            is_dynamic_token: true,
          },
        ],
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getDestinationTokenAlternatives('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetDestinationToken', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        country_code: 'MEX',
        delivery_type: 'CASH_PICKUP',
        payers: [
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
            fee: 8,
            max_limit: 10000,
            min_limit: 0,
            source_amount: 104.3,
            number_of_locations: 13007,
            estimated_availability: '2020-07-21T17:32:28Z',
            additional_description: 'Requires drivers license to pickup funds',
            is_dynamic_token: true,
          },
        ],
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getDestinationToken('', true, '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserAgreement', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        name: 'MassPay Card Program - USD',
        content: '',
        last_modified: '2020-07-21T17:32:28Z',
        id: 2,
        mime_type: 'application/pdf',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getUserAgreement(2);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserAgreementsNames', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        name: 'MassPay Card Program - USD',
        last_modified: '2020-07-21T17:32:28Z',
        id: 2,
        mime_type: 'application/pdf',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new CatalogService(httpRequest);

      const result = await service.getUserAgreementsNames();

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
