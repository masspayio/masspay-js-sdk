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
import { CompaniesResp } from '../models';
// @ts-ignore
import { Country } from '../models';
// @ts-ignore
import { GetUserAgreement200Response } from '../models';
// @ts-ignore
import { GetUserAgreementsNames200ResponseInner } from '../models';
// @ts-ignore
import { Service } from '../models';
/**
 * CatalogApi - axios parameter creator
 * @export
 */
export const CatalogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This **GET** endpoint is used to retrieve a list of companies and their cheapest service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. If two providers offer similar services, only the cheapest option will be displayed. <br> To use this endpoint, you need to provide the `country_code` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, cheapest service offerings, and pricing.
         * @summary Gets a list of Companies and their cheapest service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user.
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCheapestCountryServices: async (countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countryCode' is not null or undefined
            assertParamExists('getCheapestCountryServices', 'countryCode', countryCode)
            const localVarPath = `/country/{country_code}/cheapest`
                .replace(`{${"country_code"}}`, encodeURIComponent(String(countryCode)));
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

            if (amount !== undefined) {
                localVarQueryParameter['amount'] = amount;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (walletToken !== undefined) {
                localVarQueryParameter['wallet_token'] = walletToken;
            }

            if (includePayerLogos !== undefined) {
                localVarQueryParameter['include_payer_logos'] = includePayerLogos;
            }

            if (userToken !== undefined) {
                localVarQueryParameter['user_token'] = userToken;
            }

            if (sourceCurrency !== undefined) {
                localVarQueryParameter['source_currency'] = sourceCurrency;
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
         * This **GET** endpoint is used to retrieve a list of all currently available countries of service. <br> You can use this endpoint to obtain a list of countries where MassPay services are offered. <br> There are no required parameters for this endpoint. <br> The response will include a JSON array containing details for each country, including the country code, name, and `three_letter_code`.
         * @summary Gets a list of countries where services offered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryList: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/country/list`;
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
         * This **GET** endpoint is used to retrieve a list of companies and their service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. <br> To use this endpoint, you need to provide the `country_code` in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, service offerings, and pricing.
         * @summary Gets a list of Companies and their service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user. Not necessary if user_token is provided
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryServices: async (countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countryCode' is not null or undefined
            assertParamExists('getCountryServices', 'countryCode', countryCode)
            const localVarPath = `/country/{country_code}`
                .replace(`{${"country_code"}}`, encodeURIComponent(String(countryCode)));
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

            if (amount !== undefined) {
                localVarQueryParameter['amount'] = amount;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (walletToken !== undefined) {
                localVarQueryParameter['wallet_token'] = walletToken;
            }

            if (includePayerLogos !== undefined) {
                localVarQueryParameter['include_payer_logos'] = includePayerLogos;
            }

            if (userToken !== undefined) {
                localVarQueryParameter['user_token'] = userToken;
            }

            if (sourceCurrency !== undefined) {
                localVarQueryParameter['source_currency'] = sourceCurrency;
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
         * This **GET** endpoint is used to retrieve a list of alternative services to a provided service. <br> You can use this endpoint to obtain information about other available services and pricing offered by different companies for a particular destination. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, available alternative services, and pricing.
         * @summary Returns list of alternative service to a provided service
         * @param {string} destinationToken Destination token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestinationTokenAlternatives: async (destinationToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'destinationToken' is not null or undefined
            assertParamExists('getDestinationTokenAlternatives', 'destinationToken', destinationToken)
            const localVarPath = `/service/{destination_token}/alternatives`
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
         * This **GET** endpoint is used to retrieve the user agreement for payout services. <br> You can use this endpoint to obtain information about the available user agreements for payout services offered by MassPay. <br> To use this endpoint, you need to provide the `ID` representing the user agreement as a required parameter in the URL Path. <br> The response will include the user agreement details.
         * @summary Get User Agreement
         * @param {number} id Id representing user agreement (retrieved from OPTIONS call)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAgreement: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUserAgreement', 'id', id)
            const localVarPath = `/user-agreements`;
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

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * This OPTIONS endpoint is used to retrieve a list of available user agreements for payout services offered by MassPay without the content. <br> You can use this endpoint to obtain the names of available user agreements. <br> There are no required parameters needed to use this endpoint. <br> The response will include a list of user agreement names
         * @summary Get Available User Agreements
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAgreementsNames: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user-agreements`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
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
    }
};

/**
 * CatalogApi - functional programming interface
 * @export
 */
export const CatalogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CatalogApiAxiosParamCreator(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve a list of companies and their cheapest service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. If two providers offer similar services, only the cheapest option will be displayed. <br> To use this endpoint, you need to provide the `country_code` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, cheapest service offerings, and pricing.
         * @summary Gets a list of Companies and their cheapest service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user.
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCheapestCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompaniesResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCheapestCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **GET** endpoint is used to retrieve a list of all currently available countries of service. <br> You can use this endpoint to obtain a list of countries where MassPay services are offered. <br> There are no required parameters for this endpoint. <br> The response will include a JSON array containing details for each country, including the country code, name, and `three_letter_code`.
         * @summary Gets a list of countries where services offered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCountryList(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Country>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCountryList(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **GET** endpoint is used to retrieve a list of companies and their service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. <br> To use this endpoint, you need to provide the `country_code` in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, service offerings, and pricing.
         * @summary Gets a list of Companies and their service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user. Not necessary if user_token is provided
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompaniesResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **GET** endpoint is used to retrieve a list of alternative services to a provided service. <br> You can use this endpoint to obtain information about other available services and pricing offered by different companies for a particular destination. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, available alternative services, and pricing.
         * @summary Returns list of alternative service to a provided service
         * @param {string} destinationToken Destination token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDestinationTokenAlternatives(destinationToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Service>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDestinationTokenAlternatives(destinationToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **GET** endpoint is used to retrieve the user agreement for payout services. <br> You can use this endpoint to obtain information about the available user agreements for payout services offered by MassPay. <br> To use this endpoint, you need to provide the `ID` representing the user agreement as a required parameter in the URL Path. <br> The response will include the user agreement details.
         * @summary Get User Agreement
         * @param {number} id Id representing user agreement (retrieved from OPTIONS call)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserAgreement(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserAgreement200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAgreement(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This OPTIONS endpoint is used to retrieve a list of available user agreements for payout services offered by MassPay without the content. <br> You can use this endpoint to obtain the names of available user agreements. <br> There are no required parameters needed to use this endpoint. <br> The response will include a list of user agreement names
         * @summary Get Available User Agreements
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserAgreementsNames(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetUserAgreementsNames200ResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserAgreementsNames(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CatalogApi - factory interface
 * @export
 */
export const CatalogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CatalogApiFp(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve a list of companies and their cheapest service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. If two providers offer similar services, only the cheapest option will be displayed. <br> To use this endpoint, you need to provide the `country_code` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, cheapest service offerings, and pricing.
         * @summary Gets a list of Companies and their cheapest service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user.
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCheapestCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: any): AxiosPromise<CompaniesResp> {
            return localVarFp.getCheapestCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to retrieve a list of all currently available countries of service. <br> You can use this endpoint to obtain a list of countries where MassPay services are offered. <br> There are no required parameters for this endpoint. <br> The response will include a JSON array containing details for each country, including the country code, name, and `three_letter_code`.
         * @summary Gets a list of countries where services offered.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryList(options?: any): AxiosPromise<Array<Country>> {
            return localVarFp.getCountryList(options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to retrieve a list of companies and their service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. <br> To use this endpoint, you need to provide the `country_code` in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, service offerings, and pricing.
         * @summary Gets a list of Companies and their service offerings for the given country code.
         * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
         * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user. Not necessary if user_token is provided
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
         * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: any): AxiosPromise<CompaniesResp> {
            return localVarFp.getCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to retrieve a list of alternative services to a provided service. <br> You can use this endpoint to obtain information about other available services and pricing offered by different companies for a particular destination. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, available alternative services, and pricing.
         * @summary Returns list of alternative service to a provided service
         * @param {string} destinationToken Destination token
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDestinationTokenAlternatives(destinationToken: string, idempotencyKey?: string, options?: any): AxiosPromise<Service> {
            return localVarFp.getDestinationTokenAlternatives(destinationToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * This **GET** endpoint is used to retrieve the user agreement for payout services. <br> You can use this endpoint to obtain information about the available user agreements for payout services offered by MassPay. <br> To use this endpoint, you need to provide the `ID` representing the user agreement as a required parameter in the URL Path. <br> The response will include the user agreement details.
         * @summary Get User Agreement
         * @param {number} id Id representing user agreement (retrieved from OPTIONS call)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAgreement(id: number, options?: any): AxiosPromise<GetUserAgreement200Response> {
            return localVarFp.getUserAgreement(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This OPTIONS endpoint is used to retrieve a list of available user agreements for payout services offered by MassPay without the content. <br> You can use this endpoint to obtain the names of available user agreements. <br> There are no required parameters needed to use this endpoint. <br> The response will include a list of user agreement names
         * @summary Get Available User Agreements
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserAgreementsNames(options?: any): AxiosPromise<Array<GetUserAgreementsNames200ResponseInner>> {
            return localVarFp.getUserAgreementsNames(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CatalogApi - object-oriented interface
 * @export
 * @class CatalogApi
 * @extends {BaseAPI}
 */
export class CatalogApi extends BaseAPI {
    /**
     * This **GET** endpoint is used to retrieve a list of companies and their cheapest service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. If two providers offer similar services, only the cheapest option will be displayed. <br> To use this endpoint, you need to provide the `country_code` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, cheapest service offerings, and pricing.
     * @summary Gets a list of Companies and their cheapest service offerings for the given country code.
     * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
     * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
     * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user.
     * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
     * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
     * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCheapestCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getCheapestCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve a list of all currently available countries of service. <br> You can use this endpoint to obtain a list of countries where MassPay services are offered. <br> There are no required parameters for this endpoint. <br> The response will include a JSON array containing details for each country, including the country code, name, and `three_letter_code`.
     * @summary Gets a list of countries where services offered.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCountryList(options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getCountryList(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve a list of companies and their service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. <br> To use this endpoint, you need to provide the `country_code` in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, service offerings, and pricing.
     * @summary Gets a list of Companies and their service offerings for the given country code.
     * @param {string} countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code\&quot;
     * @param {string} [amount] Returns the results fee based on the given amount, defaults to $200
     * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {string} [walletToken] Token representing the wallet used. If provided, the results would be custom-tailored to this user. Not necessary if user_token is provided
     * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
     * @param {string} [userToken] Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
     * @param {string} [sourceCurrency] Required if amount is provided. The currency associated with the amount
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getCountryServices(countryCode: string, amount?: string, limit?: number, idempotencyKey?: string, walletToken?: string, includePayerLogos?: boolean, userToken?: string, sourceCurrency?: string, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getCountryServices(countryCode, amount, limit, idempotencyKey, walletToken, includePayerLogos, userToken, sourceCurrency, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve a list of alternative services to a provided service. <br> You can use this endpoint to obtain information about other available services and pricing offered by different companies for a particular destination. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, available alternative services, and pricing.
     * @summary Returns list of alternative service to a provided service
     * @param {string} destinationToken Destination token
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getDestinationTokenAlternatives(destinationToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getDestinationTokenAlternatives(destinationToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **GET** endpoint is used to retrieve the user agreement for payout services. <br> You can use this endpoint to obtain information about the available user agreements for payout services offered by MassPay. <br> To use this endpoint, you need to provide the `ID` representing the user agreement as a required parameter in the URL Path. <br> The response will include the user agreement details.
     * @summary Get User Agreement
     * @param {number} id Id representing user agreement (retrieved from OPTIONS call)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getUserAgreement(id: number, options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getUserAgreement(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This OPTIONS endpoint is used to retrieve a list of available user agreements for payout services offered by MassPay without the content. <br> You can use this endpoint to obtain the names of available user agreements. <br> There are no required parameters needed to use this endpoint. <br> The response will include a list of user agreement names
     * @summary Get Available User Agreements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CatalogApi
     */
    public getUserAgreementsNames(options?: AxiosRequestConfig) {
        return CatalogApiFp(this.configuration).getUserAgreementsNames(options).then((request) => request(this.axios, this.basePath));
    }
}
