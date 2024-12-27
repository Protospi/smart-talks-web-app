const requiredEnvVar = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

export const auth0Config = {
  domain: requiredEnvVar('VITE_AUTH0_DOMAIN', import.meta.env.VITE_AUTH0_DOMAIN),
  clientId: requiredEnvVar('VITE_AUTH0_CLIENT_ID', import.meta.env.VITE_AUTH0_CLIENT_ID),
} as const;