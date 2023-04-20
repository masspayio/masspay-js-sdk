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
import { GetWalletCardInfo200Response } from '../models';
/**
 * CardApi - axios parameter creator
 * @export
 */
export const CardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletCardInfo: async (userToken: string, walletToken: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('getWalletCardInfo', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('getWalletCardInfo', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/card`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
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
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWalletCardInfo: async (userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userToken' is not null or undefined
            assertParamExists('updateWalletCardInfo', 'userToken', userToken)
            // verify required parameter 'walletToken' is not null or undefined
            assertParamExists('updateWalletCardInfo', 'walletToken', walletToken)
            const localVarPath = `/wallet/{user_token}/{wallet_token}/card`
                .replace(`{${"user_token"}}`, encodeURIComponent(String(userToken)))
                .replace(`{${"wallet_token"}}`, encodeURIComponent(String(walletToken)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AUTHORIZER_NAME required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (pin !== undefined) {
                localVarQueryParameter['pin'] = pin;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
 * CardApi - functional programming interface
 * @export
 */
export const CardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardApiAxiosParamCreator(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletCardInfo(userToken: string, walletToken: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWalletCardInfo200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletCardInfo(userToken, walletToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWalletCardInfo(userToken, walletToken, pin, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardApi - factory interface
 * @export
 */
export const CardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardApiFp(configuration)
    return {
        /**
         * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
         * @summary Get MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletCardInfo(userToken: string, walletToken: string, options?: any): AxiosPromise<GetWalletCardInfo200Response> {
            return localVarFp.getWalletCardInfo(userToken, walletToken, options).then((request) => request(axios, basePath));
        },
        /**
         * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
         * @summary Update MassPay Card Information
         * @param {string} userToken Token representing the user who owns the wallet
         * @param {string} walletToken Token representing the wallet
         * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
         * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: any): AxiosPromise<void> {
            return localVarFp.updateWalletCardInfo(userToken, walletToken, pin, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CardApi - object-oriented interface
 * @export
 * @class CardApi
 * @extends {BaseAPI}
 */
export class CardApi extends BaseAPI {
    /**
     * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status.
     * @summary Get MassPay Card Information
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardApi
     */
    public getWalletCardInfo(userToken: string, walletToken: string, options?: AxiosRequestConfig) {
        return CardApiFp(this.configuration).getWalletCardInfo(userToken, walletToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
     * @summary Update MassPay Card Information
     * @param {string} userToken Token representing the user who owns the wallet
     * @param {string} walletToken Token representing the wallet
     * @param {string} [pin] New 4 digit pin number for the card (To be used in ATM machines)
     * @param {'SUSPEND' | 'UNSUSPEND' | 'CLOSE'} [status] New status for the card
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardApi
     */
    public updateWalletCardInfo(userToken: string, walletToken: string, pin?: string, status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE', options?: AxiosRequestConfig) {
        return CardApiFp(this.configuration).updateWalletCardInfo(userToken, walletToken, pin, status, options).then((request) => request(this.axios, this.basePath));
    }
}
