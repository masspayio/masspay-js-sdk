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
import { DistributorsBalances200ResponseInner } from '../models';
// @ts-ignore
import { Exception } from '../models';
// @ts-ignore
import { GenerateInvoice200Response } from '../models';
// @ts-ignore
import { GeneratePricingListRequest } from '../models';
// @ts-ignore
import { PayoutTxn } from '../models';
// @ts-ignore
import { PayoutTxnCommitResp } from '../models';
// @ts-ignore
import { PayoutTxnResp } from '../models';
// @ts-ignore
import { PostAccountApiKey200Response } from '../models';
// @ts-ignore
import { PostAccountApiKeyRequest } from '../models';
// @ts-ignore
import { StoredUser } from '../models';
// @ts-ignore
import { UpdateUser } from '../models';
// @ts-ignore
import { UploadBatchRequest } from '../models';
/**
 * InternalApi - axios parameter creator
 * @export
 */
export const InternalApiAxiosParamCreator = function (configuration?: Configuration) {
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
        commitPayoutTxnInternal: async (userToken: string, payoutToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('commitPayoutTxnInternal', 'userToken', userToken)
            // verify required parameter 'payoutToken' is not null or undefined
            assertParamExists('commitPayoutTxnInternal', 'payoutToken', payoutToken)
            const localVarPath = `/payout/{user_token}/{payout_token}/internal`
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
         * 
         * @summary Decrypt Statement JWT
         * @param {string} token JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        decryptStatementJWT: async (token: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('decryptStatementJWT', 'token', token)
            const localVarPath = `/decrypt-statement-JWT`;
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
         * 
         * @summary Retrieve available balances at distributors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        distributorsBalances: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/distributors/balances`;
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
         * Generate an invoice for the transaction
         * @summary Generate Invoice
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateInvoice: async (userToken: string, payoutToken: string, idempotencyKey?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('generateInvoice', 'userToken', userToken)
            // verify required parameter 'payoutToken' is not null or undefined
            assertParamExists('generateInvoice', 'payoutToken', payoutToken)
            const localVarPath = `/payout/{user_token}/{payout_token}`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"payout_token"}}`, encodeURIComponent(String(payoutToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'OPTIONS', ...baseOptions, ...options};
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
         * Generates a pricing list for the provided countries and email it to the requesting employee
         * @summary Generate pricing list
         * @param {GeneratePricingListRequest} [generatePricingListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePricingList: async (generatePricingListRequest?: GeneratePricingListRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/generate_pricing_list`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(generatePricingListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallbackCompanyId: async (companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCallbackCompanyId', 'companyId', companyId)
            const localVarPath = `/callback/{company_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Development
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevelopmentTest: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/development/test`;
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
         * Initiates a payout transaction to a provided user token.
         * @summary Initiate a payout transaction
         * @param {string} userToken Token representing the user to pay out
         * @param {PayoutTxn} payoutTxn Payout parameters for a quote
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {number} [limit] Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        initiatePayoutInternal: async (userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('initiatePayoutInternal', 'userToken', userToken)
            // verify required parameter 'payoutTxn' is not null or undefined
            assertParamExists('initiatePayoutInternal', 'payoutTxn', payoutTxn)
            const localVarPath = `/payout/{user_token}/internal`
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
        /**
         * Generate API access key
         * @summary Generate API Key
         * @param {PostAccountApiKeyRequest} [postAccountApiKeyRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAccountApiKey: async (postAccountApiKeyRequest?: PostAccountApiKeyRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/account/api-key`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postAccountApiKeyRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCallbackCompanyId: async (companyId: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('postCallbackCompanyId', 'companyId', companyId)
            const localVarPath = `/callback/{company_id}`
                .replace(`{${"company_id"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Internal user update
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [isComplianceUpdate] Whether this update was completed by compliance team
         * @param {string} [employeeUsername] Hashed username of the employee making the update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInternal: async (userToken: string, updateUser: UpdateUser, idempotencyKey?: string, isComplianceUpdate?: boolean, employeeUsername?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('updateUserInternal', 'userToken', userToken)
            // verify required parameter 'updateUser' is not null or undefined
            assertParamExists('updateUserInternal', 'updateUser', updateUser)
            const localVarPath = `/user/{user_token}/internal`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)));
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

            if (isComplianceUpdate !== undefined) {
                localVarQueryParameter['is_compliance_update'] = isComplianceUpdate;
            }

            if (employeeUsername !== undefined) {
                localVarQueryParameter['employee_username'] = employeeUsername;
            }

            if (idempotencyKey != null) {
                localVarHeaderParameter['Idempotency-Key'] = String(idempotencyKey);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Uploads an XLSX file with batch instructions
         * @summary Upload a batch
         * @param {UploadBatchRequest} [uploadBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadBatch: async (uploadBatchRequest?: UploadBatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/batch`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(uploadBatchRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InternalApi - functional programming interface
 * @export
 */
export const InternalApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InternalApiAxiosParamCreator(configuration)
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
        async commitPayoutTxnInternal(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayoutTxnCommitResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.commitPayoutTxnInternal(userToken, payoutToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Decrypt Statement JWT
         * @param {string} token JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async decryptStatementJWT(token: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: string; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.decryptStatementJWT(token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve available balances at distributors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async distributorsBalances(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DistributorsBalances200ResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.distributorsBalances(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generate an invoice for the transaction
         * @summary Generate Invoice
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateInvoice(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GenerateInvoice200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateInvoice(userToken, payoutToken, idempotencyKey, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generates a pricing list for the provided countries and email it to the requesting employee
         * @summary Generate pricing list
         * @param {GeneratePricingListRequest} [generatePricingListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generatePricingList(generatePricingListRequest?: GeneratePricingListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generatePricingList(generatePricingListRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCallbackCompanyId(companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCallbackCompanyId(companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Development
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDevelopmentTest(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDevelopmentTest(options);
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
        async initiatePayoutInternal(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayoutTxnResp>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.initiatePayoutInternal(userToken, payoutTxn, idempotencyKey, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Generate API access key
         * @summary Generate API Key
         * @param {PostAccountApiKeyRequest} [postAccountApiKeyRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAccountApiKey(postAccountApiKeyRequest?: PostAccountApiKeyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostAccountApiKey200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postAccountApiKey(postAccountApiKeyRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCallbackCompanyId(companyId: string, body?: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCallbackCompanyId(companyId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Internal user update
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [isComplianceUpdate] Whether this update was completed by compliance team
         * @param {string} [employeeUsername] Hashed username of the employee making the update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserInternal(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, isComplianceUpdate?: boolean, employeeUsername?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StoredUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserInternal(userToken, updateUser, idempotencyKey, isComplianceUpdate, employeeUsername, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads an XLSX file with batch instructions
         * @summary Upload a batch
         * @param {UploadBatchRequest} [uploadBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadBatch(uploadBatchRequest?: UploadBatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadBatch(uploadBatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InternalApi - factory interface
 * @export
 */
export const InternalApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InternalApiFp(configuration)
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
        commitPayoutTxnInternal(userToken: string, payoutToken: string, idempotencyKey?: string, options?: any): AxiosPromise<PayoutTxnCommitResp> {
            return localVarFp.commitPayoutTxnInternal(userToken, payoutToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Decrypt Statement JWT
         * @param {string} token JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        decryptStatementJWT(token: string, options?: any): AxiosPromise<{ [key: string]: string; }> {
            return localVarFp.decryptStatementJWT(token, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve available balances at distributors
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        distributorsBalances(options?: any): AxiosPromise<Array<DistributorsBalances200ResponseInner>> {
            return localVarFp.distributorsBalances(options).then((request) => request(axios, basePath));
        },
        /**
         * Generate an invoice for the transaction
         * @summary Generate Invoice
         * @param {string} userToken Token representing the user to pay out
         * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateInvoice(userToken: string, payoutToken: string, idempotencyKey?: string, options?: any): AxiosPromise<GenerateInvoice200Response> {
            return localVarFp.generateInvoice(userToken, payoutToken, idempotencyKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a pricing list for the provided countries and email it to the requesting employee
         * @summary Generate pricing list
         * @param {GeneratePricingListRequest} [generatePricingListRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generatePricingList(generatePricingListRequest?: GeneratePricingListRequest, options?: any): AxiosPromise<void> {
            return localVarFp.generatePricingList(generatePricingListRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallbackCompanyId(companyId: string, options?: any): AxiosPromise<void> {
            return localVarFp.getCallbackCompanyId(companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Development
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDevelopmentTest(options?: any): AxiosPromise<void> {
            return localVarFp.getDevelopmentTest(options).then((request) => request(axios, basePath));
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
        initiatePayoutInternal(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: any): AxiosPromise<PayoutTxnResp> {
            return localVarFp.initiatePayoutInternal(userToken, payoutTxn, idempotencyKey, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate API access key
         * @summary Generate API Key
         * @param {PostAccountApiKeyRequest} [postAccountApiKeyRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAccountApiKey(postAccountApiKeyRequest?: PostAccountApiKeyRequest, options?: any): AxiosPromise<PostAccountApiKey200Response> {
            return localVarFp.postAccountApiKey(postAccountApiKeyRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Transaction Status Callback
         * @param {string} companyId 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCallbackCompanyId(companyId: string, body?: object, options?: any): AxiosPromise<void> {
            return localVarFp.postCallbackCompanyId(companyId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates profile information for a provided user token.
         * @summary Internal user update
         * @param {string} userToken user token that need to be updated
         * @param {UpdateUser} updateUser Updated user object
         * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
         * @param {boolean} [isComplianceUpdate] Whether this update was completed by compliance team
         * @param {string} [employeeUsername] Hashed username of the employee making the update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserInternal(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, isComplianceUpdate?: boolean, employeeUsername?: string, options?: any): AxiosPromise<StoredUser> {
            return localVarFp.updateUserInternal(userToken, updateUser, idempotencyKey, isComplianceUpdate, employeeUsername, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads an XLSX file with batch instructions
         * @summary Upload a batch
         * @param {UploadBatchRequest} [uploadBatchRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadBatch(uploadBatchRequest?: UploadBatchRequest, options?: any): AxiosPromise<void> {
            return localVarFp.uploadBatch(uploadBatchRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InternalApi - object-oriented interface
 * @export
 * @class InternalApi
 * @extends {BaseAPI}
 */
export class InternalApi extends BaseAPI {
    /**
     * Commits a previously initiated transaction.
     * @summary Commit payout transaction
     * @param {string} userToken Token representing the user to pay out
     * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public commitPayoutTxnInternal(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).commitPayoutTxnInternal(userToken, payoutToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Decrypt Statement JWT
     * @param {string} token JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public decryptStatementJWT(token: string, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).decryptStatementJWT(token, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve available balances at distributors
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public distributorsBalances(options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).distributorsBalances(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generate an invoice for the transaction
     * @summary Generate Invoice
     * @param {string} userToken Token representing the user to pay out
     * @param {string} payoutToken Token representing the trsanaction. Retrieved from &#x60;/payout/{user_token}&#x60;
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public generateInvoice(userToken: string, payoutToken: string, idempotencyKey?: string, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).generateInvoice(userToken, payoutToken, idempotencyKey, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generates a pricing list for the provided countries and email it to the requesting employee
     * @summary Generate pricing list
     * @param {GeneratePricingListRequest} [generatePricingListRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public generatePricingList(generatePricingListRequest?: GeneratePricingListRequest, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).generatePricingList(generatePricingListRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Transaction Status Callback
     * @param {string} companyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public getCallbackCompanyId(companyId: string, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).getCallbackCompanyId(companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Development
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public getDevelopmentTest(options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).getDevelopmentTest(options).then((request) => request(this.axios, this.basePath));
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
     * @memberof InternalApi
     */
    public initiatePayoutInternal(userToken: string, payoutTxn: PayoutTxn, idempotencyKey?: string, limit?: number, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).initiatePayoutInternal(userToken, payoutTxn, idempotencyKey, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Generate API access key
     * @summary Generate API Key
     * @param {PostAccountApiKeyRequest} [postAccountApiKeyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public postAccountApiKey(postAccountApiKeyRequest?: PostAccountApiKeyRequest, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).postAccountApiKey(postAccountApiKeyRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Transaction Status Callback
     * @param {string} companyId 
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public postCallbackCompanyId(companyId: string, body?: object, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).postCallbackCompanyId(companyId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates profile information for a provided user token.
     * @summary Internal user update
     * @param {string} userToken user token that need to be updated
     * @param {UpdateUser} updateUser Updated user object
     * @param {string} [idempotencyKey] Unique key to prevent duplicate processing
     * @param {boolean} [isComplianceUpdate] Whether this update was completed by compliance team
     * @param {string} [employeeUsername] Hashed username of the employee making the update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public updateUserInternal(userToken: string, updateUser: UpdateUser, idempotencyKey?: string, isComplianceUpdate?: boolean, employeeUsername?: string, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).updateUserInternal(userToken, updateUser, idempotencyKey, isComplianceUpdate, employeeUsername, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads an XLSX file with batch instructions
     * @summary Upload a batch
     * @param {UploadBatchRequest} [uploadBatchRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    public uploadBatch(uploadBatchRequest?: UploadBatchRequest, options?: AxiosRequestConfig) {
        return InternalApiFp(this.configuration).uploadBatch(uploadBatchRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
