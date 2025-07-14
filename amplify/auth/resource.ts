import { defineAuth, type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  senders: {
    email: {
      fromEmail: "no-reply@expensetracker.com",
      fromName: "ExpenseTracker",
      replyTo: "support@expensetracker.com",
      },
    },
  });

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
  Expense: a
    .model({
      name: a.string(),
      amount: a.float(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // or 'identityPool' if you prefer
  },
});