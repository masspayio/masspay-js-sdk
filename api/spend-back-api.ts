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
         * Gets a list of all historical spendbacks for a provided user token.
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
         * Initiates a spend back transaction to a provided user token.
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
         * Gets a list of all historical spendbacks for a provided user token.
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
         * Initiates a spend back transaction to a provided user token.
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
         * Gets a list of all historical spendbacks for a provided user token.
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
         * Initiates a spend back transaction to a provided user token.
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
     * Gets a list of all historical spendbacks for a provided user token.
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
     * Initiates a spend back transaction to a provided user token.
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
