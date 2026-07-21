// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RainHelloWorld from 'rain-hello-world';

const client = new RainHelloWorld({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create({
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.users.create({
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      phoneCountryCode: '1',
      phoneNumber: '5555555555',
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.users.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.users.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
            line2: 'line2',
          },
          email: 'email',
          firstName: 'firstName',
          isActive: true,
          isTermsOfServiceAccepted: true,
          lastName: 'lastName',
          phoneCountryCode: '1',
          phoneNumber: '5555555555',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.list(
        {
          companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          cursor: 'cursor',
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.users.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCard: only required params', async () => {
    const responsePromise = client.users.createCard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      type: 'physical',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCard: required and optional params', async () => {
    const response = await client.users.createCard('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      type: 'physical',
      billing: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      configuration: {
        displayName: 'displayName',
        productId: 'productId',
        productRef: 'productRef',
        virtualCardArt: 'virtualCardArt',
      },
      limit: { amount: 0, frequency: 'per24HourPeriod' },
      shipping: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
        phoneNumber: 'phoneNumber',
        method: 'standard',
      },
      status: 'notActivated',
    });
  });

  // Prism tests are disabled
  test.skip('createCharge: only required params', async () => {
    const responsePromise = client.users.createCharge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 1,
      description: 'description',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCharge: required and optional params', async () => {
    const response = await client.users.createCharge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 1,
      description: 'description',
    });
  });

  // Prism tests are disabled
  test.skip('initiatePayment: only required params', async () => {
    const responsePromise = client.users.initiatePayment('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 0,
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initiatePayment: required and optional params', async () => {
    const response = await client.users.initiatePayment('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 0,
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      chainId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveBalances', async () => {
    const responsePromise = client.users.retrieveBalances('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveContracts', async () => {
    const responsePromise = client.users.retrieveContracts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
