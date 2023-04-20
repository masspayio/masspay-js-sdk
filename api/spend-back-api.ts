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
import { SpendBackTxn } from '../models';
// @ts-ignore
import { SpendBackTxnResp } from '../models';
// @ts-ignore
import { SpendBacks } from '../models';
/**
 * SpendBackApi - axios parameter creator
 * @export
 */
export const SpendBackApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This **GET** endpoint is used to retrieve the history of spendbacks for a specific user token. <br> You can use this endpoint to help manage your payment operations and track the usage of funds by your users. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a list of all the historical spendbacks for the provided user token. The response will contain a JSON array with details for each spendback transaction.
         * @summary Get history of spend backs by user token
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserSpendbacksByToken: async (userToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserSpendbacksByToken', 'userToken', userToken)
            const localVarPath = `/spendback/{user_token}`
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
         * This **POST** endpoint is used to initiate a spendback transaction to a provided user token. <br> You can use this endpoint to enable spendback transactions for your users and help them manage their funds more effectively. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, along with the required parameters in the request Body, including `client_spendback_id`, `source_token`, `source_currency_code` and `amount`. <br> The endpoint will then initiate the spendback transaction, transferring funds from the source token to the user token. The response will contain a JSON object indicating the status of the request and any relevant transaction details.
         * @summary Initiate a spend back transaction
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {SpendBackTxn} [spendBackTxn] Spend back information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiateSpendback: async (userToken: string, idempotencyKey?: string, spendBackTxn?: SpendBackTxn, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('initiateSpendback', 'userToken', userToken)
            const localVarPath = `/spendback/{user_token}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(spendBackTxn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SpendBackApi - functional programming interface
 * @export
 */
export const SpendBackApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SpendBackApiAxiosParamCreator(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve the history of spendbacks for a specific user token. <br> You can use this endpoint to help manage your payment operations and track the usage of funds by your users. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a list of all the historical spendbacks for the provided user token. The response will contain a JSON array with details for each spendback transaction.
         * @summary Get history of spend backs by user token
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserSpendbacksByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SpendBacks>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserSpendbacksByToken(userToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **POST** endpoint is used to initiate a spendback transaction to a provided user token. <br> You can use this endpoint to enable spendback transactions for your users and help them manage their funds more effectively. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, along with the required parameters in the request Body, including `client_spendback_id`, `source_token`, `source_currency_code` and `amount`. <br> The endpoint will then initiate the spendback transaction, transferring funds from the source token to the user token. The response will contain a JSON object indicating the status of the request and any relevant transaction details.
         * @summary Initiate a spend back transaction
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {SpendBackTxn} [spendBackTxn] Spend back information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initiateSpendback(userToken: string, idempotencyKey?: string, spendBackTxn?: SpendBackTxn, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SpendBackTxnResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiateSpendback(userToken, idempotencyKey, spendBackTxn, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SpendBackApi - factory interface
 * @export
 */
export const SpendBackApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SpendBackApiFp(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve the history of spendbacks for a specific user token. <br> You can use this endpoint to help manage your payment operations and track the usage of funds by your users. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a list of all the historical spendbacks for the provided user token. The response will contain a JSON array with details for each spendback transaction.
         * @summary Get history of spend backs by user token
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserSpendbacksByToken(userToken: string, idempotencyKey?: string, options?: any): AxiosPromise<Array<SpendBacks>> {
            return localVarFp.getUserSpendbacksByToken(userToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * This **POST** endpoint is used to initiate a spendback transaction to a provided user token. <br> You can use this endpoint to enable spendback transactions for your users and help them manage their funds more effectively. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, along with the required parameters in the request Body, including `client_spendback_id`, `source_token`, `source_currency_code` and `amount`. <br> The endpoint will then initiate the spendback transaction, transferring funds from the source token to the user token. The response will contain a JSON object indicating the status of the request and any relevant transaction details.
         * @summary Initiate a spend back transaction
         * @param {string} userToken Token representing the user to fetch/initiate spend back
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {SpendBackTxn} [spendBackTxn] Spend back information
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiateSpendback(userToken: string, idempotencyKey?: string, spendBackTxn?: SpendBackTxn, options?: any): AxiosPromise<SpendBackTxnResp> {
            return localVarFp.initiateSpendback(userToken, idempotencyKey, spendBackTxn, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SpendBackApi - object-oriented interface
 * @export
 * @class SpendBackApi
 * @extends {BaseAPI}
 */
export class SpendBackApi extends BaseAPI {
    /**
     * This **GET** endpoint is used to retrieve the history of spendbacks for a specific user token. <br> You can use this endpoint to help manage your payment operations and track the usage of funds by your users. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then return a list of all the historical spendbacks for the provided user token. The response will contain a JSON array with details for each spendback transaction.
     * @summary Get history of spend backs by user token
     * @param {string} userToken Token representing the user to fetch/initiate spend back
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpendBackApi
     */
    public getUserSpendbacksByToken(userToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return SpendBackApiFp(this.configuration).getUserSpendbacksByToken(userToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **POST** endpoint is used to initiate a spendback transaction to a provided user token. <br> You can use this endpoint to enable spendback transactions for your users and help them manage their funds more effectively. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path, along with the required parameters in the request Body, including `client_spendback_id`, `source_token`, `source_currency_code` and `amount`. <br> The endpoint will then initiate the spendback transaction, transferring funds from the source token to the user token. The response will contain a JSON object indicating the status of the request and any relevant transaction details.
     * @summary Initiate a spend back transaction
     * @param {string} userToken Token representing the user to fetch/initiate spend back
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {SpendBackTxn} [spendBackTxn] Spend back information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpendBackApi
     */
    public initiateSpendback(userToken: string, idempotencyKey?: string, spendBackTxn?: SpendBackTxn, options?: AxiosRequestConfig) {
        return SpendBackApiFp(this.configuration).initiateSpendback(userToken, idempotencyKey, spendBackTxn, options).then((request) => request(this.axios, this.basePath));
    }
}
