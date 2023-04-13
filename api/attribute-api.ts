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
import { AttrTxn } from '../models';
// @ts-ignore
import { AttrVelocityRequestInner } from '../models';
// @ts-ignore
import { AttrsRequirement } from '../models';
// @ts-ignore
import { Exception } from '../models';
/**
 * AttributeApi - axios parameter creator
 * @export
 */
export const AttributeApiAxiosParamCreator = function (configuration?: Configuration) {
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
         * Get all the required attributes for the provided user for a prticular destination token. If any of the attributes already have a stored value, it will be returned as well.
         * @summary Get user attributes for destination_token
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttrs: async (currency: string, userToken: string, destinationToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'currency' is not null or undefined
            assertParamExists('getAttrs', 'currency', currency)
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getAttrs', 'userToken', userToken)
            // verify required parameter 'destinationToken' is not null or undefined
            assertParamExists('getAttrs', 'destinationToken', destinationToken)
            const localVarPath = `/attribute/{user_token}/{destination_token}/{currency}`
                .replace(`{${"currency"}}`, encodeURIComponent(String(currency)))
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"destination_token"}}`, encodeURIComponent(String(destinationToken)));
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
         * If existing attributes are already stored, this call will override its values.
         * @summary Store user attributes
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to store attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback. 
         * @param {AttrTxn} attrTxn Attr parameters to store
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeAttrs: async (currency: string, userToken: string, destinationToken: string, attrTxn: AttrTxn, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'currency' is not null or undefined
            assertParamExists('storeAttrs', 'currency', currency)
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('storeAttrs', 'userToken', userToken)
            // verify required parameter 'destinationToken' is not null or undefined
            assertParamExists('storeAttrs', 'destinationToken', destinationToken)
            // verify required parameter 'attrTxn' is not null or undefined
            assertParamExists('storeAttrs', 'attrTxn', attrTxn)
            const localVarPath = `/attribute/{user_token}/{destination_token}/{currency}`
                .replace(`{${"currency"}}`, encodeURIComponent(String(currency)))
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"destination_token"}}`, encodeURIComponent(String(destinationToken)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(attrTxn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AttributeApi - functional programming interface
 * @export
 */
export const AttributeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttributeApiAxiosParamCreator(configuration)
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
         * Get all the required attributes for the provided user for a prticular destination token. If any of the attributes already have a stored value, it will be returned as well.
         * @summary Get user attributes for destination_token
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttrs(currency: string, userToken: string, destinationToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AttrsRequirement>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttrs(currency, userToken, destinationToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * If existing attributes are already stored, this call will override its values.
         * @summary Store user attributes
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to store attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback. 
         * @param {AttrTxn} attrTxn Attr parameters to store
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async storeAttrs(currency: string, userToken: string, destinationToken: string, attrTxn: AttrTxn, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.storeAttrs(currency, userToken, destinationToken, attrTxn, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AttributeApi - factory interface
 * @export
 */
export const AttributeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttributeApiFp(configuration)
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
         * Get all the required attributes for the provided user for a prticular destination token. If any of the attributes already have a stored value, it will be returned as well.
         * @summary Get user attributes for destination_token
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to retrieve attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttrs(currency: string, userToken: string, destinationToken: string, idempotencyKey?: string, options?: any): AxiosPromise<Array<AttrsRequirement>> {
            return localVarFp.getAttrs(currency, userToken, destinationToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * If existing attributes are already stored, this call will override its values.
         * @summary Store user attributes
         * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
         * @param {string} userToken Token representing the user to store attributes for
         * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback. 
         * @param {AttrTxn} attrTxn Attr parameters to store
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        storeAttrs(currency: string, userToken: string, destinationToken: string, attrTxn: AttrTxn, idempotencyKey?: string, options?: any): AxiosPromise<void> {
            return localVarFp.storeAttrs(currency, userToken, destinationToken, attrTxn, idempotencyKey, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AttributeApi - object-oriented interface
 * @export
 * @class AttributeApi
 * @extends {BaseAPI}
 */
export class AttributeApi extends BaseAPI {
    /**
     * Identify users with matching attribute values
     * @summary Attributes velocity check
     * @param {string} userToken Token representing the user to retrieve attributes for
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {Array<AttrVelocityRequestInner>} [attrVelocityRequestInner] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributeApi
     */
    public findAttributesVelocity(userToken: string, idempotencyKey?: string, attrVelocityRequestInner?: Array<AttrVelocityRequestInner>, options?: AxiosRequestConfig) {
        return AttributeApiFp(this.configuration).findAttributesVelocity(userToken, idempotencyKey, attrVelocityRequestInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all the required attributes for the provided user for a prticular destination token. If any of the attributes already have a stored value, it will be returned as well.
     * @summary Get user attributes for destination_token
     * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
     * @param {string} userToken Token representing the user to retrieve attributes for
     * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback.
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributeApi
     */
    public getAttrs(currency: string, userToken: string, destinationToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return AttributeApiFp(this.configuration).getAttrs(currency, userToken, destinationToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * If existing attributes are already stored, this call will override its values.
     * @summary Store user attributes
     * @param {string} currency The destination currency sending funds to. Using [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format. 
     * @param {string} userToken Token representing the user to store attributes for
     * @param {string} destinationToken Token that represents the payout destination i.e. Omnex-&gt;Brazil-&gt;Bank Deposit-&gt;Itau. To be retrieved from the #pricing callback. 
     * @param {AttrTxn} attrTxn Attr parameters to store
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttributeApi
     */
    public storeAttrs(currency: string, userToken: string, destinationToken: string, attrTxn: AttrTxn, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return AttributeApiFp(this.configuration).storeAttrs(currency, userToken, destinationToken, attrTxn, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }
}
