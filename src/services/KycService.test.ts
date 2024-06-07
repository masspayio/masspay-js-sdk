import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { AttrVelocityRequest } from '../models/AttrVelocityRequest';
import { IDUpload } from '../models/IDUpload';
import { KycService } from './KycService';

jest.mock('../core/request');

describe('KycService', () => {
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

  describe('FindAttributesVelocity', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {};
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new KycService(httpRequest);

      const result = await service.findAttributesVelocity('', '', [
        {
          type: 'CardNumber',
          value: '',
        },
      ] as AttrVelocityRequest);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserUserTokenKycAu10Tix', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        session_url: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new KycService(httpRequest);

      const result = await service.getUserUserTokenKycAu10Tix('');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('UploadIdPhotos', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {};
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new KycService(httpRequest);

      const result = await service.uploadIdPhotos('', [
        {
          type: 'document-front',
          content: '',
        },
      ] as IDUpload[]);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserUserTokenKycAttempts', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          provider: 'Veriff',
          session_id: '20ea33e3-fb0c-4387-944d-511bd605b0d5',
          session_time: '',
          status: 'Started',
          resp: {},
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new KycService(httpRequest);

      const result = await service.getUserUserTokenKycAttempts('');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserUserTokenKycVeriff', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        session_url: '',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new KycService(httpRequest);

      const result = await service.getUserUserTokenKycVeriff('');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
