// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DisputesAPI from '../disputes/disputes';
import * as ReceiptAPI from './receipt';
import { Receipt, ReceiptUploadParams } from './receipt';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Transactions extends APIResource {
  receipt: ReceiptAPI.Receipt = new ReceiptAPI.Receipt(this._client);

  /**
   * This endpoint retrieves a transaction by its unique ID. The transaction
   * information returned includes details such as the transaction type, amount, and
   * status.
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<IssuingTransaction> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * This endpoint allows updating a specific transaction by its ID. You can modify
   * the transaction's memo or other editable fields.
   */
  update(
    transactionID: string,
    body: TransactionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/transactions/${transactionID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all transactions associated with corporate cards, users,
   * or specific cards.
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * This endpoint allows the creation of a dispute for a specific transaction. The
   * dispute can include textual evidence to support the claim.
   */
  createDispute(
    transactionID: string,
    body: TransactionCreateDisputeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputesAPI.IssuingDispute> {
    return this._client.post(path`/transactions/${transactionID}/disputes`, { body, ...options });
  }
}

/**
 * Represents a transaction of type 'spend'. This includes details such as the
 * transaction amount, merchant, and the associated user.
 */
export type IssuingTransaction =
  | IssuingTransaction.SpendTransaction
  | IssuingTransaction.CollateralTransaction
  | IssuingTransaction.PaymentTransaction
  | IssuingTransaction.FeeTransaction;

export namespace IssuingTransaction {
  /**
   * Represents a transaction of type 'spend'. This includes details such as the
   * transaction amount, merchant, and the associated user.
   */
  export interface SpendTransaction {
    /**
     * The unique identifier of the transaction
     */
    id: string;

    /**
     * Details specific to a spend transaction, including merchant, amount, and user
     * information.
     */
    spend: SpendTransaction.Spend;

    /**
     * The type of transaction
     */
    type: 'spend';
  }

  export namespace SpendTransaction {
    /**
     * Details specific to a spend transaction, including merchant, amount, and user
     * information.
     */
    export interface Spend {
      /**
       * The amount of the transaction, in cents
       */
      amount: number;

      /**
       * The time at which the transaction was authorized
       */
      authorizedAt: string;

      /**
       * The unique identifier of the card used for the transaction
       */
      cardId: string;

      /**
       * The type of card used for the transaction
       */
      cardType: 'physical' | 'virtual';

      /**
       * The currency of the transaction
       */
      currency: string;

      /**
       * The category of the merchant (e.g., electronics, food)
       */
      merchantCategory: string;

      /**
       * The merchant's category code
       */
      merchantCategoryCode: string;

      /**
       * The name of the merchant where the transaction took place
       */
      merchantName: string;

      /**
       * Indicates whether a receipt was generated for the transaction
       */
      receipt: boolean;

      /**
       * The status of the transaction
       */
      status: 'pending' | 'reversed' | 'declined' | 'completed';

      /**
       * The email address of the user who made the transaction
       */
      userEmail: string;

      /**
       * The first name of the user who made the transaction
       */
      userFirstName: string;

      /**
       * The identifier of the user who made the transaction
       */
      userId: string;

      /**
       * The last name of the user who made the transaction
       */
      userLastName: string;

      /**
       * The method used for authorization of the transaction
       */
      authorizationMethod?: string;

      /**
       * The authorized amount of the transaction, in cents
       */
      authorizedAmount?: number;

      /**
       * The identifier of the company under which the transaction was made
       */
      companyId?: string;

      /**
       * The reason why the transaction was declined
       */
      declinedReason?: string;

      /**
       * An enriched category of the merchant, providing further details
       */
      enrichedMerchantCategory?: string;

      /**
       * The enriched icon of the merchant
       */
      enrichedMerchantIcon?: string;

      /**
       * An enriched name of the merchant, possibly with additional information
       */
      enrichedMerchantName?: string;

      /**
       * The amount of the transaction in local currency, in cents
       */
      localAmount?: number;

      /**
       * The local currency of the transaction
       */
      localCurrency?: string;

      /**
       * A memo or note associated with the transaction
       */
      memo?: string;

      /**
       * The time at which the transaction was posted
       */
      postedAt?: string;
    }
  }

  /**
   * Represents a collateral transaction, where a user provides collateral for a
   * transaction.
   */
  export interface CollateralTransaction {
    /**
     * The unique identifier of the transaction
     */
    id: string;

    /**
     * Details of the collateral transaction, including amount, currency, and
     * transaction details.
     */
    collateral: CollateralTransaction.Collateral;

    /**
     * The type of transaction, in this case, a collateral transaction
     */
    type: 'collateral';
  }

  export namespace CollateralTransaction {
    /**
     * Details of the collateral transaction, including amount, currency, and
     * transaction details.
     */
    export interface Collateral {
      /**
       * The amount of the collateral transaction, in cents
       */
      amount: number;

      /**
       * The chain ID (base-10 number) that the collateral transaction is on
       */
      chainId: number;

      /**
       * The currency of the collateral transaction
       */
      currency: string;

      /**
       * The hash of the collateral transaction
       */
      transactionHash: string;

      /**
       * The wallet address the collateral was added from
       */
      walletAddress: string;

      /**
       * The identifier of the company under which the collateral transaction was made
       */
      companyId?: string;

      /**
       * A memo or note associated with the collateral transaction
       */
      memo?: string;

      /**
       * The time at which the collateral transaction was posted
       */
      postedAt?: string;

      /**
       * The identifier of the user who provided the collateral
       */
      userId?: string;
    }
  }

  /**
   * Represents a payment transaction, where a payment is made for a particular
   * service or product.
   */
  export interface PaymentTransaction {
    /**
     * The unique identifier of the payment transaction
     */
    id: string;

    /**
     * Details of the payment transaction, including amount, currency, and status.
     */
    payment: PaymentTransaction.Payment;

    /**
     * The type of transaction
     */
    type: 'payment';
  }

  export namespace PaymentTransaction {
    /**
     * Details of the payment transaction, including amount, currency, and status.
     */
    export interface Payment {
      /**
       * The amount of the transaction, in cents
       */
      amount: number;

      /**
       * The currency of the transaction
       */
      currency: string;

      /**
       * The status of the transaction
       */
      status: 'pending' | 'completed';

      /**
       * The chain ID (base-10 number) that the payment transaction is on
       */
      chainId?: number;

      /**
       * The identifier of the company under which the payment transaction was made
       */
      companyId?: string;

      /**
       * The memo or note associated with the transaction
       */
      memo?: string;

      /**
       * The time at which the payment transaction was posted
       */
      postedAt?: string;

      /**
       * The hash of the payment transaction
       */
      transactionHash?: string;

      /**
       * The identifier of the user who made the payment
       */
      userId?: string;

      /**
       * The wallet address from which the payment was made
       */
      walletAddress?: string;
    }
  }

  /**
   * Represents a fee transaction, where a fee is charged for a service or product.
   */
  export interface FeeTransaction {
    /**
     * The identifier of the fee transaction
     */
    id: string;

    /**
     * Details of the fee transaction, including amount, description, and status.
     */
    fee: FeeTransaction.Fee;

    /**
     * The type of transaction, in this case, a fee transaction
     */
    type: 'fee';
  }

  export namespace FeeTransaction {
    /**
     * Details of the fee transaction, including amount, description, and status.
     */
    export interface Fee {
      /**
       * The amount of the fee, in cents
       */
      amount: number;

      /**
       * The identifier of the company to which the fee was charged
       */
      companyId?: string;

      /**
       * The description of the fee
       */
      description?: string;

      /**
       * The time at which the fee was posted
       */
      postedAt?: string;

      /**
       * The identifier of the user to whom the fee was charged
       */
      userId?: string;
    }
  }
}

export type TransactionListResponse = Array<IssuingTransaction>;

export interface TransactionUpdateParams {
  /**
   * A memo or note to attach to the transaction, providing additional information or
   * context
   */
  memo?: string;
}

export interface TransactionListParams {
  /**
   * Filter transactions authorized after a specific date
   */
  authorizedAfter?: string;

  /**
   * Filter transactions authorized before a specific date
   */
  authorizedBefore?: string;

  /**
   * The ID of the card to get transactions for
   */
  cardId?: string;

  /**
   * For corporate cards, the identifier of the company to get transactions for
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
   * Filter transactions posted after a specific date
   */
  postedAfter?: string;

  /**
   * Filter transactions posted before a specific date
   */
  postedBefore?: string;

  /**
   * The hash of the transaction to retrieve
   */
  transactionHash?: string;

  /**
   * The type of transactions to retrieve
   */
  type?: Array<'spend' | 'collateral' | 'payment' | 'fee'>;

  /**
   * The ID of the user to get transactions for
   */
  userId?: string;
}

export interface TransactionCreateDisputeParams {
  /**
   * The textual evidence that supports the dispute
   */
  textEvidence?: string;
}

Transactions.Receipt = Receipt;

export declare namespace Transactions {
  export {
    type IssuingTransaction as IssuingTransaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionCreateDisputeParams as TransactionCreateDisputeParams,
  };

  export { Receipt as Receipt, type ReceiptUploadParams as ReceiptUploadParams };
}
