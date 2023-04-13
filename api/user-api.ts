/* tslint:disable */
/* eslint-disable */
/**
 * MassPay API
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: support@masspay.io
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Exception } from '../models';
// @ts-ignore
import { FoundUser } from '../models';
// @ts-ignore
import { GetUserUserTokenKycAu10tix200Response } from '../models';
// @ts-ignore
import { GetUserUserTokenKycVeriiff200Response } from '../models';
// @ts-ignore
import { StoredUser } from '../models';
// @ts-ignore
import { TxnHistoryResp } from '../models';
// @ts-ignore
import { UpdateUser } from '../models';
// @ts-ignore
import { User } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * To create a user, send a `POST` request to the `/user` endpoint and include the user details in JSON format in the request body. Upon creation of a user, you\'ll receive a user_token which would be used to interact with that user.
         * @summary Create a user
         * @param {User} user Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (user: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'user' is not null or undefined
            assertParamExists('createUser', 'user', user)
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a user profile for a provided user token.
         * @summary Get user by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByToken: async (userToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserByToken', 'userToken', userToken)
            const localVarPath = `/user/{user_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve list of all tranasctions (payouts/loads/spendbacks) for a provider user.
         * @summary Transactions history
         * @param {string} userToken Token representing the user to get transactions history for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [numberOfRecords] Number of records to return
         * @param {string} [startDate] Starting date
         * @param {string} [endDate] Ending date
         * @param {number} [page] Page number
         * @param {'payout' | 'load' | 'spendback'} [type] Filter particular types of transactions. Comma separated to include multiple types
         * @param {string} [walletToken] Filter transactions to include only provided wallet token.
         * @param {boolean} [showAllClients] Wether to show transactions from all clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserHistory: async (userToken: string, idempotencyKey?: string, numberOfRecords?: number, startDate?: string, endDate?: string, page?: number, type?: 'payout' | 'load' | 'spendback', walletToken?: string, showAllClients?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserHistory', 'userToken', userToken)
            const localVarPath = `/user/{user_token}/history`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (numberOfRecords !== undefined) {
                localVarQueryParameter['number_of_records'] = numberOfRecords;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString().substr(0,10) :
                    endDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (walletToken !== undefined) {
                localVarQueryParameter['wallet_token'] = walletToken;
            }

            if (showAllClients !== undefined) {
                localVarQueryParameter['show_all_clients'] = showAllClients;
            }

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an Au10tix session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycAu10tix: async (userToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserUserTokenKycAu10tix', 'userToken', userToken)
            const localVarPath = `/user/{user_token}/kyc/au10tix`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycVeriiff: async (userToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserUserTokenKycVeriiff', 'userToken', userToken)
            const localVarPath = `/user/{user_token}/kyc/veriff`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Updated user
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userToken: string, updateUser: UpdateUser, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('updateUser', 'userToken', userToken)
            // verify required parameter 'updateUser' is not null or undefined
            assertParamExists('updateUser', 'updateUser', updateUser)
            const localVarPath = `/user/{user_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Looksup whether a user with the provided email and first name exist
         * @summary Lookup an existing user
         * @param {string} email User\&#39;s email address. Required if First Name is provided
         * @param {string} firstName User\&#39;s first name. Required if email is provided
         * @param {string} internalUserId A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |. Required if email and first name are not provided
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLookup: async (email: string, firstName: string, internalUserId: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('userLookup', 'email', email)
            // verify required parameter 'firstName' is not null or undefined
            assertParamExists('userLookup', 'firstName', firstName)
            // verify required parameter 'internalUserId' is not null or undefined
            assertParamExists('userLookup', 'internalUserId', internalUserId)
            const localVarPath = `/user/lookup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (firstName !== undefined) {
                localVarQueryParameter['first_name'] = firstName;
            }

            if (internalUserId !== undefined) {
                localVarQueryParameter['internal_user_id'] = internalUserId;
            }

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * To create a user, send a `POST` request to the `/user` endpoint and include the user details in JSON format in the request body. Upon creation of a user, you\'ll receive a user_token which would be used to interact with that user.
         * @summary Create a user
         * @param {User} user Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(user: User, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoredUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a user profile for a provided user token.
         * @summary Get user by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoredUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByToken(userToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve list of all tranasctions (payouts/loads/spendbacks) for a provider user.
         * @summary Transactions history
         * @param {string} userToken Token representing the user to get transactions history for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [numberOfRecords] Number of records to return
         * @param {string} [startDate] Starting date
         * @param {string} [endDate] Ending date
         * @param {number} [page] Page number
         * @param {'payout' | 'load' | 'spendback'} [type] Filter particular types of transactions. Comma separated to include multiple types
         * @param {string} [walletToken] Filter transactions to include only provided wallet token.
         * @param {boolean} [showAllClients] Wether to show transactions from all clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserHistory(userToken: string, idempotencyKey?: string, numberOfRecords?: number, startDate?: string, endDate?: string, page?: number, type?: 'payout' | 'load' | 'spendback', walletToken?: string, showAllClients?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TxnHistoryResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserHistory(userToken, idempotencyKey, numberOfRecords, startDate, endDate, page, type, walletToken, showAllClients, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get an Au10tix session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserUserTokenKycAu10tix(userToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserUserTokenKycAu10tix200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserUserTokenKycAu10tix(userToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserUserTokenKycVeriiff(userToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserUserTokenKycVeriiff200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserUserTokenKycVeriiff(userToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Updated user
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoredUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(userToken, updateUser, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Looksup whether a user with the provided email and first name exist
         * @summary Lookup an existing user
         * @param {string} email User\&#39;s email address. Required if First Name is provided
         * @param {string} firstName User\&#39;s first name. Required if email is provided
         * @param {string} internalUserId A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |. Required if email and first name are not provided
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userLookup(email: string, firstName: string, internalUserId: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FoundUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userLookup(email, firstName, internalUserId, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * To create a user, send a `POST` request to the `/user` endpoint and include the user details in JSON format in the request body. Upon creation of a user, you\'ll receive a user_token which would be used to interact with that user.
         * @summary Create a user
         * @param {User} user Created user object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(user: User, options?: any): AxiosPromise<StoredUser> {
            return localVarFp.createUser(user, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a user profile for a provided user token.
         * @summary Get user by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByToken(userToken: string, idempotencyKey?: string, options?: any): AxiosPromise<StoredUser> {
            return localVarFp.getUserByToken(userToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve list of all tranasctions (payouts/loads/spendbacks) for a provider user.
         * @summary Transactions history
         * @param {string} userToken Token representing the user to get transactions history for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [numberOfRecords] Number of records to return
         * @param {string} [startDate] Starting date
         * @param {string} [endDate] Ending date
         * @param {number} [page] Page number
         * @param {'payout' | 'load' | 'spendback'} [type] Filter particular types of transactions. Comma separated to include multiple types
         * @param {string} [walletToken] Filter transactions to include only provided wallet token.
         * @param {boolean} [showAllClients] Wether to show transactions from all clients
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserHistory(userToken: string, idempotencyKey?: string, numberOfRecords?: number, startDate?: string, endDate?: string, page?: number, type?: 'payout' | 'load' | 'spendback', walletToken?: string, showAllClients?: boolean, options?: any): AxiosPromise<Array<TxnHistoryResp>> {
            return localVarFp.getUserHistory(userToken, idempotencyKey, numberOfRecords, startDate, endDate, page, type, walletToken, showAllClients, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an Au10tix session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycAu10tix(userToken: string, options?: any): AxiosPromise<GetUserUserTokenKycAu10tix200Response> {
            return localVarFp.getUserUserTokenKycAu10tix(userToken, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycVeriiff(userToken: string, options?: any): AxiosPromise<GetUserUserTokenKycVeriiff200Response> {
            return localVarFp.getUserUserTokenKycVeriiff(userToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Updated user
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, options?: any): AxiosPromise<StoredUser> {
            return localVarFp.updateUser(userToken, updateUser, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Looksup whether a user with the provided email and first name exist
         * @summary Lookup an existing user
         * @param {string} email User\&#39;s email address. Required if First Name is provided
         * @param {string} firstName User\&#39;s first name. Required if email is provided
         * @param {string} internalUserId A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |. Required if email and first name are not provided
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLookup(email: string, firstName: string, internalUserId: string, idempotencyKey?: string, options?: any): AxiosPromise<FoundUser> {
            return localVarFp.userLookup(email, firstName, internalUserId, idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * To create a user, send a `POST` request to the `/user` endpoint and include the user details in JSON format in the request body. Upon creation of a user, you\'ll receive a user_token which would be used to interact with that user.
     * @summary Create a user
     * @param {User} user Created user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public createUser(user: User, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).createUser(user, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a user profile for a provided user token.
     * @summary Get user by user token
     * @param {string} userToken The user token that needs to be fetched.
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserByToken(userToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve list of all tranasctions (payouts/loads/spendbacks) for a provider user.
     * @summary Transactions history
     * @param {string} userToken Token representing the user to get transactions history for
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {number} [numberOfRecords] Number of records to return
     * @param {string} [startDate] Starting date
     * @param {string} [endDate] Ending date
     * @param {number} [page] Page number
     * @param {'payout' | 'load' | 'spendback'} [type] Filter particular types of transactions. Comma separated to include multiple types
     * @param {string} [walletToken] Filter transactions to include only provided wallet token.
     * @param {boolean} [showAllClients] Wether to show transactions from all clients
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserHistory(userToken: string, idempotencyKey?: string, numberOfRecords?: number, startDate?: string, endDate?: string, page?: number, type?: 'payout' | 'load' | 'spendback', walletToken?: string, showAllClients?: boolean, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserHistory(userToken, idempotencyKey, numberOfRecords, startDate, endDate, page, type, walletToken, showAllClients, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an Au10tix session link
     * @param {string} userToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserUserTokenKycAu10tix(userToken: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserUserTokenKycAu10tix(userToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a Veriff session link
     * @param {string} userToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserUserTokenKycVeriiff(userToken: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserUserTokenKycVeriiff(userToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates profile information for a provided user token.
     * @summary Updated user
     * @param {string} userToken user token that need to be updated
     * @param {UpdateUser} updateUser Updated user object
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public updateUser(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).updateUser(userToken, updateUser, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Looksup whether a user with the provided email and first name exist
     * @summary Lookup an existing user
     * @param {string} email User\&#39;s email address. Required if First Name is provided
     * @param {string} firstName User\&#39;s first name. Required if email is provided
     * @param {string} internalUserId A client-defined identifier for the user. This is the unique ID assigned to the user on your system. Max 75 characters. Allows letters, numbers, and + , - . / _ ~ |. Required if email and first name are not provided
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userLookup(email: string, firstName: string, internalUserId: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userLookup(email, firstName, internalUserId, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }
}
