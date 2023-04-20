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
import { TaxYearUserResp } from '../models';
/**
 * TaxApi - axios parameter creator
 * @export
 */
export const TaxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get List Of Users Annual Balance
         * @param {number} [amountThreshold] If specified, only show users whose total balance exceeds the provided amount
         * @param {number} [taxYear] The year for which we would like to obtain tax information for. If none provided, defaults to previous year.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxUsers: async (amountThreshold?: number, taxYear?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/tax`;
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

            if (amountThreshold !== undefined) {
                localVarQueryParameter['amount_threshold'] = amountThreshold;
            }

            if (taxYear !== undefined) {
                localVarQueryParameter['tax_year'] = taxYear;
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
 * TaxApi - functional programming interface
 * @export
 */
export const TaxApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaxApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get List Of Users Annual Balance
         * @param {number} [amountThreshold] If specified, only show users whose total balance exceeds the provided amount
         * @param {number} [taxYear] The year for which we would like to obtain tax information for. If none provided, defaults to previous year.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTaxUsers(amountThreshold?: number, taxYear?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TaxYearUserResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTaxUsers(amountThreshold, taxYear, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaxApi - factory interface
 * @export
 */
export const TaxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaxApiFp(configuration)
    return {
        /**
         * 
         * @summary Get List Of Users Annual Balance
         * @param {number} [amountThreshold] If specified, only show users whose total balance exceeds the provided amount
         * @param {number} [taxYear] The year for which we would like to obtain tax information for. If none provided, defaults to previous year.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTaxUsers(amountThreshold?: number, taxYear?: number, options?: any): AxiosPromise<Array<TaxYearUserResp>> {
            return localVarFp.getTaxUsers(amountThreshold, taxYear, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaxApi - object-oriented interface
 * @export
 * @class TaxApi
 * @extends {BaseAPI}
 */
export class TaxApi extends BaseAPI {
    /**
     * 
     * @summary Get List Of Users Annual Balance
     * @param {number} [amountThreshold] If specified, only show users whose total balance exceeds the provided amount
     * @param {number} [taxYear] The year for which we would like to obtain tax information for. If none provided, defaults to previous year.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxApi
     */
    public getTaxUsers(amountThreshold?: number, taxYear?: number, options?: AxiosRequestConfig) {
        return TaxApiFp(this.configuration).getTaxUsers(amountThreshold, taxYear, options).then((request) => request(this.axios, this.basePath));
    }
}
