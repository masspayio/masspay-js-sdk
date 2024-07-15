/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { CardResp } from '../models/CardResp';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CardService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get MassPay card information
   * This **GET** endpoint is used to retrieve MassPay card information associated with the provided wallet token. <br> You can use this endpoint to obtain information about the MassPay card associated with the wallet. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as required parameters in the URL Path. <br> The response will include a JSON object containing details for the MassPay card, including the card number, balance, status. If your company is not PCI compliant, each field would contain a url that displays the corresponding card detail once accessed through an iFrame.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @returns CardResp Succesful operation.
   * @throws ApiError
   */
  public getWalletCardInfo(userToken: string, walletToken: string): CancelablePromise<CardResp> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/payout/wallet/{user_token}/{wallet_token}/card',
      path: {
        user_token: userToken,
        wallet_token: walletToken,
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
   * Update MassPay card information
   * This **PUT** endpoint is used to update the MassPay card information for a provided user token and wallet token. <br> You can use this endpoint to help your users manage their MassPay card information, including updating their card PIN number or status. <br> To use this endpoint, you need to provide the `user_token` and `wallet_token` as parameters in the URL Path, along with the parameters in the request Query, including the card pin number or(and) status. <br> The endpoint will then update the card information for the provided user and wallet token.
   * @param userToken Token representing the user who owns the wallet
   * @param walletToken Token representing the wallet
   * @param pin New 4 digit pin number for the card (To be used in ATM machines)
   * @param status New status for the card
   * @returns any Succesful operation.
   * @throws ApiError
   */
  public updateWalletCardInfo(
    userToken: string,
    walletToken: string,
    pin?: string,
    status?: 'SUSPEND' | 'UNSUSPEND' | 'CLOSE'
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/payout/wallet/{user_token}/{wallet_token}/card',
      path: {
        user_token: userToken,
        wallet_token: walletToken,
      },
      query: {
        pin: pin,
        status: status,
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
}
