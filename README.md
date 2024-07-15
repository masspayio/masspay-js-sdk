<div align='center' class='text-center'>
  <img alt='' src='./assets/logo.png' width='200' />
  <h1 align='center' class='text-center'>masspay-js-sdk</h1>
</div>

<div align='center' class='text-center'>
  <a aria-label='NPM version' href='https://www.npmjs.com/package/masspay-js-sdk'>
    <img alt='' src='https://img.shields.io/npm/v/masspay-js-sdk' />
  </a>
  <a aria-label='Node' href='https://nodejs.org/'>
    <img alt='' src='https://img.shields.io/badge/node->=%2012-blue' />
  </a>
  <a aria-label='License' href='https://opensource.org/licenses/MIT'>
    <img alt='' src='https://img.shields.io/badge/License-MIT-blue.svg' />
  </a>
</div>

<!---
Repository badges to consider: (https://github.com/aleen42/badges)
  a. [![Build Status](https://travis-ci.com/username/repository.svg?branch=master)](https://travis-ci.com/)
  b. [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  c. [![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
  d. [![Downloads](https://img.shields.io/badge/downloads-1000%2Fmonth-brightgreen.svg)]()
  e. [![Contributors](https://img.shields.io/github/contributors/username/repository.svg)]()
--->

Welcome to our masspay-js-sdk. We are committed to providing you with the best SDK services experience possible. Please use our step-by-step instructions to become familiar with how to use our SDK.

- Current API version: 1.0.0
- Current package version: 2.0.0

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)

## Requirements

<!--- Instructions on what the user must do before using the SDK. --->

- Installed Node.js, stable version >= 12. If you do not currently have Node.js locally installed, please refer to the [Node website](https://nodejs.org/en/download/)
- MassPay.io API credentials.

## Installation

<!--- Instructions on how to install and set up the SDK.--->

Use these commands to install masspay-js-sdk in your terminal, based on your preferences.

### npm

```shell
npm install masspay-js-sdk
```

### yarn

```shell
yarn add masspay-js-sdk
```

## Usage

<!--- Description how users can use the SDK.--->

In case that you successfully installed our masspay-js-sdk please execute this code:

```javascript
import { MasspayJsSdk } from 'masspay-js-sdk';

const sdk = new MasspayJsSdk({
  AUTHORIZER_NAME_API_KEY: 'YOUR API KEY',
});
(async () => {
  try {
    const response = await sdk.AccountService.getAccountBalance({
      /* query parameters */
    });
    // use response data
  } catch (error) {
    // handle error
  }
})();
```

## Features

<!--- Highlighting the key features and capabilities of the SDK. --->

Kindly note that every URI is relative to _https://api.masspay.io/v1.0.0_.

The table displays all features categorized based on their specific purposes.

| Class                            | Method                                | HTTP request                                                           | Description                                                                               |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| _MasspayJsSdk.AccountService_    | **getAccountBalance**                 | **GET** /payout/account/balance                                        | Get current available balance                                                             |
| _MasspayJsSdk.AccountService_    | **getAccountStatement**               | **GET** /payout/account/statement                                      | Get certified account statement                                                           |
| _MasspayJsSdk.AttributeService_  | **getAllAttrs**                       | **GET** /payout/attribute/{user_token}                                 | Get all stored user attributes                                                            |
| _MasspayJsSdk.AttributeService_  | **storeAttrs**                        | **POST** /payout/attribute/{user_token}/{destination_token}/{currency} | Store user attributes                                                                     |
| _MasspayJsSdk.AttributeService_  | **getAttrs**                          | **GET** /payout/attribute/{user_token}/{destination_token}/{currency}  | Get user attributes for destination_token                                                 |
| _MasspayJsSdk.CardService_       | **getWalletCardInfo**                 | **GET** /payout/wallet/{user_token}/{wallet_token}/card                | Get MassPay card information                                                              |
| _MasspayJsSdk.CardService_       | **updateWalletCardInfo**              | **PUT** /payout/wallet/{user_token}/{wallet_token}/card                | Update MassPay card information                                                           |
| _MasspayJsSdk.CatalogService_    | **getCountryList**                    | **GET** /payout/country/list                                           | Gets a list of countries where services offered.                                          |
| _MasspayJsSdk.CatalogService_    | **getCountryServices**                | **GET** /payout/country/{country_code}                                 | Gets a list of Companies and their service offerings for the given country code.          |
| _MasspayJsSdk.CatalogService_    | **getCheapestCountryServices**        | **GET** /payout/country/{country_code}/cheapest                        | Gets a list of Companies and their cheapest service offerings for the given country code. |
| _MasspayJsSdk.CatalogService_    | **getDestinationTokenAlternatives**   | **GET** /payout/service/{destination_token}/alternatives               | Returns list of alternative service to a provided service                                 |
| _MasspayJsSdk.CatalogService_    | **getDestinationToken**               | **GET** /payout/service/{destination_token}                            | Returns provided service                                                                  |
| _MasspayJsSdk.CatalogService_    | **getUserAgreement**                  | **GET** /payout/user-agreements                                        | Get user agreement                                                                        |
| _MasspayJsSdk.CatalogService_    | **getUserAgreementsNames**            | **OPTIONS** /payout/user-agreements                                    | Get available user agreements                                                             |
| _MasspayJsSdk.KycService_        | **findAttributesVelocity**            | **POST** /payout/attribute/{user_token}/velocity                       | Attributes velocity check                                                                 |
| _MasspayJsSdk.KycService_        | **getUserUserTokenKycAu10Tix**        | **GET** /payout/user/{user_token}/kyc/au10tix                          | Get an Au10tix session link                                                               |
| _MasspayJsSdk.KycService_        | **uploadIdPhotos**                    | **POST** /payout/user/{user_token}/kyc/id                              | Upload ID photos                                                                          |
| _MasspayJsSdk.KycService_        | **getUserUserTokenKycAttempts**       | **GET** /payout/user/{user_token}/kyc/id                               | Get all KYC sessions                                                                      |
| _MasspayJsSdk.KycService_        | **getUserUserTokenKycVeriff**         | **GET** /payout/user/{user_token}/kyc/veriff                           | Get a Veriff session link                                                                 |
| _MasspayJsSdk.LoadService_       | **resendBalanceNotification**         | **PUT** /payout/wallet/{user_token}                                    | Resend balance notification                                                               |
| _MasspayJsSdk.LoadService_       | **loadUser**                          | **POST** /payout/load/{user_token}                                     | Initiate a load transaction                                                               |
| _MasspayJsSdk.LoadService_       | **getUserLoadsByToken**               | **GET** /payout/load/{user_token}                                      | Get history of loads by user token                                                        |
| _MasspayJsSdk.LoadService_       | **resendLoadNotification**            | **PUT** /payout/load/{user_token}                                      | Resend load notification                                                                  |
| _MasspayJsSdk.LoadService_       | **cancelUserLoad**                    | **DELETE** /payout/load/{user_token}                                   | Reverse a user load                                                                       |
| _MasspayJsSdk.PayoutService_     | **initiatePayout**                    | **POST** /payout/{user_token}                                          | Initiate a payout transaction                                                             |
| _MasspayJsSdk.PayoutService_     | **getUserPayoutsByToken**             | **GET** /payout/{user_token}                                           | Get history of payouts by user token                                                      |
| _MasspayJsSdk.PayoutService_     | **commitPayoutTxn**                   | **PUT** /payout/{user_token}/{payout_token}                            | Commit payout transaction                                                                 |
| _MasspayJsSdk.PayoutService_     | **getPayoutStatus**                   | **GET** /payout/{user_token}/{payout_token}                            | Get status of a payout by payout token                                                    |
| _MasspayJsSdk.PayoutService_     | **getTransactionConfirmationDetails** | **PATCH** /payout/{user_token}/{payout_token}                          | Get transaction confirmation details                                                      |
| _MasspayJsSdk.SpendBackService_  | **getUserSpendbacksByToken**          | **GET** /payout/spendback/{user_token}                                 | Get history of spend backs by user token                                                  |
| _MasspayJsSdk.SpendBackService_  | **initiateSpendback**                 | **POST** /payout/spendback/{user_token}                                | Initiate a spend back transaction                                                         |
| _MasspayJsSdk.SubaccountService_ | **createSubaccount**                  | **POST** /subaccount                                                   | Create a subaccount                                                                       |
| _MasspayJsSdk.SubaccountService_ | **getSubaccountSubaccountTokenUbo**   | **POST** /subaccount/{subaccount_token}/ubo                            | Add UBOs to subaccount                                                                    |
| _MasspayJsSdk.SubaccountService_ | **uploadSubaccountUboId**             | **POST** /subaccount/{subaccount_token}/ubo/{ubo_token}/id             | Upload UBO ID photos                                                                      |
| _MasspayJsSdk.TaxService_        | **getTaxUsers**                       | **GET** /payout/tax                                                    | Get list of users' annual balance                                                         |
| _MasspayJsSdk.TaxService_        | **getTaxInterviewLink**               | **GET** /payout/{user_token}/tax                                       | Get link for tax interview                                                                |
| _MasspayJsSdk.UserService_       | **createUser**                        | **POST** /payout/user                                                  | Create a user                                                                             |
| _MasspayJsSdk.UserService_       | **getUserByToken**                    | **GET** /payout/user/{user_token}                                      | Get user by user token                                                                    |
| _MasspayJsSdk.UserService_       | **updateUser**                        | **PUT** /payout/user/{user_token}                                      | Updated user                                                                              |
| _MasspayJsSdk.UserService_       | **userLookup**                        | **GET** /payout/user/lookup                                            | Lookup an existing user                                                                   |
| _MasspayJsSdk.UserService_       | **getUserHistory**                    | **GET** /payout/user/{user_token}/history                              | Transactions history                                                                      |
| _MasspayJsSdk.UserService_       | **getAllUsersHistory**                | **GET** /payout/user/history                                           | All Users' Transactions history                                                           |
| _MasspayJsSdk.WalletService_     | **getWallet**                         | **GET** /payout/wallet/{user_token}                                    | Retrieve all available wallets for a user                                                 |
| _MasspayJsSdk.WalletService_     | **getAutopayoutRules**                | **GET** /payout/wallet/{user_token}/{wallet_token}/autopayout          | Get all AutoPayout rules                                                                  |
| _MasspayJsSdk.WalletService_     | **createAutopayoutRule**              | **POST** /payout/wallet/{user_token}/{wallet_token}/autopayout         | Add AutoPayout rule                                                                       |
| _MasspayJsSdk.WalletService_     | **deleteAutopayoutRule**              | **DELETE** /payout/wallet/{user_token}/{wallet_token}/autopayout       | Delete AutoPayout rule                                                                    |

## Contributing

<!--- Explaining how users can contribute to the project. Include guidelines for bug reports, feature requests, and pull requests.--->

To learn more about the possibility of contributing to the subsequent development of this SDK, please visit our [contributing page](./CONTRIBUTING.md). Kindly note that contributions are limited by a unique set of rules in order to ensure clarity.

## License

<!--- Including the license information for your project and the specification of the license type (e.g., MIT, Apache 2.0). --->

Please refer to the [license page](./LICENSE) for more information about the license type and the corresponding terms of use.

## Contact

<!--- Providing contact information or links to relevant communication channels (e.g., email, Slack, Gitter).--->

We kindly request that you direct all questions to our support email:

- [info@masspay.io](mailto:info@masspay.io)

## Frequently Asked Questions (FAQ)

<!--- Including a section addressing frequently asked questions about the SDK.--->

<!---  Questions that can be prefilled
What are the main functions or features supported by the SDK?
Are there any examples or tutorials to help me understand how to use the SDK effectively?
How can I get help or assistance if I encounter issues while using the SDK?
How often is the SDK updated, and how can users stay informed about updates?
Are there any best practices recommended for maintaining security while using the SDK?
What are the licensing terms for using the SDK?
--->
