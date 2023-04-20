<img src="./docs/logo.png" width="200" />

## masspay-js-sdk ![npm](https://img.shields.io/npm/v/masspay-js-sdk) ![Node](https://img.shields.io/badge/node->=%2012-blue)

 - JavaScript client for 
MassPay API

- API version: 0.1.4
- Package version: 

For more information, please visit [https://www.masspay.io](https://www.masspay.io)

## Installation

### For [Node.js](https://nodejs.org/)

### npm

```shell
npm install masspay-js-sdk
```

### yarn

```shell
yarn add masspay-js-sdk
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { MassPayJsSdk } from "masspay-js-sdk";

const sdk = new MassPayJsSdk({ apiKey: "YOUR_API_KEY" });
sdk.AccountApi.getAccountBalance().then((response) => {
    console.log(response.data);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.masspay.io/v0.1.4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*.AccountApi* | **getAccountBalance** | **GET** /account/balance | Get current available balance
*.AccountApi* | **getAccountStatement** | **GET** /account/statement | Get certified account statement
*.AttributeApi* | **findAttributesVelocity** | **POST** /attribute/{user_token}/velocity | Attributes velocity check
*.AttributeApi* | **getAttrs** | **GET** /attribute/{user_token}/{destination_token}/{currency} | Get user attributes for destination_token
*.AttributeApi* | **storeAttrs** | **POST** /attribute/{user_token}/{destination_token}/{currency} | Store user attributes
*.CardApi* | **getWalletCardInfo** | **GET** /wallet/{user_token}/{wallet_token}/card | Get MassPay Card Information
*.CardApi* | **updateWalletCardInfo** | **PUT** /wallet/{user_token}/{wallet_token}/card | Update MassPay Card Information
*.CatalogApi* | **getCheapestCountryServices** | **GET** /country/{country_code}/cheapest | Gets a list of Companies and their cheapest service offerings for the given country code.
*.CatalogApi* | **getCountryList** | **GET** /country/list | Gets a list of countries where services offered.
*.CatalogApi* | **getCountryServices** | **GET** /country/{country_code} | Gets a list of Companies and their service offerings for the given country code.
*.CatalogApi* | **getDestinationTokenAlternatives** | **GET** /service/{destination_token}/alternatives | Returns list of alternative service to a provided service
*.CatalogApi* | **getUserAgreement** | **GET** /user-agreements | Get User Agreement
*.CatalogApi* | **getUserAgreementsNames** | **OPTIONS** /user-agreements | Get Available User Agreements
*.InternalApi* | **commitPayoutTxnInternal** | **PUT** /payout/{user_token}/{payout_token}/internal | Commit payout transaction
*.InternalApi* | **decryptStatementJWT** | **GET** /decrypt-statement-JWT | Decrypt Statement JWT
*.InternalApi* | **distributorsBalances** | **GET** /distributors/balances | Retrieve available balances at distributors
*.InternalApi* | **generateInvoice** | **OPTIONS** /payout/{user_token}/{payout_token} | Generate Invoice
*.InternalApi* | **generatePricingList** | **POST** /generate_pricing_list | Generate pricing list
*.InternalApi* | **getCallbackCompanyId** | **GET** /callback/{company_id} | Transaction Status Callback
*.InternalApi* | **getDevelopmentTest** | **GET** /development/test | Development
*.InternalApi* | **initiatePayoutInternal** | **POST** /payout/{user_token}/internal | Initiate a payout transaction
*.InternalApi* | **postAccountApiKey** | **POST** /account/api-key | Generate API Key
*.InternalApi* | **postCallbackCompanyId** | **POST** /callback/{company_id} | Transaction Status Callback
*.InternalApi* | **updateUserInternal** | **PUT** /user/{user_token}/internal | Internal user update
*.InternalApi* | **uploadBatch** | **POST** /batch | Upload a batch
*.KYCApi* | **findAttributesVelocity** | **POST** /attribute/{user_token}/velocity | Attributes velocity check
*.KYCApi* | **getUserUserTokenKycAu10tix** | **GET** /user/{user_token}/kyc/au10tix | Get an Au10tix session link
*.KYCApi* | **getUserUserTokenKycVeriiff** | **GET** /user/{user_token}/kyc/veriff | Get a Veriff session link
*.LoadApi* | **cancelUserLoad** | **DELETE** /load/{user_token} | Reverse a user load
*.LoadApi* | **createAutopayRule** | **POST** /wallet/{user_token}/{wallet_token}/autopay | Add autopay rule
*.LoadApi* | **deleteAutopayRule** | **DELETE** /wallet/{user_token}/{wallet_token}/autopay | Delete autopay rule
*.LoadApi* | **getAutopayRules** | **GET** /wallet/{user_token}/{wallet_token}/autopay | Get all autopay rules
*.LoadApi* | **getUserLoadsByToken** | **GET** /load/{user_token} | Get history of loads by user token
*.LoadApi* | **loadUser** | **POST** /load/{user_token} | Initiate a load transaction
*.LoadApi* | **resendLoadNotification** | **PUT** /load/{user_token} | Resend Load Notification
*.PayoutApi* | **commitPayoutTxn** | **PUT** /payout/{user_token}/{payout_token} | Commit payout transaction
*.PayoutApi* | **getPayoutStatus** | **GET** /payout/{user_token}/{payout_token} | Get status of a payout by payout token
*.PayoutApi* | **getTransactionConfirmationDetails** | **PATCH** /payout/{user_token}/{payout_token} | Get transaction confirmation details
*.PayoutApi* | **getUserPayoutsByToken** | **GET** /payout/{user_token} | Get history of payouts by user token
*.PayoutApi* | **initiatePayout** | **POST** /payout/{user_token} | Initiate a payout transaction
*.SpendBackApi* | **getUserSpendbacksByToken** | **GET** /spendback/{user_token} | Get history of spend backs by user token
*.SpendBackApi* | **initiateSpendback** | **POST** /spendback/{user_token} | Initiate a spend back transaction
*.UserApi* | **createUser** | **POST** /user | Create a user
*.UserApi* | **getUserByToken** | **GET** /user/{user_token} | Get user by user token
*.UserApi* | **getUserHistory** | **GET** /user/{user_token}/history | Transactions history
*.UserApi* | **getUserUserTokenKycAu10tix** | **GET** /user/{user_token}/kyc/au10tix | Get an Au10tix session link
*.UserApi* | **getUserUserTokenKycVeriiff** | **GET** /user/{user_token}/kyc/veriff | Get a Veriff session link
*.UserApi* | **updateUser** | **PUT** /user/{user_token} | Updated user
*.UserApi* | **userLookup** | **GET** /user/lookup | Lookup an existing user
*.WalletApi* | **createAutopayRule** | **POST** /wallet/{user_token}/{wallet_token}/autopay | Add autopay rule
*.WalletApi* | **deleteAutopayRule** | **DELETE** /wallet/{user_token}/{wallet_token}/autopay | Delete autopay rule
*.WalletApi* | **getAutopayRules** | **GET** /wallet/{user_token}/{wallet_token}/autopay | Get all autopay rules
*.WalletApi* | **getWallet** | **GET** /wallet/{user_token} | Retrieve all available wallets for a user
*.WalletApi* | **getWalletCardInfo** | **GET** /wallet/{user_token}/{wallet_token}/card | Get MassPay Card Information
*.WalletApi* | **updateWalletCardInfo** | **PUT** /wallet/{user_token}/{wallet_token}/card | Update MassPay Card Information


## Documentation for Authorization




### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header




### AUTHORIZER_NAME


- **Type**: Bearer authentication


## Author

info@masspay.io

