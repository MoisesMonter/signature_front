const { Clerk } = require('@clerk/backend');

export const clerk = new Clerk({
  apiKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

module.exports = clerk;