/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { FoundUser } from '../models/FoundUser';
import type { StoredUser } from '../models/StoredUser';
import type { TxnHistoryResp } from '../models/TxnHistoryResp';
import type { UpdateUser } from '../models/UpdateUser';
import type { User } from '../models/User';

export class UserService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a user
   * This **POST** endpoint is used to create a new user in MassPay. <br> You can use this endpoint to create a new user with the specified user details in JSON format in the request Body. <br> To use this endpoint, you need to provide the `internal_user_id`, `country`, `first_name`, `last_name`, and `email` as required parameters in the Request Body. <br> The response will include details about the newly created user.
   * @param requestBody Created user object
   * @returns StoredUser Successfully created.
   * @throws ApiError
   */
  public createUser(requestBody: User): CancelablePromise<StoredUser> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Get user by user token
   * This **GET** endpoint is used to retrieve a user's profile by their user token in MassPay. <br> You can use this endpoint to obtain a user profile for a specified user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include all available details for the user.
   * @param userToken The user token that needs to be fetched.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns StoredUser successful operation
   * @throws ApiError
   */
  public getUserByToken(userToken: string, idempotencyKey?: string): CancelablePromise<StoredUser> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Updated user
   * This **PUT** endpoint is used to update the profile information of a user with the provided user token. <br> You need to provide the `user_token` in the URL path to identify the user whose information you want to update. The updated information should be provided in the request Body as a JSON object. This endpoint can be used to update various profile information, such as the user's name, email address, phone number, and more. <br> The response will contain the updated user information in a JSON format.
   * @param userToken user token that need to be updated
   * @param requestBody Updated user object
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns StoredUser successful operation
   * @throws ApiError
   */
  public updateUser(userToken: string, requestBody: UpdateUser, idempotencyKey?: string): CancelablePromise<StoredUser> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/{user_token}',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Lookup an existing user
   * This **GET** endpoint is used to lookup whether a user with the provided email and first name exists in the MassPay system. <br> To use this endpoint, you need to provide the `email`, `first_name`, and `internal_user_id` as Query parameters in the URL. <br> The endpoint will then search for the user based on the provided information and return a JSON response indicating whether the user exists or not. If the user exists, the response will also contain the user's details, `user_token`, `first_name`, `last_name` and `internal_user_id`.
   * @param email User's email address. Required if First Name is provided
   * @param firstName User's first name. Required if email is provided
   * @param internalUserId A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |. Required if email and first name are not provided
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns FoundUser Found a matching user
   * @throws ApiError
   */
  public userLookup(email: string, firstName: string, internalUserId: string, idempotencyKey?: string): CancelablePromise<FoundUser> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/lookup',
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        email: email,
        first_name: firstName,
        internal_user_id: internalUserId,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Transactions history
   * This **GET** endpoint is used to retrieve a list of all transactions, including payouts, loads, and spendbacks, for a provided user with the provided user token. <br> You can use this endpoint to obtain a comprehensive history of transactions for the provider user, allowing you to track and analyze their payment activities over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain a JSON array of transaction objects, each including transactions details.
   * @param userToken Token representing the user to get transactions history for. If none is provided, retrieve transactions for all users.
   * @param startDate Starting date
   * @param endDate Ending date
   * @param type Filter particular types of transactions. Comma separated to include multiple types
   * @param walletToken Filter transactions to include only provided wallet token.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param numberOfRecords Number of records to return. Defaults to 10 if no value is provided
   * @param page Page number
   * @param showAllClients Wether to show transactions from all clients
   * @returns TxnHistoryResp Succesful operation.
   * @throws ApiError
   */
  public getUserHistory(
    userToken: string,
    startDate?: string,
    endDate?: string,
    type?: 'payout' | 'load' | 'spendback',
    walletToken?: string,
    idempotencyKey?: string,
    numberOfRecords: number = 10,
    page: number = 1,
    showAllClients: boolean = false
  ): CancelablePromise<Array<TxnHistoryResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/{user_token}/history',
      path: {
        user_token: userToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        number_of_records: numberOfRecords,
        start_date: startDate,
        end_date: endDate,
        page: page,
        type: type,
        wallet_token: walletToken,
        show_all_clients: showAllClients,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * All Users' Transactions history
   * This **GET** endpoint is used to retrieve a list of all transactions, including payouts, loads, and spendbacks, for all users. <br> You can use this endpoint to obtain a comprehensive history of transactions for all users, allowing you to track and analyze their payment activities over time. <br> The response will contain a JSON array of transaction objects, each including transactions details.
   * @param startDate Starting date
   * @param endDate Ending date
   * @param type Filter particular types of transactions. Comma separated to include multiple types
   * @param walletToken Filter transactions to include only provided wallet token.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param numberOfRecords Number of records to return. Defaults to 10 if no value is provided
   * @param page Page number
   * @param showAllClients Wether to show transactions from all clients
   * @returns TxnHistoryResp Succesful operation.
   * @throws ApiError
   */
  public getAllUsersHistory(
    startDate?: string,
    endDate?: string,
    type?: 'payout' | 'load' | 'spendback',
    walletToken?: string,
    idempotencyKey?: string,
    numberOfRecords: number = 10,
    page: number = 1,
    showAllClients: boolean = false
  ): CancelablePromise<Array<TxnHistoryResp>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/history',
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        number_of_records: numberOfRecords,
        start_date: startDate,
        end_date: endDate,
        page: page,
        type: type,
        wallet_token: walletToken,
        show_all_clients: showAllClients,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }
}
