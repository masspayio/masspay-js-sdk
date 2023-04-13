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
import { Exception } from '../models';
// @ts-ignore
import { GetTransactionConfirmationDetails200Response } from '../models';
// @ts-ignore
import { PayoutTxn } from '../models';
// @ts-ignore
import { PayoutTxnCommitResp } from '../models';
// @ts-ignore
import { PayoutTxnResp } from '../models';
/**
 * PayoutApi - axios parameter creator
 * @export
 */
export const PayoutApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Commits a previously initiated transaction.
         * @summary Commit payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commitPayoutTxn: async (userToken: string, payoutToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('commitPayoutTxn', 'userToken', userToken)
            // verify required parameter 'payoutToken' is not null or undefined
            assertParamExists('commitPayoutTxn', 'payoutToken', payoutToken)
            const localVarPath = `/payout/{user_token}/{payout_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"payout_token"}}`, encodeURIComponent(String(payoutToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
         * Retrieves information including status update for a payout token
         * @summary Get status of a payout by payout token
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [forceStatusUpdate] Attempts to get an updated status update from the payout destination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayoutStatus: async (userToken: string, payoutToken: string, idempotencyKey?: string, forceStatusUpdate?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getPayoutStatus', 'userToken', userToken)
            // verify required parameter 'payoutToken' is not null or undefined
            assertParamExists('getPayoutStatus', 'payoutToken', payoutToken)
            const localVarPath = `/payout/{user_token}/{payout_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"payout_token"}}`, encodeURIComponent(String(payoutToken)));
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

            if (forceStatusUpdate !== undefined) {
                localVarQueryParameter['force_status_update'] = forceStatusUpdate;
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
         * Obtains a PDF with all the details of the payout
         * @summary Get transaction confirmation details
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionConfirmationDetails: async (userToken: string, payoutToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getTransactionConfirmationDetails', 'userToken', userToken)
            // verify required parameter 'payoutToken' is not null or undefined
            assertParamExists('getTransactionConfirmationDetails', 'payoutToken', payoutToken)
            const localVarPath = `/payout/{user_token}/{payout_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"payout_token"}}`, encodeURIComponent(String(payoutToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
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
         * Gets a list of all historical payouts for a provided user token.
         * @summary Get history of payouts by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPayoutsByToken: async (userToken: string, idempotencyKey?: string, includePayerLogos?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getUserPayoutsByToken', 'userToken', userToken)
            const localVarPath = `/payout/{user_token}`
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

            if (includePayerLogos !== undefined) {
                localVarQueryParameter['include_payer_logos'] = includePayerLogos;
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
         * Initiates a payout transaction to a provided user token.
         * @summary Initiate a payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {PayoutTxn} payoutTxn Payout parameters for a quote
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiatePayout: async (userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('initiatePayout', 'userToken', userToken)
            // verify required parameter 'payoutTxn' is not null or undefined
            assertParamExists('initiatePayout', 'payoutTxn', payoutTxn)
            const localVarPath = `/payout/{user_token}`
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(payoutTxn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PayoutApi - functional programming interface
 * @export
 */
export const PayoutApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PayoutApiAxiosParamCreator(configuration)
    return {
        /**
         * Commits a previously initiated transaction.
         * @summary Commit payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async commitPayoutTxn(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayoutTxnCommitResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commitPayoutTxn(userToken, payoutToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves information including status update for a payout token
         * @summary Get status of a payout by payout token
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [forceStatusUpdate] Attempts to get an updated status update from the payout destination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPayoutStatus(userToken: string, payoutToken: string, idempotencyKey?: string, forceStatusUpdate?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayoutTxnResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPayoutStatus(userToken, payoutToken, idempotencyKey, forceStatusUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Obtains a PDF with all the details of the payout
         * @summary Get transaction confirmation details
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionConfirmationDetails(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionConfirmationDetails200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionConfirmationDetails(userToken, payoutToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets a list of all historical payouts for a provided user token.
         * @summary Get history of payouts by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserPayoutsByToken(userToken: string, idempotencyKey?: string, includePayerLogos?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PayoutTxnResp>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserPayoutsByToken(userToken, idempotencyKey, includePayerLogos, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Initiates a payout transaction to a provided user token.
         * @summary Initiate a payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {PayoutTxn} payoutTxn Payout parameters for a quote
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async initiatePayout(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayoutTxnResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiatePayout(userToken, payoutTxn, idempotencyKey, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PayoutApi - factory interface
 * @export
 */
export const PayoutApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PayoutApiFp(configuration)
    return {
        /**
         * Commits a previously initiated transaction.
         * @summary Commit payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commitPayoutTxn(userToken: string, payoutToken: string, idempotencyKey?: string, options?: any): AxiosPromise<PayoutTxnCommitResp> {
            return localVarFp.commitPayoutTxn(userToken, payoutToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves information including status update for a payout token
         * @summary Get status of a payout by payout token
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [forceStatusUpdate] Attempts to get an updated status update from the payout destination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPayoutStatus(userToken: string, payoutToken: string, idempotencyKey?: string, forceStatusUpdate?: boolean, options?: any): AxiosPromise<PayoutTxnResp> {
            return localVarFp.getPayoutStatus(userToken, payoutToken, idempotencyKey, forceStatusUpdate, options).then((request) => request(axios, basePath));
        },
        /**
         * Obtains a PDF with all the details of the payout
         * @summary Get transaction confirmation details
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionConfirmationDetails(userToken: string, payoutToken: string, idempotencyKey?: string, options?: any): AxiosPromise<GetTransactionConfirmationDetails200Response> {
            return localVarFp.getTransactionConfirmationDetails(userToken, payoutToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of all historical payouts for a provided user token.
         * @summary Get history of payouts by user token
         * @param {string} userToken The user token that needs to be fetched.
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserPayoutsByToken(userToken: string, idempotencyKey?: string, includePayerLogos?: boolean, options?: any): AxiosPromise<Array<PayoutTxnResp>> {
            return localVarFp.getUserPayoutsByToken(userToken, idempotencyKey, includePayerLogos, options).then((request) => request(axios, basePath));
        },
        /**
         * Initiates a payout transaction to a provided user token.
         * @summary Initiate a payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {PayoutTxn} payoutTxn Payout parameters for a quote
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiatePayout(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: any): AxiosPromise<PayoutTxnResp> {
            return localVarFp.initiatePayout(userToken, payoutTxn, idempotencyKey, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PayoutApi - object-oriented interface
 * @export
 * @class PayoutApi
 * @extends {BaseAPI}
 */
export class PayoutApi extends BaseAPI {
    /**
     * Commits a previously initiated transaction.
     * @summary Commit payout transaction
     * @param {string} userToken Token representing the user to pay out
     * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayoutApi
     */
    public commitPayoutTxn(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return PayoutApiFp(this.configuration).commitPayoutTxn(userToken, payoutToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves information including status update for a payout token
     * @summary Get status of a payout by payout token
     * @param {string} userToken Token representing the user to pay out
     * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {boolean} [forceStatusUpdate] Attempts to get an updated status update from the payout destination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayoutApi
     */
    public getPayoutStatus(userToken: string, payoutToken: string, idempotencyKey?: string, forceStatusUpdate?: boolean, options?: AxiosRequestConfig) {
        return PayoutApiFp(this.configuration).getPayoutStatus(userToken, payoutToken, idempotencyKey, forceStatusUpdate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Obtains a PDF with all the details of the payout
     * @summary Get transaction confirmation details
     * @param {string} userToken Token representing the user to pay out
     * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayoutApi
     */
    public getTransactionConfirmationDetails(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return PayoutApiFp(this.configuration).getTransactionConfirmationDetails(userToken, payoutToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets a list of all historical payouts for a provided user token.
     * @summary Get history of payouts by user token
     * @param {string} userToken The user token that needs to be fetched.
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {boolean} [includePayerLogos] Whether to include the payers logo in base64 format. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayoutApi
     */
    public getUserPayoutsByToken(userToken: string, idempotencyKey?: string, includePayerLogos?: boolean, options?: AxiosRequestConfig) {
        return PayoutApiFp(this.configuration).getUserPayoutsByToken(userToken, idempotencyKey, includePayerLogos, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Initiates a payout transaction to a provided user token.
     * @summary Initiate a payout transaction
     * @param {string} userToken Token representing the user to pay out
     * @param {PayoutTxn} payoutTxn Payout parameters for a quote
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayoutApi
     */
    public initiatePayout(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: AxiosRequestConfig) {
        return PayoutApiFp(this.configuration).initiatePayout(userToken, payoutTxn, idempotencyKey, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
