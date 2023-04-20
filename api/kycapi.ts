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
import { GetUserUserTokenKycVeriff200Response } from '../models';
// @ts-ignore
import { IDUpload } from '../models';
/**
 * KYCApi - axios parameter creator
 * @export
 */
export const KYCApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This **POST** endpoint is used to perform an attributes velocity check to identify users with matching attribute values. <br> You can use this endpoint to help prevent fraudulent activities by monitoring for unusual attribute value changes over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL path and the required parameters in the request Body. <br> The endpoint will then compare the provided attribute value with the historical attribute values for the same user and determine if it meets the velocity check criteria.
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

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

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
         * This **GET** endpoint is used to obtain a link to an Au10tix session for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Au10tix platform. <br> The response will contain the session link as a URL in a JSON format.
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
         * This **GET** endpoint is used to obtain a link to a Veriff session for the user with the provided user token. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Veriff platform. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain the session link as a URL in a JSON format.
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycVeriff: async (userToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserUserTokenKycVeriff', 'userToken', userToken)
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
         * Upload IDs for the provided user. This is an optional endpoint if the images are captured through means other than the link that is generated in the attributes.
         * @summary Upload ID Photos
         * @param {string} userToken 
         * @param {Array<IDUpload>} [iDUpload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadIdPhotos: async (userToken: string, iDUpload?: Array<IDUpload>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('uploadIdPhotos', 'userToken', userToken)
            const localVarPath = `/user/{user_token}/kyc/id`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(iDUpload, localVarRequestOptions, configuration)

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
         * This **POST** endpoint is used to perform an attributes velocity check to identify users with matching attribute values. <br> You can use this endpoint to help prevent fraudulent activities by monitoring for unusual attribute value changes over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL path and the required parameters in the request Body. <br> The endpoint will then compare the provided attribute value with the historical attribute values for the same user and determine if it meets the velocity check criteria.
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
         * This **GET** endpoint is used to obtain a link to an Au10tix session for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Au10tix platform. <br> The response will contain the session link as a URL in a JSON format.
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
         * This **GET** endpoint is used to obtain a link to a Veriff session for the user with the provided user token. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Veriff platform. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain the session link as a URL in a JSON format.
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserUserTokenKycVeriff(userToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserUserTokenKycVeriff200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserUserTokenKycVeriff(userToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Upload IDs for the provided user. This is an optional endpoint if the images are captured through means other than the link that is generated in the attributes.
         * @summary Upload ID Photos
         * @param {string} userToken 
         * @param {Array<IDUpload>} [iDUpload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadIdPhotos(userToken: string, iDUpload?: Array<IDUpload>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadIdPhotos(userToken, iDUpload, options);
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
         * This **POST** endpoint is used to perform an attributes velocity check to identify users with matching attribute values. <br> You can use this endpoint to help prevent fraudulent activities by monitoring for unusual attribute value changes over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL path and the required parameters in the request Body. <br> The endpoint will then compare the provided attribute value with the historical attribute values for the same user and determine if it meets the velocity check criteria.
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
         * This **GET** endpoint is used to obtain a link to an Au10tix session for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Au10tix platform. <br> The response will contain the session link as a URL in a JSON format.
         * @summary Get an Au10tix session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycAu10tix(userToken: string, options?: any): AxiosPromise<GetUserUserTokenKycAu10tix200Response> {
            return localVarFp.getUserUserTokenKycAu10tix(userToken, options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to obtain a link to a Veriff session for the user with the provided user token. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Veriff platform. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain the session link as a URL in a JSON format.
         * @summary Get a Veriff session link
         * @param {string} userToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserUserTokenKycVeriff(userToken: string, options?: any): AxiosPromise<GetUserUserTokenKycVeriff200Response> {
            return localVarFp.getUserUserTokenKycVeriff(userToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload IDs for the provided user. This is an optional endpoint if the images are captured through means other than the link that is generated in the attributes.
         * @summary Upload ID Photos
         * @param {string} userToken 
         * @param {Array<IDUpload>} [iDUpload] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadIdPhotos(userToken: string, iDUpload?: Array<IDUpload>, options?: any): AxiosPromise<object> {
            return localVarFp.uploadIdPhotos(userToken, iDUpload, options).then((request) => request(axios, basePath));
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
     * This **POST** endpoint is used to perform an attributes velocity check to identify users with matching attribute values. <br> You can use this endpoint to help prevent fraudulent activities by monitoring for unusual attribute value changes over time. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL path and the required parameters in the request Body. <br> The endpoint will then compare the provided attribute value with the historical attribute values for the same user and determine if it meets the velocity check criteria.
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
     * This **GET** endpoint is used to obtain a link to an Au10tix session for the user with the provided user token. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Au10tix platform. <br> The response will contain the session link as a URL in a JSON format.
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
     * This **GET** endpoint is used to obtain a link to a Veriff session for the user with the provided user token. <br> The endpoint will then generate a session link that you can use to initiate an identity verification process for the user through the Veriff platform. <br> To use this endpoint, you need to provide the `user_token` as a parameter in the URL Path. <br> The response will contain the session link as a URL in a JSON format.
     * @summary Get a Veriff session link
     * @param {string} userToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KYCApi
     */
    public getUserUserTokenKycVeriff(userToken: string, options?: AxiosRequestConfig) {
        return KYCApiFp(this.configuration).getUserUserTokenKycVeriff(userToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload IDs for the provided user. This is an optional endpoint if the images are captured through means other than the link that is generated in the attributes.
     * @summary Upload ID Photos
     * @param {string} userToken 
     * @param {Array<IDUpload>} [iDUpload] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KYCApi
     */
    public uploadIdPhotos(userToken: string, iDUpload?: Array<IDUpload>, options?: AxiosRequestConfig) {
        return KYCApiFp(this.configuration).uploadIdPhotos(userToken, iDUpload, options).then((request) => request(this.axios, this.basePath));
    }
}
