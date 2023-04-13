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
import { AttrVelocityRequestInner } from '../models';
// @ts-ignore
import { GetUserUserTokenKycAu10tix200Response } from '../models';
// @ts-ignore
import { GetUserUserTokenKycVeriiff200Response } from '../models';
/**
 * KYCApi - axios parameter creator
 * @export
 */
export const KYCApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Identify users with matching attribute values
         * @summary Attributes velocity check
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {Array<AttrVelocityRequestInner>} [attrVelocityRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAttributesVelocity: async (userToken: string, idempotencyKey?: string, attrVelocityRequestInner?: Array<AttrVelocityRequestInner>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('findAttributesVelocity', 'userToken', userToken)
            const localVarPath = `/attribute/{user_token}/velocity`
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
            localVarRequestOptions.data = serializeDataIfNeeded(attrVelocityRequestInner, localVarRequestOptions, configuration)

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
    }
};

/**
 * KYCApi - functional programming interface
 * @export
 */
export const KYCApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = KYCApiAxiosParamCreator(configuration)
    return {
        /**
         * Identify users with matching attribute values
         * @summary Attributes velocity check
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {Array<AttrVelocityRequestInner>} [attrVelocityRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAttributesVelocity(userToken: string, idempotencyKey?: string, attrVelocityRequestInner?: Array<AttrVelocityRequestInner>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAttributesVelocity(userToken, idempotencyKey, attrVelocityRequestInner, options);
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
    }
};

/**
 * KYCApi - factory interface
 * @export
 */
export const KYCApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = KYCApiFp(configuration)
    return {
        /**
         * Identify users with matching attribute values
         * @summary Attributes velocity check
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {Array<AttrVelocityRequestInner>} [attrVelocityRequestInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAttributesVelocity(userToken: string, idempotencyKey?: string, attrVelocityRequestInner?: Array<AttrVelocityRequestInner>, options?: any): AxiosPromise<Array<object>> {
            return localVarFp.findAttributesVelocity(userToken, idempotencyKey, attrVelocityRequestInner, options).then((request) => request(axios, basePath));
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
    };
};

/**
 * KYCApi - object-oriented interface
 * @export
 * @class KYCApi
 * @extends {BaseAPI}
 */
export class KYCApi extends BaseAPI {
    /**
     * Identify users with matching attribute values
     * @summary Attributes velocity check
     * @param {string} userToken Token representing the user to retrieve attributes for
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {Array<AttrVelocityRequestInner>} [attrVelocityRequestInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KYCApi
     */
    public findAttributesVelocity(userToken: string, idempotencyKey?: string, attrVelocityRequestInner?: Array<AttrVelocityRequestInner>, options?: AxiosRequestConfig) {
        return KYCApiFp(this.configuration).findAttributesVelocity(userToken, idempotencyKey, attrVelocityRequestInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an Au10tix session link
     * @param {string} userToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KYCApi
     */
    public getUserUserTokenKycAu10tix(userToken: string, options?: AxiosRequestConfig) {
        return KYCApiFp(this.configuration).getUserUserTokenKycAu10tix(userToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a Veriff session link
     * @param {string} userToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KYCApi
     */
    public getUserUserTokenKycVeriiff(userToken: string, options?: AxiosRequestConfig) {
        return KYCApiFp(this.configuration).getUserUserTokenKycVeriiff(userToken, options).then((request) => request(this.axios, this.basePath));
    }
}
