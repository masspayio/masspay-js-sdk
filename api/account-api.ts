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
import { AvailableBalanceTxnResp } from '../models';
// @ts-ignore
import { GetAccountStatement200Response } from '../models';
/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the current available balances.
         * @summary Get current available balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountBalance: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/account/balance`;
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
         * Retreived a certified PDF ledger statement for a provided timeframe
         * @summary Get certified account statement
         * @param {string} startDate Starting date of the statement
         * @param {string} endingDate Ending date of the statement (not more than 31 days than &#x60;start_date&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountStatement: async (startDate: string, endingDate: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'startDate' is not null or undefined
            assertParamExists('getAccountStatement', 'startDate', startDate)
            // verify required parameter 'endingDate' is not null or undefined
            assertParamExists('getAccountStatement', 'endingDate', endingDate)
            const localVarPath = `/account/statement`;
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

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }

            if (endingDate !== undefined) {
                localVarQueryParameter['ending_date'] = (endingDate as any instanceof Date) ?
                    (endingDate as any).toISOString().substr(0,10) :
                    endingDate;
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
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the current available balances.
         * @summary Get current available balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountBalance(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AvailableBalanceTxnResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountBalance(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retreived a certified PDF ledger statement for a provided timeframe
         * @summary Get certified account statement
         * @param {string} startDate Starting date of the statement
         * @param {string} endingDate Ending date of the statement (not more than 31 days than &#x60;start_date&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountStatement(startDate: string, endingDate: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAccountStatement200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccountStatement(startDate, endingDate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * Retrieves the current available balances.
         * @summary Get current available balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountBalance(options?: any): AxiosPromise<Array<AvailableBalanceTxnResp>> {
            return localVarFp.getAccountBalance(options).then((request) => request(axios, basePath));
        },
        /**
         * Retreived a certified PDF ledger statement for a provided timeframe
         * @summary Get certified account statement
         * @param {string} startDate Starting date of the statement
         * @param {string} endingDate Ending date of the statement (not more than 31 days than &#x60;start_date&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountStatement(startDate: string, endingDate: string, options?: any): AxiosPromise<GetAccountStatement200Response> {
            return localVarFp.getAccountStatement(startDate, endingDate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * Retrieves the current available balances.
     * @summary Get current available balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAccountBalance(options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAccountBalance(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retreived a certified PDF ledger statement for a provided timeframe
     * @summary Get certified account statement
     * @param {string} startDate Starting date of the statement
     * @param {string} endingDate Ending date of the statement (not more than 31 days than &#x60;start_date&#x60;)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public getAccountStatement(startDate: string, endingDate: string, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).getAccountStatement(startDate, endingDate, options).then((request) => request(this.axios, this.basePath));
    }
}
