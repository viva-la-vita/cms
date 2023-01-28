export default ({ env }) => {
  let config = {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    url: env('NODE_ENV') === 'production' ? '/' : '/admin',
    serveAdminPanel: env('NODE_ENV') === 'production' ? false : true,
  };
  return config;
};
