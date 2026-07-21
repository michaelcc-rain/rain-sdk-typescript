// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RainHelloWorld, { toFile } from 'rain-hello-world';

const client = new RainHelloWorld({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource company', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.applications.company.create({
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
      },
      entity: {
        name: 'name',
        registrationNumber: 'registrationNumber',
        taxId: 'taxId',
        website: 'website',
      },
      initialUser: {
        address: {
          city: 'city',
          country: 'country',
          countryCode: 'xx',
          line1: 'line1',
          postalCode: 'postalCode',
          region: 'region',
        },
        birthDate: '2000-01-01',
        countryOfIssue: 'xx',
        email: 'email',
        firstName: 'firstName',
        lastName: 'lastName',
        nationalId: 'nationalId',
        ipAddress: 'ipAddress',
        isTermsOfServiceAccepted: true,
      },
      name: 'name',
      representatives: [
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
          },
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
        },
      ],
      ultimateBeneficialOwners: [
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
          },
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
        },
      ],
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
    const response = await client.applications.company.create({
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      entity: {
        name: 'name',
        registrationNumber: 'registrationNumber',
        taxId: 'taxId',
        website: 'website',
        description: 'description',
        expectedSpend: 'expectedSpend',
        type: 'type',
      },
      initialUser: {
        address: {
          city: 'city',
          country: 'country',
          countryCode: 'xx',
          line1: 'line1',
          postalCode: 'postalCode',
          region: 'region',
          line2: 'line2',
        },
        birthDate: '2000-01-01',
        countryOfIssue: 'xx',
        email: 'email',
        firstName: 'firstName',
        lastName: 'lastName',
        nationalId: 'nationalId',
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        phoneCountryCode: '1',
        phoneNumber: '5555555555',
        ipAddress: 'ipAddress',
        isTermsOfServiceAccepted: true,
        role: 'role',
        solanaAddress: 'WRktL2iKFTHZg6qNBPzV1b1WLYwfnZ5JSHo2UV8L1R',
        walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      },
      name: 'name',
      representatives: [
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
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          phoneCountryCode: '1',
          phoneNumber: '5555555555',
        },
      ],
      ultimateBeneficialOwners: [
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
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          phoneCountryCode: '1',
          phoneNumber: '5555555555',
        },
      ],
      chainId: 'chainId',
      contractAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      sourceKey: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.applications.company.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.applications.company.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.applications.company.update(
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
          entity: {
            description: 'description',
            expectedSpend: 'expectedSpend',
            registrationNumber: 'registrationNumber',
            taxId: 'taxId',
            type: 'type',
            website: 'website',
          },
          name: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reapply: only required params', async () => {
    const responsePromise = client.applications.company.reapply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
      },
      entity: { website: 'website' },
      initialUser: {
        address: {
          city: 'city',
          country: 'country',
          countryCode: 'xx',
          line1: 'line1',
          postalCode: 'postalCode',
          region: 'region',
        },
        birthDate: '2000-01-01',
        countryOfIssue: 'countryOfIssue',
        ipAddress: 'ipAddress',
        isTermsOfServiceAccepted: true,
        nationalId: 'nationalId',
      },
      name: 'name',
      representatives: [
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
          },
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
        },
      ],
      ultimateBeneficialOwners: [
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
          },
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
        },
      ],
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
  test.skip('reapply: required and optional params', async () => {
    const response = await client.applications.company.reapply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      entity: {
        website: 'website',
        description: 'description',
        expectedSpend: 'expectedSpend',
        type: 'type',
      },
      initialUser: {
        address: {
          city: 'city',
          country: 'country',
          countryCode: 'xx',
          line1: 'line1',
          postalCode: 'postalCode',
          region: 'region',
          line2: 'line2',
        },
        birthDate: '2000-01-01',
        countryOfIssue: 'countryOfIssue',
        ipAddress: 'ipAddress',
        isTermsOfServiceAccepted: true,
        nationalId: 'nationalId',
        role: 'role',
      },
      name: 'name',
      representatives: [
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
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          phoneCountryCode: '1',
          phoneNumber: '5555555555',
        },
      ],
      ultimateBeneficialOwners: [
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
          birthDate: '2000-01-01',
          countryOfIssue: 'xx',
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          nationalId: 'nationalId',
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          phoneCountryCode: '1',
          phoneNumber: '5555555555',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('uploadDocument: only required params', async () => {
    const responsePromise = client.applications.company.uploadDocument(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { document: await toFile(Buffer.from('# my file contents'), 'README.md') },
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
  test.skip('uploadDocument: required and optional params', async () => {
    const response = await client.applications.company.uploadDocument(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        document: await toFile(Buffer.from('# my file contents'), 'README.md'),
        country: 'xxx',
        name: 'name',
        side: 'front',
        type: 'directorsRegistry',
      },
    );
  });
});
