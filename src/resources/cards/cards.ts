// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PinAPI from './pin';
import { Pin, PinRetrieveParams, PinRetrieveResponse, PinUpdateParams } from './pin';
import * as CompanyAPI from '../applications/company/company';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Cards extends APIResource {
  pin: PinAPI.Pin = new PinAPI.Pin(this._client);

  /**
   * Retrieve detailed information for a specific card by its unique ID
   */
  retrieve(cardID: string, options?: RequestOptions): APIPromise<IssuingCard> {
    return this._client.get(path`/cards/${cardID}`, options);
  }

  /**
   * Update details for an existing card, such as status, limit, billing address, and
   * configuration.
   */
  update(
    cardID: string,
    body: CardUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IssuingCard> {
    return this._client.patch(path`/cards/${cardID}`, { body, ...options });
  }

  /**
   * Retrieves all cards associated with a user or company. You can filter by user or
   * company ID and card status.
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/cards', { query, ...options });
  }

  /**
   * Retrieve the encrypted data for a specific card, including the encrypted PAN and
   * CVC
   */
  retrieveSecrets(
    cardID: string,
    params: CardRetrieveSecretsParams,
    options?: RequestOptions,
  ): APIPromise<CardRetrieveSecretsResponse> {
    const { SessionId } = params;
    return this._client.get(path`/cards/${cardID}/secrets`, {
      ...options,
      headers: buildHeaders([{ SessionId: SessionId }, options?.headers]),
    });
  }
}

export interface IssuingCard {
  /**
   * The card's ID
   */
  id: string;

  /**
   * The ID of the company that issued the card
   */
  companyId: string;

  /**
   * The expiration month of the card
   */
  expirationMonth: string;

  /**
   * The expiration year of the card
   */
  expirationYear: string;

  /**
   * The last four digits of the card number
   */
  last4: string;

  /**
   * The card's current status
   */
  status: IssuingCardStatus;

  /**
   * The type of the card (physical or virtual)
   */
  type: 'physical' | 'virtual';

  /**
   * The userID to whom the card was issued
   */
  userId: string;

  /**
   * The card's spending limit
   */
  limit?: IssuingCardLimit;

  tokenWallets?: Array<string>;
}

/**
 * Represents the spending limit and frequency for a card.
 */
export interface IssuingCardLimit {
  /**
   * The maximum spending amount in cents
   */
  amount: number;

  /**
   * The frequency at which the spending limit resets
   */
  frequency:
    | 'per24HourPeriod'
    | 'per7DayPeriod'
    | 'per30DayPeriod'
    | 'perYearPeriod'
    | 'allTime'
    | 'perAuthorization';
}

/**
 * The current status of the card
 */
export type IssuingCardStatus = 'notActivated' | 'active' | 'locked' | 'canceled';

export type CardListResponse = Array<IssuingCard>;

/**
 * The encrypted data for the card
 */
export interface CardRetrieveSecretsResponse {
  /**
   * The encrypted CVC
   */
  encryptedCvc: CardRetrieveSecretsResponse.EncryptedCvc;

  /**
   * The encrypted PAN
   */
  encryptedPan: CardRetrieveSecretsResponse.EncryptedPan;
}

export namespace CardRetrieveSecretsResponse {
  /**
   * The encrypted CVC
   */
  export interface EncryptedCvc {
    /**
     * The encrypted data
     */
    data: string;

    /**
     * The initialization vector
     */
    iv: string;
  }

  /**
   * The encrypted PAN
   */
  export interface EncryptedPan {
    /**
     * The encrypted data
     */
    data: string;

    /**
     * The initialization vector
     */
    iv: string;
  }
}

export interface CardUpdateParams {
  /**
   * The billing address associated with the card.
   */
  billing?: CompanyAPI.PhysicalAddress;

  /**
   * Configuration for the card, such as virtual card art
   */
  configuration?: CardUpdateParams.Configuration;

  /**
   * The limit associated with the card
   */
  limit?: IssuingCardLimit;

  /**
   * The current status of the card
   */
  status?: IssuingCardStatus;
}

export namespace CardUpdateParams {
  /**
   * Configuration for the card, such as virtual card art
   */
  export interface Configuration {
    /**
     * The virtual card art ID used to customize the card's appearance, if applicable
     */
    virtualCardArt?: string;
  }
}

export interface CardListParams {
  /**
   * For corporate cards, the identifier of the company to get cards for
   */
  companyId?: string;

  /**
   * The ID of the resource after which to start fetching
   */
  cursor?: string;

  /**
   * The number of resources to fetch
   */
  limit?: number;

  /**
   * Filter cards by status
   */
  status?: IssuingCardStatus;

  /**
   * The identifier of the user to get cards for
   */
  userId?: string;
}

export interface CardRetrieveSecretsParams {
  /**
   * Encrypted session ID generated by the user requesting the encrypted data
   */
  SessionId: string;
}

Cards.Pin = Pin;

export declare namespace Cards {
  export {
    type IssuingCard as IssuingCard,
    type IssuingCardLimit as IssuingCardLimit,
    type IssuingCardStatus as IssuingCardStatus,
    type CardListResponse as CardListResponse,
    type CardRetrieveSecretsResponse as CardRetrieveSecretsResponse,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
    type CardRetrieveSecretsParams as CardRetrieveSecretsParams,
  };

  export {
    Pin as Pin,
    type PinRetrieveResponse as PinRetrieveResponse,
    type PinRetrieveParams as PinRetrieveParams,
    type PinUpdateParams as PinUpdateParams,
  };
}
