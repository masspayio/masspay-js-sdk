/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { CompaniesResp } from '../models/CompaniesResp';
import type { Country } from '../models/Country';
import type { Service } from '../models/Service';

export class CatalogService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Gets a list of countries where services offered.
   * This **GET** endpoint is used to retrieve a list of all currently available countries of service. <br> You can use this endpoint to obtain a list of countries where MassPay services are offered. <br> There are no required parameters for this endpoint. <br> The response will include a JSON array containing details for each country, including the country code, name, and `three_letter_code`.
   * @returns Country Successful operation.
   * @throws ApiError
   */
  public getCountryList(): CancelablePromise<Array<Country>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/country/list',
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Gets a list of Companies and their service offerings for the given country code.
   * This **GET** endpoint is used to retrieve a list of companies and their service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. <br> To use this endpoint, you need to provide the `country_code` in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, service offerings, and pricing.
   * @param countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code"
   * @param limit Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
   * @param walletToken Token representing the wallet used. If provided, the results would be custom-tailored to this user. Not necessary if user_token is provided
   * @param userToken Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
   * @param sourceCurrency Required if amount is provided. The currency associated with the amount
   * @param payerName Filter services that match payer name
   * @param destinationCurrency Filter services that support the destination currency
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param amount Returns the results fee based on the given amount, defaults to $200
   * @param includePayerLogos Whether to include the payers logo in base64 format.
   * @returns CompaniesResp Successful operation.
   * @throws ApiError
   */
  public getCountryServices(
    countryCode: string,
    limit?: number,
    walletToken?: string,
    userToken?: string,
    sourceCurrency?: string,
    payerName?: string,
    destinationCurrency?: string,
    idempotencyKey?: string,
    amount: string = '200',
    includePayerLogos: boolean = false
  ): CancelablePromise<CompaniesResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/country/{country_code}',
      path: {
        country_code: countryCode,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        amount: amount,
        limit: limit,
        wallet_token: walletToken,
        include_payer_logos: includePayerLogos,
        user_token: userToken,
        source_currency: sourceCurrency,
        payer_name: payerName,
        destination_currency: destinationCurrency,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Gets a list of Companies and their cheapest service offerings for the given country code.
   * This **GET** endpoint is used to retrieve a list of companies and their cheapest service offerings for a specific country. <br> You can use this endpoint to obtain information about available services and pricing for each respected company in the provided country. If two providers offer similar services, only the cheapest option will be displayed. <br> To use this endpoint, you need to provide the `country_code` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, cheapest service offerings, and pricing.
   * @param countryCode Country code searching services for. 3 letters [ISO_3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code"
   * @param limit Limit amount for transaction amount + fee. If fee + amount are higher than the limit, the output will automatically adjust to maximize the possible amount sent
   * @param walletToken Token representing the wallet used. If provided, the results would be custom-tailored to this user.
   * @param userToken Token representing the user for which we fetch the catalog. If provided, the results would be custom-tailored to this user. Not necessary if wallet_token is provided
   * @param sourceCurrency Required if amount is provided. The currency associated with the amount
   * @param payerName Filter services that match payer name
   * @param destinationCurrency Filter services that support the destination currency
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @param amount Returns the results fee based on the given amount, defaults to $200
   * @param includePayerLogos Whether to include the payers logo in base64 format.
   * @returns CompaniesResp Successful operation.
   * @throws ApiError
   */
  public getCheapestCountryServices(
    countryCode: string,
    limit?: number,
    walletToken?: string,
    userToken?: string,
    sourceCurrency?: string,
    payerName?: string,
    destinationCurrency?: string,
    idempotencyKey?: string,
    amount: string = '200',
    includePayerLogos: boolean = false
  ): CancelablePromise<CompaniesResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/country/{country_code}/cheapest',
      path: {
        country_code: countryCode,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        amount: amount,
        limit: limit,
        wallet_token: walletToken,
        include_payer_logos: includePayerLogos,
        user_token: userToken,
        source_currency: sourceCurrency,
        payer_name: payerName,
        destination_currency: destinationCurrency,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Returns list of alternative service to a provided service
   * This **GET** endpoint is used to retrieve a list of alternative services to a provided service. <br> You can use this endpoint to obtain information about other available services and pricing offered by different companies for a particular destination. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON array containing details for each company, including the company name, available alternative services, and pricing.
   * @param destinationToken Destination token
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns Service Successful operation.
   * @throws ApiError
   */
  public getDestinationTokenAlternatives(destinationToken: string, idempotencyKey?: string): CancelablePromise<Service> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/service/{destination_token}/alternatives',
      path: {
        destination_token: destinationToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Returns provided service
   * This **GET** endpoint is used to retrieve the details of the provided service. <br> To use this endpoint, you need to provide the `destination_token` as a required parameter in the URL Path. <br> The response will include a JSON object containing details for the company, including the company name, and pricing.
   * @param destinationToken Destination token
   * @param includePayerLogos Whether to include the payers logo in base64 format.
   * @param idempotencyKey Unique key to prevent duplicate processing
   * @returns Service Successful operation.
   * @throws ApiError
   */
  public getDestinationToken(destinationToken: string, includePayerLogos?: boolean, idempotencyKey?: string): CancelablePromise<Service> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/service/{destination_token}',
      path: {
        destination_token: destinationToken,
      },
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      query: {
        include_payer_logos: includePayerLogos,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Get user agreement
   * This **GET** endpoint is used to retrieve the user agreement for payout services. <br> You can use this endpoint to obtain information about the available user agreements for payout services offered by MassPay. <br> To use this endpoint, you need to provide the `ID` representing the user agreement as a required parameter in the URL Path. <br> The response will include the user agreement details.
   * @param id Id representing user agreement (retrieved from OPTIONS call)
   * @returns any Successful operation.
   * @throws ApiError
   */
  public getUserAgreement(id: number): CancelablePromise<{
    /**
     * Name of user agreement
     */
    name: string;
    /**
     * Base64 encoded byte representing the content of the file
     */
    readonly content: string;
    /**
     * Time when the agreement was last updated
     */
    last_modified: string;
    /**
     * Id representing the user agreement
     */
    id: number;
    /**
     * Mime type of the user agreement (i.e application/pdf)
     */
    mime_type?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user-agreements',
      query: {
        id: id,
      },
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }

  /**
   * Get available user agreements
   * This OPTIONS endpoint is used to retrieve a list of available user agreements for payout services offered by MassPay without the content. <br> You can use this endpoint to obtain the names of available user agreements. <br> There are no required parameters needed to use this endpoint. <br> The response will include a list of user agreement names
   * @returns any Successful operation.
   * @throws ApiError
   */
  public getUserAgreementsNames(): CancelablePromise<
    Array<{
      /**
       * Name of user agreement
       */
      name: string;
      /**
       * Time when the agreement was last updated
       */
      last_modified: string;
      /**
       * Id representing the user agreement (to be used to retrieve it)
       */
      id: number;
      /**
       * Mime type of the user agreement (i.e application/pdf)
       */
      mime_type: string;
    }>
  > {
    return this.httpRequest.request({
      method: 'OPTIONS',
      url: '/user-agreements',
      errors: {
        400: `Bad request.`,
        401: `Unauthorized.`,
        403: `Forbidden.`,
        404: `Not found.`,
        405: `Method Not Allowed.`,
        500: `Internal server error.`,
        504: `Gateway Time-out.`,
      },
    });
  }
}
