/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { CancelablePromise } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';

export abstract class BaseHttpRequest {
  constructor(public readonly config: OpenAPIConfig) {}

  public abstract request<T>(options: ApiRequestOptions): CancelablePromise<T>;
}
