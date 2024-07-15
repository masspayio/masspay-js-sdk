import { TaxService } from './TaxService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { TaxYearUserResp } from '../models/TaxYearUserResp';

jest.mock('../core/request');

describe('TaxService', () => {
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

  describe('GetTaxUsers', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          user_token: '123e4567-e89b-12d3-a456-426614174000',
          address1: '2000 main st',
          address2: 'apt D',
          city: 'Santa Monica',
          state_province: 'CA',
          postal_code: 90405,
          country: 'USA',
          first_name: 'John',
          middle_name: '',
          last_name: 'Doe',
          email: 'jdoe@gmail.com',
          mobile_number: '16502000226',
          business_name: 'ABC Company',
          date_of_birth: '',
          balance: 1500,
          tax_id: '123-45-678',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new TaxService(httpRequest);

      const result = await service.getTaxUsers(0.12, 0);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetTaxInterviewLink', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        interview_url: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new TaxService(httpRequest);

      const result = await service.getTaxInterviewLink('', 'https://www.masspay.io');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
