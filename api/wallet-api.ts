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
import { GetWalletCardInfo200Response } from '../models';
// @ts-ignore
import { WalletTxnResp } from '../models';
/**
 * WalletApi - axios parameter creator
 * @export
 */
export const WalletApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
         * This **GET** endpoint is used to retrieve all available wallets for a provided user token. <br> You can use this endpoint to obtain information about the wallets associated with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each wallet including `user_token`, `balance`, `currency_code`.
         * @summary Retrieve all available wallets for a user
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWallet: async (userToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getWallet', 'userToken', userToken)
            const localVarPath = `/wallet/{user_token}`
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
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletCardInfo: async (userToken: string, walletToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getWalletCardInfo', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('getWalletCardInfo', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/card`
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
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWalletCardInfo: async (userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('updateWalletCardInfo', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('updateWalletCardInfo', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/card`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
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

            if (pin !== undefined) {
                localVarQueryParameter['pin'] = pin;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
 * WalletApi - functional programming interface
 * @export
 */
export const WalletApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WalletApiAxiosParamCreator(configuration)
    return {
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
         * This **GET** endpoint is used to retrieve all available wallets for a provided user token. <br> You can use this endpoint to obtain information about the wallets associated with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each wallet including `user_token`, `balance`, `currency_code`.
         * @summary Retrieve all available wallets for a user
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWallet(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WalletTxnResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWallet(userToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletCardInfo(userToken: string, walletToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWalletCardInfo200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletCardInfo(userToken, walletToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWalletCardInfo(userToken, walletToken, pin, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WalletApi - factory interface
 * @export
 */
export const WalletApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WalletApiFp(configuration)
    return {
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
         * This **GET** endpoint is used to retrieve all available wallets for a provided user token. <br> You can use this endpoint to obtain information about the wallets associated with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each wallet including `user_token`, `balance`, `currency_code`.
         * @summary Retrieve all available wallets for a user
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWallet(userToken: string, idempotencyKey?: string, options?: any): AxiosPromise<Array<WalletTxnResp>> {
            return localVarFp.getWallet(userToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletCardInfo(userToken: string, walletToken: string, options?: any): AxiosPromise<GetWalletCardInfo200Response> {
            return localVarFp.getWalletCardInfo(userToken, walletToken, options).then((request) => request(axios, basePath));
        },
        /**
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: any): AxiosPromise<void> {
            return localVarFp.updateWalletCardInfo(userToken, walletToken, pin, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WalletApi - object-oriented interface
 * @export
 * @class WalletApi
 * @extends {BaseAPI}
 */
export class WalletApi extends BaseAPI {
    /**
     * This **POST** endpoint is used to add an autopay rule that will initiate a payout whenever the provided wallet token is loaded. <br> You can use this endpoint to create an autopay rule that automatically sends a percentage of incoming load to a specific destination. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the `destination_token` and percentage of incoming load that should be autopaid to the `destination_token` in the request Body. <br> The response will include a JSON object containing the details of the created autopay rule, including the token, `destination_token` and percentage.
     * @summary Add autopay rule
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {AutopayRule} [autopayRule] Autopay rule configuration
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public createAutopayRule(userToken: string, walletToken: string, autopayRule?: AutopayRule, options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).createAutopayRule(userToken, walletToken, autopayRule, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **DELETE** endpoint is used to delete an existing autopay rule. <br> You can use this endpoint to remove an autopay rule that is no longer needed. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path, and the token of the autopay rule you wish to delete in the request Body. <br> The response will include a message indicating the success of the deletion.
     * @summary Delete autopay rule
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {string} token Autopay token to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public deleteAutopayRule(userToken: string, walletToken: string, token: string, options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).deleteAutopayRule(userToken, walletToken, token, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve all autopay rules currently applied to the provided wallet token. <br> You can use this endpoint to obtain information about the autopay rules associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON array containing details for each autopay rule, including the token, `destination_token` and percentage.
     * @summary Get all autopay rules
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public getAutopayRules(userToken: string, walletToken: string, options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).getAutopayRules(userToken, walletToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve all available wallets for a provided user token. <br> You can use this endpoint to obtain information about the wallets associated with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each wallet including `user_token`, `balance`, `currency_code`.
     * @summary Retrieve all available wallets for a user
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public getWallet(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).getWallet(userToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
     * @summary Get MassPay Card Information
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public getWalletCardInfo(userToken: string, walletToken: string, options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).getWalletCardInfo(userToken, walletToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
     * @summary Update MassPay Card Information
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
     * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApi
     */
    public updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: AxiosRequestConfig) {
        return WalletApiFp(this.configuration).updateWalletCardInfo(userToken, walletToken, pin, status, options).then((request) => request(this.axios, this.basePath));
    }
}
