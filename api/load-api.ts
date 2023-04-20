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
import { ResendBalanceNotification200Response } from '../models';
/**
 * LoadApi - axios parameter creator
 * @export
 */
export const LoadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This **DELETE** endpoint is used to reverse a load transaction that was already processed, allowing you to remove funds from a user\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the load_token as a parameter in the Query string. <br> The endpoint will then attempt to reverse the specified load transaction. If the load is still in scheduled status, it will be marked as cancelled.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
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
         * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This **GET** endpoint is used to retrieve a transaction history of all loads that were made to the provided user token, including scheduled loads. <br> You can use this endpoint to obtain a comprehensive history of loads for the user token, allowing you to track and analyze their incoming payments over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a JSON array of load transactions, each including transactions details.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * This **POST** endpoint is used to initiate a load transaction, allowing you to add funds to a user token\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. You also need to provide the `client_load_id`, `source_token`, and amount as JSON parameters in the Request Body. The `client_load_id` is a unique identifier for the transaction that you can use to track it, while the `source_token` is the token or account from which the funds will be loaded. The amount parameter specifies the amount of funds to be loaded into the user\'s wallet. <br> The response will contain a JSON object indicating the status of the load transaction and any relevant details.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * This **PUT** endpoint is used to resend a load notification to the user associated with the provided `user_token` for a specific load transaction. <br> You can use this endpoint to help ensure that users are notified promptly and accurately of any incoming funds or other important payment events. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the `load_token` as a parameter in the Query string. The endpoint will then resend a notification to the user for the specified load transaction. <br> The response will contain a JSON object indicating the status of the request.
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadUserTokenPut: async (userToken: string, loadToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('loadUserTokenPut', 'userToken', userToken)
            // verify required parameter 'loadToken' is not null or undefined
            assertParamExists('loadUserTokenPut', 'loadToken', loadToken)
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * 
         * @summary Resend Balance Notification
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Optional wallet token. If none is provided, select the first wallet available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendBalanceNotification: async (userToken: string, idempotencyKey?: string, walletToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('resendBalanceNotification', 'userToken', userToken)
            const localVarPath = `/wallet/{user_token}`
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (walletToken !== undefined) {
                localVarQueryParameter['wallet_token'] = walletToken;
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
         * This **DELETE** endpoint is used to reverse a load transaction that was already processed, allowing you to remove funds from a user\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the load_token as a parameter in the Query string. <br> The endpoint will then attempt to reverse the specified load transaction. If the load is still in scheduled status, it will be marked as cancelled.
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
         * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage.
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
         * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
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
         * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
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
         * This **GET** endpoint is used to retrieve a transaction history of all loads that were made to the provided user token, including scheduled loads. <br> You can use this endpoint to obtain a comprehensive history of loads for the user token, allowing you to track and analyze their incoming payments over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a JSON array of load transactions, each including transactions details.
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
         * This **POST** endpoint is used to initiate a load transaction, allowing you to add funds to a user token\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. You also need to provide the `client_load_id`, `source_token`, and amount as JSON parameters in the Request Body. The `client_load_id` is a unique identifier for the transaction that you can use to track it, while the `source_token` is the token or account from which the funds will be loaded. The amount parameter specifies the amount of funds to be loaded into the user\'s wallet. <br> The response will contain a JSON object indicating the status of the load transaction and any relevant details.
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
         * This **PUT** endpoint is used to resend a load notification to the user associated with the provided `user_token` for a specific load transaction. <br> You can use this endpoint to help ensure that users are notified promptly and accurately of any incoming funds or other important payment events. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the `load_token` as a parameter in the Query string. The endpoint will then resend a notification to the user for the specified load transaction. <br> The response will contain a JSON object indicating the status of the request.
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loadUserTokenPut(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResendBalanceNotification200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loadUserTokenPut(userToken, loadToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Resend Balance Notification
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Optional wallet token. If none is provided, select the first wallet available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendBalanceNotification(userToken: string, idempotencyKey?: string, walletToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResendBalanceNotification200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendBalanceNotification(userToken, idempotencyKey, walletToken, options);
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
         * This **DELETE** endpoint is used to reverse a load transaction that was already processed, allowing you to remove funds from a user\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the load_token as a parameter in the Query string. <br> The endpoint will then attempt to reverse the specified load transaction. If the load is still in scheduled status, it will be marked as cancelled.
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
         * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage.
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
         * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
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
         * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
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
         * This **GET** endpoint is used to retrieve a transaction history of all loads that were made to the provided user token, including scheduled loads. <br> You can use this endpoint to obtain a comprehensive history of loads for the user token, allowing you to track and analyze their incoming payments over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a JSON array of load transactions, each including transactions details.
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
         * This **POST** endpoint is used to initiate a load transaction, allowing you to add funds to a user token\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. You also need to provide the `client_load_id`, `source_token`, and amount as JSON parameters in the Request Body. The `client_load_id` is a unique identifier for the transaction that you can use to track it, while the `source_token` is the token or account from which the funds will be loaded. The amount parameter specifies the amount of funds to be loaded into the user\'s wallet. <br> The response will contain a JSON object indicating the status of the load transaction and any relevant details.
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
         * This **PUT** endpoint is used to resend a load notification to the user associated with the provided `user_token` for a specific load transaction. <br> You can use this endpoint to help ensure that users are notified promptly and accurately of any incoming funds or other important payment events. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the `load_token` as a parameter in the Query string. The endpoint will then resend a notification to the user for the specified load transaction. <br> The response will contain a JSON object indicating the status of the request.
         * @summary Resend Load Notification
         * @param {string} userToken Token representing the user to load/fetch loads for
         * @param {string} loadToken Load token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadUserTokenPut(userToken: string, loadToken: string, idempotencyKey?: string, options?: any): AxiosPromise<ResendBalanceNotification200Response> {
            return localVarFp.loadUserTokenPut(userToken, loadToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Resend Balance Notification
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Optional wallet token. If none is provided, select the first wallet available
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendBalanceNotification(userToken: string, idempotencyKey?: string, walletToken?: string, options?: any): AxiosPromise<ResendBalanceNotification200Response> {
            return localVarFp.resendBalanceNotification(userToken, idempotencyKey, walletToken, options).then((request) => request(axios, basePath));
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
     * This **DELETE** endpoint is used to reverse a load transaction that was already processed, allowing you to remove funds from a user\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the load_token as a parameter in the Query string. <br> The endpoint will then attempt to reverse the specified load transaction. If the load is still in scheduled status, it will be marked as cancelled.
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
     * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage.
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
     * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
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
     * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
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
     * This **GET** endpoint is used to retrieve a transaction history of all loads that were made to the provided user token, including scheduled loads. <br> You can use this endpoint to obtain a comprehensive history of loads for the user token, allowing you to track and analyze their incoming payments over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a JSON array of load transactions, each including transactions details.
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
     * This **POST** endpoint is used to initiate a load transaction, allowing you to add funds to a user token\'s wallet. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. You also need to provide the `client_load_id`, `source_token`, and amount as JSON parameters in the Request Body. The `client_load_id` is a unique identifier for the transaction that you can use to track it, while the `source_token` is the token or account from which the funds will be loaded. The amount parameter specifies the amount of funds to be loaded into the user\'s wallet. <br> The response will contain a JSON object indicating the status of the load transaction and any relevant details.
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
     * This **PUT** endpoint is used to resend a load notification to the user associated with the provided `user_token` for a specific load transaction. <br> You can use this endpoint to help ensure that users are notified promptly and accurately of any incoming funds or other important payment events. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, and the `load_token` as a parameter in the Query string. The endpoint will then resend a notification to the user for the specified load transaction. <br> The response will contain a JSON object indicating the status of the request.
     * @summary Resend Load Notification
     * @param {string} userToken Token representing the user to load/fetch loads for
     * @param {string} loadToken Load token
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public loadUserTokenPut(userToken: string, loadToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).loadUserTokenPut(userToken, loadToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Resend Balance Notification
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {string} [walletToken] Optional wallet token. If none is provided, select the first wallet available
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadApi
     */
    public resendBalanceNotification(userToken: string, idempotencyKey?: string, walletToken?: string, options?: AxiosRequestConfig) {
        return LoadApiFp(this.configuration).resendBalanceNotification(userToken, idempotencyKey, walletToken, options).then((request) => request(this.axios, this.basePath));
    }
}
