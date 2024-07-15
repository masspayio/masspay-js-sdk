/**
 * MassPay API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
import type { ProcessorId } from './ProcessorId';
import type { RoutingDetailsIfRule } from './RoutingDetailsIfRule';
/**
 * Routing - Details
 */
export type RoutingDetails = {
  /**
   * If
   */
  if: Array<RoutingDetailsIfRule>;
  /**
   * New if-then-else or processor Id
   */
  then: RoutingDetails | ProcessorId;
  /**
   * New if-then-else or processor Id
   */
  else: RoutingDetails | ProcessorId;
};
