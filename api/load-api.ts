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
import { AutopayResp } from '../models';
// @ts-ignore
import { AutopayRule } from '../models';
// @ts-ignore
import { Exception } from '../models';
// @ts-ignore
import { LoadTxn } from '../models';
// @ts-ignore
import { LoadTxnResp } from '../models';
// @ts-ignore
import { Loads } from '../models';
// @ts-ignore
import { ResendLoadNotification200Response } from '../models';
/**
 * LoadApi - axios parameter creator
 * @export
 */
export const LoadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Reverse a load that was already processed. If the load is still in scheduled status, it will mark it as cancelled
         * @summary Reverse a user load
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelUserLoad: async (userToken: string, loadToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('cancelUserLoad', 'userToken', userToken)
            // verify required parameter 'loadToken' is not null or undefined
            assertParamExists('cancelUserLoad', 'loadToken', loadToken)
            const localVarPath = `/load/{user_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (loadToken !== undefined) {
                localVarQueryParameter['load_token'] = loadToken;
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
         * Create an autopay rule that will automatically initiate a payout whenever the `wallet_token` is loaded
         * @summary Add autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {AutopayRule} [autopayRule] Autopay rule configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAutopayRule: async (userToken: string, walletToken: string, autopayRule?: AutopayRule, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('createAutopayRule', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('createAutopayRule', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/autopay`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(autopayRule, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an autopay rule
         * @summary Delete autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} token Autopay token to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAutopayRule: async (userToken: string, walletToken: string, token: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('deleteAutopayRule', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('deleteAutopayRule', 'walletToken', walletToken)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('deleteAutopayRule', 'token', token)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/autopay`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "x-api-key", configuration)

            // authentication AUTHORIZER_NAME required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
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
         * Obtain list of all autopay rules currently applied to this wallet
         * @summary Get all autopay rules
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAutopayRules: async (userToken: string, walletToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getAutopayRules', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('getAutopayRules', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/autopay`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
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
         * Gets a transaction history of all loads that were made to the provided user token, including scheduled loads.
         * @summary Get history of loads by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserLoadsByToken: async (userToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserLoadsByToken', 'userToken', userToken)
            const localVarPath = `/load/{user_token}`
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
         * Initiates a load of funds into a user token\'s wallet.
         * @summary Initiate a load transaction
         * @param {string} userToken Token representing the user to load
         * @param {LoadTxn} loadTxn Load information
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadUser: async (userToken: string, loadTxn: LoadTxn, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('loadUser', 'userToken', userToken)
            // verify required parameter 'loadTxn' is not null or undefined
            assertParamExists('loadUser', 'loadTxn', loadTxn)
            const localVarPath = `/load/{user_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
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

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loadTxn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendLoadNotification: async (userToken: string, loadToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('resendLoadNotification', 'userToken', userToken)
            // verify required parameter 'loadToken' is not null or undefined
            assertParamExists('resendLoadNotification', 'loadToken', loadToken)
            const localVarPath = `/load/{user_token}`
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

            if (loadToken !== undefined) {
                localVarQueryParameter['load_token'] = loadToken;
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
 * LoadApi - functional programming interface
 * @export
 */
export const LoadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoadApiAxiosParamCreator(configuration)
    return {
        /**
         * Reverse a load that was already processed. If the load is still in scheduled status, it will mark it as cancelled
         * @summary Reverse a user load
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelUserLoad(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelUserLoad(userToken, loadToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create an autopay rule that will automatically initiate a payout whenever the `wallet_token` is loaded
         * @summary Add autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {AutopayRule} [autopayRule] Autopay rule configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAutopayRule(userToken: string, walletToken: string, autopayRule?: AutopayRule, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AutopayResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAutopayRule(userToken, walletToken, autopayRule, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an autopay rule
         * @summary Delete autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} token Autopay token to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAutopayRule(userToken: string, walletToken: string, token: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAutopayRule(userToken, walletToken, token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Obtain list of all autopay rules currently applied to this wallet
         * @summary Get all autopay rules
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAutopayRules(userToken: string, walletToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AutopayResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAutopayRules(userToken, walletToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a transaction history of all loads that were made to the provided user token, including scheduled loads.
         * @summary Get history of loads by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserLoadsByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Loads>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserLoadsByToken(userToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Initiates a load of funds into a user token\'s wallet.
         * @summary Initiate a load transaction
         * @param {string} userToken Token representing the user to load
         * @param {LoadTxn} loadTxn Load information
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loadUser(userToken: string, loadTxn: LoadTxn, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoadTxnResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loadUser(userToken, loadTxn, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendLoadNotification(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResendLoadNotification200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendLoadNotification(userToken, loadToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoadApi - factory interface
 * @export
 */
export const LoadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoadApiFp(configuration)
    return {
        /**
         * Reverse a load that was already processed. If the load is still in scheduled status, it will mark it as cancelled
         * @summary Reverse a user load
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelUserLoad(userToken: string, loadToken: string, idempotencyKey?: string, options?: any): AxiosPromise<void> {
            return localVarFp.cancelUserLoad(userToken, loadToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Create an autopay rule that will automatically initiate a payout whenever the `wallet_token` is loaded
         * @summary Add autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {AutopayRule} [autopayRule] Autopay rule configuration
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAutopayRule(userToken: string, walletToken: string, autopayRule?: AutopayRule, options?: any): AxiosPromise<AutopayResp> {
            return localVarFp.createAutopayRule(userToken, walletToken, autopayRule, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an autopay rule
         * @summary Delete autopay rule
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} token Autopay token to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAutopayRule(userToken: string, walletToken: string, token: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteAutopayRule(userToken, walletToken, token, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtain list of all autopay rules currently applied to this wallet
         * @summary Get all autopay rules
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAutopayRules(userToken: string, walletToken: string, options?: any): AxiosPromise<Array<AutopayResp>> {
            return localVarFp.getAutopayRules(userToken, walletToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a transaction history of all loads that were made to the provided user token, including scheduled loads.
         * @summary Get history of loads by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserLoadsByToken(userToken: string, idempotencyKey?: string, options?: any): AxiosPromise<Array<Loads>> {
            return localVarFp.getUserLoadsByToken(userToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Initiates a load of funds into a user token\'s wallet.
         * @summary Initiate a load transaction
         * @param {string} userToken Token representing the user to load
         * @param {LoadTxn} loadTxn Load information
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadUser(userToken: string, loadTxn: LoadTxn, idempotencyKey?: string, options?: any): AxiosPromise<LoadTxnResp> {
            return localVarFp.loadUser(userToken, loadTxn, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendLoadNotification(userToken: string, loadToken: string, idempotencyKey?: string, options?: any): AxiosPromise<ResendLoadNotification200Response> {
            return localVarFp.resendLoadNotification(userToken, loadToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoadApi - object-oriented interface
 * @export
 * @class LoadApi
 * @extends {BaseAPI}
 */
export class LoadApi extends BaseAPI {
    /**
     * Reverse a load that was already processed. If the load is still in scheduled status, it will mark it as cancelled
     * @summary Reverse a user load
     * @param {string} userToken Token representing the user to load/fetch loads for
     * @param {string} loadToken Load token
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public cancelUserLoad(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).cancelUserLoad(userToken, loadToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create an autopay rule that will automatically initiate a payout whenever the `wallet_token` is loaded
     * @summary Add autopay rule
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {AutopayRule} [autopayRule] Autopay rule configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public createAutopayRule(userToken: string, walletToken: string, autopayRule?: AutopayRule, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).createAutopayRule(userToken, walletToken, autopayRule, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an autopay rule
     * @summary Delete autopay rule
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {string} token Autopay token to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public deleteAutopayRule(userToken: string, walletToken: string, token: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).deleteAutopayRule(userToken, walletToken, token, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtain list of all autopay rules currently applied to this wallet
     * @summary Get all autopay rules
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public getAutopayRules(userToken: string, walletToken: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).getAutopayRules(userToken, walletToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a transaction history of all loads that were made to the provided user token, including scheduled loads.
     * @summary Get history of loads by user token
     * @param {string} userToken The user token that needs to be fetched.
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public getUserLoadsByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).getUserLoadsByToken(userToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Initiates a load of funds into a user token\'s wallet.
     * @summary Initiate a load transaction
     * @param {string} userToken Token representing the user to load
     * @param {LoadTxn} loadTxn Load information
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public loadUser(userToken: string, loadTxn: LoadTxn, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).loadUser(userToken, loadTxn, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Resend Load Notification
     * @param {string} userToken Token representing the user to load/fetch loads for
     * @param {string} loadToken Load token
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public resendLoadNotification(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).resendLoadNotification(userToken, loadToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }
}
