import { SubaccountService } from './SubaccountService';
import { request as __request } from '../core/request';
import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { AddUBORequest } from '../models/AddUBORequest';
import { CreateSubaccountTxn } from '../models/CreateSubaccountTxn';
import { IDUpload } from '../models/IDUpload';

jest.mock('../core/request');

describe('SubaccountService', () => {
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

  describe('CreateSubaccount', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        subaccount_token: '',
        api_key: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new SubaccountService(httpRequest);

      const result = await service.createSubaccount({
        company_name: '',
        company_dba: '',
        phone: '',
        inc_date: '',
        registration_number: '',
        website: '',
        naics: '',
        min_payee_age: 0,
        legal_structure: 'Ccorp',
        address1: '',
        address2: '',
        state: '',
        city: '',
        zip: '',
        country: '',
        signer: {
          first_name: '',
          last_name: '',
          email: '',
          dob: '',
        },
        industry: 'MLM',
      } as CreateSubaccountTxn);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetSubaccountSubaccountTokenUbo', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        subaccount_ubo_token: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new SubaccountService(httpRequest);

      const result = await service.getSubaccountSubaccountTokenUbo('', {
        ownership_percentage: 0.12,
        phone: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        dob: '',
        tax_id: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      } as AddUBORequest);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('UploadSubaccountUboId', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {};
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new SubaccountService(httpRequest);

      const result = await service.uploadSubaccountUboId('', '', [
        {
          type: 'document-front',
          content: '',
        },
      ] as IDUpload[]);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
