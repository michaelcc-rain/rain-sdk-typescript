// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RainHelloWorld from 'rain-hello-world';

const client = new RainHelloWorld({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource signatures', () => {
  // Prism tests are disabled
  test.skip('retrievePaymentSignature: only required params', async () => {
    const responsePromise = client.companies.signatures.retrievePaymentSignature(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        token: 'token',
        adminAddress: 'adminAddress',
        amount: 'amount',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePaymentSignature: required and optional params', async () => {
    const response = await client.companies.signatures.retrievePaymentSignature(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        token: 'token',
        adminAddress: 'adminAddress',
        amount: 'amount',
        chainId: 0,
        isAmountNative: true,
      },
    );
  });

  // Prism tests are disabled
  test.skip('retrieveWithdrawalSignature: only required params', async () => {
    const responsePromise = client.companies.signatures.retrieveWithdrawalSignature(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        token: 'token',
        adminAddress: 'adminAddress',
        amount: 'amount',
        recipientAddress: 'recipientAddress',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveWithdrawalSignature: required and optional params', async () => {
    const response = await client.companies.signatures.retrieveWithdrawalSignature(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        token: 'token',
        adminAddress: 'adminAddress',
        amount: 'amount',
        recipientAddress: 'recipientAddress',
        chainId: 0,
        isAmountNative: true,
      },
    );
  });
});
