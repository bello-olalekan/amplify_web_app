// All data models and defineData call have been moved to amplify/auth/resource.ts to comply with Amplify Gen 2's single defineData requirement.
// This file is intentionally left blank or can be deleted if not 



import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Expense: a
    .model({
      name:a.string(),
      amount: a.float(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});