/**
 * MassPay API
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: info@masspay.io
 *
 * NOTE: This file is auto generated.
 * Do not edit the file manually.
 */
export type KYCSession = {
  provider: KYCSession.provider;
  session_id: string;
  session_time: string;
  status: KYCSession.status;
  resp?: Record<string, any>;
};
export namespace KYCSession {
  export enum provider {
    VERIFF = 'Veriff',
    AU10TIX = 'Au10tix',
  }
  export enum status {
    STARTED = 'Started',
    SUBMITTED = 'Submitted',
    ABANDONED = 'Abandoned',
    EXPIRED = 'Expired',
    RESUBMITTED = 'Resubmitted',
    DECLINED = 'Declined',
    APPROVED = 'Approved',
    RESUBMISSION_REQUESTED = 'Resubmission requested',
    REVIEW = 'Review',
  }
}
