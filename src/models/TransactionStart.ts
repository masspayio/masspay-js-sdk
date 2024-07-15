/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { alipay } from './alipay';
import type { applepay } from './applepay';
import type { bcmc } from './bcmc';
import type { belfius } from './belfius';
import type { bitpay } from './bitpay';
import type { bpwallet } from './bpwallet';
import type { Card_1 } from './Card_1';
import type { cardexternal } from './cardexternal';
import type { creditclick } from './creditclick';
import type { directdebit } from './directdebit';
import type { directdebitplus } from './directdebitplus';
import type { dummy } from './dummy';
import type { eps } from './eps';
import type { etransfer } from './etransfer';
import type { ezeewallet } from './ezeewallet';
import type { finshark } from './finshark';
import type { gcash } from './gcash';
import type { giropay } from './giropay';
import type { googlepay } from './googlepay';
import type { ideal } from './ideal';
import type { imps } from './imps';
import type { interac } from './interac';
import type { multibanco } from './multibanco';
import type { mybank } from './mybank';
import type { opennode } from './opennode';
import type { p24 } from './p24';
import type { paypal } from './paypal';
import type { paysafecard } from './paysafecard';
import type { paytm } from './paytm';
import type { payu } from './payu';
import type { pos } from './pos';
import type { sepa } from './sepa';
import type { skrill } from './skrill';
import type { sofort } from './sofort';
import type { TransactionDetailDefault } from './TransactionDetailDefault';
import type { triplea } from './triplea';
import type { trustly } from './trustly';
import type { trustpay } from './trustpay';
import type { unionpay } from './unionpay';
import type { upi } from './upi';
import type { volt } from './volt';
import type { wechatpay } from './wechatpay';
export type TransactionStart =
  | alipay
  | applepay
  | bcmc
  | belfius
  | bitpay
  | bpwallet
  | Card_1
  | cardexternal
  | creditclick
  | directdebit
  | directdebitplus
  | dummy
  | eps
  | etransfer
  | ezeewallet
  | finshark
  | gcash
  | giropay
  | googlepay
  | ideal
  | imps
  | interac
  | multibanco
  | mybank
  | opennode
  | p24
  | paypal
  | paysafecard
  | paytm
  | payu
  | pos
  | sepa
  | skrill
  | sofort
  | triplea
  | trustpay
  | trustly
  | unionpay
  | upi
  | volt
  | wechatpay
  | {
      details: TransactionDetailDefault;
    };
