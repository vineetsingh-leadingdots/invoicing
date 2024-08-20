/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      author
      description
      cost
      deleted
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      author
      description
      cost
      deleted
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      author
      description
      cost
      deleted
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
