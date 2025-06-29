// Configuration file
export const config = {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || 'default-client-id',
  authServiceUrl: process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || 'http://localhost:3000',
};

export const authPaths = {
  signIn: '/auth/signin',
  signUp: '/auth/signup',
  signOut: '/auth/signout',
};