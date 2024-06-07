import { FetchHttpRequest } from '../core/FetchHttpRequest';
import { request as __request } from '../core/request';
import { UpdateUser } from '../models/UpdateUser';
import { User } from '../models/User';
import { UserService } from './UserService';

jest.mock('../core/request');

describe('UserService', () => {
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

  describe('CreateUser', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        user_token: '123e4567-e89b-12d3-a456-426614174000',
        status: 'ACTIVE',
        created_on: '2019-07-07T23:03:05',
        internal_user_id: '4324-rOzk',
        address1: '2000 main st',
        address2: 'apt D',
        city: 'Santa Monica',
        state_province: 'CA',
        postal_code: '90405',
        country: 'USA',
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        email: 'jdoe@gmail.com',
        language: 'en',
        mobile_number: '16502000226',
        business_name: 'ABC Company',
        timezone: 'America/Los_Angeles',
        date_of_birth: '1975-03-24',
        metadata: {},
        activation_url: 'https://members.masspay.io/activation?activation=AO==',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.createUser({
        internal_user_id: '4324-rOzk',
        address1: '2000 main st',
        address2: 'apt D',
        city: 'Santa Monica',
        state_province: 'CA',
        postal_code: '90405',
        country: 'USA',
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        email: 'jdoe@gmail.com',
        language: 'en',
        mobile_number: '16502000226',
        business_name: 'ABC Company',
        date_of_birth: '1975-03-24',
        metadata: {
          group_id: 541,
        },
        notify_user: true,
      } as User);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserByToken', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        user_token: '123e4567-e89b-12d3-a456-426614174000',
        status: 'ACTIVE',
        created_on: '2019-07-07T23:03:05',
        internal_user_id: '4324-rOzk',
        address1: '2000 main st',
        address2: 'apt D',
        city: 'Santa Monica',
        state_province: 'CA',
        postal_code: '90405',
        country: 'USA',
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        email: 'jdoe@gmail.com',
        language: 'en',
        mobile_number: '16502000226',
        business_name: 'ABC Company',
        timezone: 'America/Los_Angeles',
        date_of_birth: '1975-03-24',
        metadata: {},
        activation_url: 'https://members.masspay.io/activation?activation=AO==',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.getUserByToken('', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('UpdateUser', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        user_token: '123e4567-e89b-12d3-a456-426614174000',
        status: 'ACTIVE',
        created_on: '2019-07-07T23:03:05',
        internal_user_id: '4324-rOzk',
        address1: '2000 main st',
        address2: 'apt D',
        city: 'Santa Monica',
        state_province: 'CA',
        postal_code: '90405',
        country: 'USA',
        first_name: 'John',
        middle_name: '',
        last_name: 'Doe',
        email: 'jdoe@gmail.com',
        language: 'en',
        mobile_number: '16502000226',
        business_name: 'ABC Company',
        timezone: 'America/Los_Angeles',
        date_of_birth: '1975-03-24',
        metadata: {},
        activation_url: 'https://members.masspay.io/activation?activation=AO==',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.updateUser(
        '',
        {
          status: 'ACTIVE',
          created_on: '2019-07-07T23:03:05',
          internal_user_id: '4324-rOzk',
          address1: '2000 main st',
          address2: 'apt D',
          city: 'Santa Monica',
          state_province: 'CA',
          postal_code: '90405',
          country: 'USA',
          first_name: 'John',
          middle_name: '',
          last_name: 'Doe',
          email: 'jdoe@gmail.com',
          language: 'en',
          mobile_number: '16502000226',
          business_name: 'ABC Company',
          date_of_birth: '1975-03-24',
          metadata: {},
        } as UpdateUser,
        ''
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('UserLookup', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = {
        user_token: 'usr_f4741aa2-9f39-4358-8247-2409e3fc2715',
        first_name: '',
        last_name: '',
        internal_user_id: '4324-rOzk',
      };
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.userLookup('', '', '', '');

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetUserHistory', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          token: '123e4567-e89b-12d3-a456-426614174000',
          type: 'payout',
          time_of_txn: '',
          source_amount: 50.1,
          source_currency_code: 'USD',
          destination_amount: 44.99,
          destination_currency_code: '',
          fee: 2.98,
          status: 'READY_FOR_PICKUP',
          notes: 'Purchase of Candles. Order #14930',
          payer_name: 'Elektra',
          pickup_code: '343432',
          source_token: '123e4567-e89b-12d3-a456-426614174000',
          destination_token: '123e4567-e89b-12d3-a456-426614174000',
          delivery_type: 'CASH_PICKUP',
          client_transfer_id: '',
          status_reason: '',
          client_id: 0,
          user_token: '',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.getUserHistory(
        'usr_f4741aa2-9f39-4358-8247-2409e3fc2715',
        '2020-03-31',
        '2020-03-31',
        'payout',
        '',
        '',
        10,
        1,
        true
      );

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });

  describe('GetAllUsersHistory', () => {
    it('should call API with correct parameters', async () => {
      const expectedResponse = [
        {
          token: '123e4567-e89b-12d3-a456-426614174000',
          type: 'payout',
          time_of_txn: '',
          source_amount: 50.1,
          source_currency_code: 'USD',
          destination_amount: 44.99,
          destination_currency_code: '',
          fee: 2.98,
          status: 'READY_FOR_PICKUP',
          notes: 'Purchase of Candles. Order #14930',
          payer_name: 'Elektra',
          pickup_code: '343432',
          source_token: '123e4567-e89b-12d3-a456-426614174000',
          destination_token: '123e4567-e89b-12d3-a456-426614174000',
          delivery_type: 'CASH_PICKUP',
          client_transfer_id: '',
          status_reason: '',
          client_id: 0,
          user_token: '',
        },
      ];
      jest.mocked(__request).mockResolvedValue(expectedResponse);

      const service = new UserService(httpRequest);

      const result = await service.getAllUsersHistory('2020-03-31', '2020-03-31', 'payout', '', '', 10, 1, true);

      expect(result).toEqual(expectedResponse);
      expect(__request).toHaveBeenCalledTimes(1);
    });
  });
});
